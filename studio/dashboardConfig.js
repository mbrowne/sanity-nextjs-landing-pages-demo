export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f7f30bf9e190109796a85c1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-demo-studio-azcfsmhs',
                  apiId: 'ba276d33-92d7-44c5-8bbc-984153d80ab5'
                },
                {
                  buildHookId: '5f7f30bf9e19010b0a6a832b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-demo-web-cn52ng8p',
                  apiId: '210f86d6-ce84-4ca9-b28d-7b48259fa3f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mbrowne/sanity-nextjs-landing-pages-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-demo-web-cn52ng8p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
