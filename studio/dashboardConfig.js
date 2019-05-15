export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cdb5fc817d936575937c841',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n72u6thr',
                  apiId: '9bec755a-af85-42ae-8552-e792b8f18c82'
                },
                {
                  buildHookId: '5cdb5fc8e14621ef76d7839d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-j3yfy8qn',
                  apiId: 'c5bdf1ec-92e5-406e-8834-0074593c8dac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dnafication/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-j3yfy8qn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
