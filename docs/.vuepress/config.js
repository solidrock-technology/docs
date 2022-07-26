const { defaultTheme } = require('@vuepress/theme-default');
const { searchPlugin } = require('@vuepress/plugin-search');

module.exports = {
    lang: 'en-GB',
    title: 'Solidrock',
    description: 'Guides for setting up and managing your events in Solidrock Booking System.',
    head: [
        ['link', { rel: 'icon', href: '/icons/icon.png' }]
    ],
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Releases', link: '/releases/' },
            { text: 'Booking System', link: 'https://events.solidrock.io' }
        ],
        lastUpdated: 'Last Updated',
        editLink: false,
        contributors: false,
        sidebarDepth: 3,
        sidebar: [
            {
                text: 'Guide',
                link: '/guide/',
                children: [
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
                    {
                        text: 'Front of House',
                        link: '/guide/front-of-house',
                        children: [
                            {
                                text: 'Arrivals',
                                link: '/guide/front-of-house/arrivals',
                            },
                            {
                                text: 'Box Office',
                                link: '/guide/front-of-house/box-office',
                            },
                            {
                                text: 'Check In & Out',
                                link: '/guide/front-of-house/check-in-out',
                            },
                            {
                                text: 'Search',
                                link: '/guide/front-of-house/search',
                            },
                        ]
                    },
                    '/guide/integrations'
                ]
            },
            {
                text: 'Releases',
                link: '/releases/',
                children: ['/releases/index.md']
            }
        ]
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                }
            }
        })
    ]
}