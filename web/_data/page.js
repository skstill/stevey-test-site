const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generatePage (page) {
  return {
    ...page,
    body: BlocksToMarkdown(page.body, { serializers, ...client.config() })
  }
}

async function getPages () {
  const filter = groq`*[_type == "page"]`
  const projection = groq`{
    _id,
    title,
    slug,
    body[]{
      ...,
      children[]{
        ...,
        // Join inline reference
      }
    },
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePages = reducedDocs.map(generatePage)
  return preparePages
}

module.exports = getPages
