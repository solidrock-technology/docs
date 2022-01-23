module.exports = {
    lang: 'en-GB',
    title: 'Solidrock',
    description: 'Guides for setting up and managing your events in Solidrock Booking System.',
    head: [
        ['link', { rel: 'icon', href: '/icons/icon.png' }]
    ],
    themeConfig: {
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Booking System', link: 'https://events.solidrock.io' }
        ],
        lastUpdated: 'Last Updated',
        // smoothScroll: true,
        editLink: false,
        contributors: false,
        sidebarDepth: 3,
        sidebar: [
            '/guide/',
            '/guide/accounts',
            '/guide/organisations',
            '/guide/events',
            '/guide/digital-events',
            {
                text: 'Tickets',
                children: [
                  {
                      text: 'Tickets List',
                      link: '/guide/tickets',
                  },
                  {
                    text: 'Ticket Sets',
                    link: '/guide/tickets/ticket-sets',
                  },
                ],
              },
            '/guide/extras',
            '/guide/discounts',
            '/guide/teams',
            '/guide/integrations'
        ]
    },
    plugins: [
        [
            '@vuepress/plugin-search', {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    }
                }
            }
        ]
    ]
}