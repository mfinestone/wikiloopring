// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Loopring',
  siteUrl: 'https://loopringdemo.netlify.app',
  titleTemplate: 'Loopring',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com'),
  settings: {
    web: process.env.URL_WEB || 'https://loopring.io' ,
    twitter: process.env.URL_TWITTER || 'https://twitter.com/loopringorg' ,
    github: process.env.URL_GITHUB || 'https://github.com/Loopring' ,
    nav: {
      links: [
        { path: '/api/', title: 'API' },
        { path: '/docs/', title: 'Docs' },
        { path: '/faq/', title: 'FAQ' }
      ]
    },
    sidebar: [
      {
        name: 'api',
        sections: [
          {
            title: 'About',
            items: [
              '/api/',
              '/api/glossary/',
            ]
          },
          {
            title: 'Fundamentals',
            items: [
              '/api/general/',
              '/api/keymanagement/',
              '/api/requestsigning/',
              '/api/orders/',
              '/api/examplecode/',
              '/api/smartcontracts/',
              '/api/uattokens/',
            ]
          }
        ]
      },
      {
        name: 'docs',
        sections: [
          {
            title: 'v3.6',
            items: [
              '/docs/',
              '/docs/deploymentmainnet/',
            ]
          },
           {
            title: 'Navigation',
            items: [
              '/api/',
              '/docs/',
              '/faq/',
            ]
          },
          {
            title: 'Fundamental',
            items: [
              '/api/general/',
              '/api/keymanagement/',
              '/api/requestsigning/',
              '/api/orders/',
              '/api/examplecode/',
              '/api/smartcontracts/',
              '/api/uattokens/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
