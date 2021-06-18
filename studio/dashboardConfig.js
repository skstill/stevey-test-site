export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ccf4ed0db00b6fffedeae3',
                  title: 'Sanity Studio',
                  name: 'stevey-test-site-studio',
                  apiId: '40091a27-e666-4411-bff0-621f3715e363'
                },
                {
                  buildHookId: '60ccf4ee341eb6490b611812',
                  title: 'Blog Website',
                  name: 'stevey-test-site',
                  apiId: 'b846ef1d-ccce-4181-b344-25f32672630e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skstill/stevey-test-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://stevey-test-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
