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
            { text: 'FAQs', link: '/faqs/' },
            { text: 'Releases', link: '/releases/' },
            { text: 'Booking System', link: 'https://events.solidrock.io' }
        ],
        lastUpdated: 'Last Updated',
        editLink: false,
        contributors: false,
        sidebarDepth: 3,
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    children: [
                        '/guide/',
                        '/guide/accounts',
                        '/guide/organisations',
                        '/guide/events',
                        '/guide/digital-events',
                        {
                            collapsible: true,
                            text: 'Tickets',
                            link: '/guide/tickets/ticket-options',
                            children: [
                                {
                                    text: 'Tickets Options',
                                    link: '/guide/tickets/ticket-options',
                                },
                                {
                                    text: 'Ticket Sets',
                                    link: '/guide/tickets/ticket-sets',
                                },
                            ],
                        },
                        '/guide/extras',
                        '/guide/discounts',
                        {
                            collapsible: true,
                            text: 'Teams',
                            link: '/guide/teams/',
                            children: [
                                '/guide/teams/teams',
                                '/guide/teams/approval',
                                '/guide/teams/access',
                                '/guide/teams/leaders',
                            ]
                        },
                        {
                            collapsible: true,
                            text: 'Form Builder',
                            link: '/guide/form-builder/',
                            children: [
                                '/guide/form-builder/',
                                '/guide/form-builder/fields',
                                '/guide/form-builder/forms',
                            ]
                        },
                        {
                            collapsible: true,
                            text: 'Front of House',
                            link: '/guide/front-of-house/',
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
                        '/guide/integrations',
                        {
                            collapsible: true,
                            text: 'Payment Plans',
                            link: '/guide/payment-plans',
                            children: [
                                {
                                    text: 'Creating and Editing',
                                    link: '/guide/payment-plans/creating-editing',
                                },
                                {
                                    text: 'Instalments',
                                    link: '/guide/payment-plans/instalments',
                                },
                                {
                                    text: 'Lead Booker Payments',
                                    link: '/guide/payment-plans/lead-booker-payments',
                                },
                            ]
                        }
                    ]
                }
            ],
            '/faqs/': [
                {
                    text: 'FAQs',
                    link: '/faqs/',
                },
            ],
            '/releases/': [
                {
                    text: 'Releases',
                    link: '/releases/',
                }
            ]
        }
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