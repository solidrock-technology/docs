module.exports = {
    title: 'Solidrock',
    description: 'Guides for setting up and managing your events in Solidrock Booking System.',
    head: [
        ['link', { rel: 'icon', href: '/icons/icon.png' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Booking System', link: 'https://events.solidrock.io' }
        ],
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        sidebarDepth: 2,
        sidebar: [
            '/guide/',
            '/guide/accounts',
            '/guide/organisations',
            '/guide/events',
            '/guide/digital-events',
            '/guide/tickets',
            '/guide/extras',
            '/guide/integrations'
        ]
    }
}