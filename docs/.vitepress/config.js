import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "en-GB",
    title: "Solidrock",
    description:
        "Guides for setting up and managing your events in Solidrock Booking System.",
    head: [
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/icons/apple-touch-icon.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/icons/favicon-32x32.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/icons/favicon-16x16.png",
            },
        ],
        ["link", { rel: "manifest", href: "/icons/manifest.json" }],
        [
            "link",
            {
                rel: "mask-icon",
                href: "/icons/safari-pinned-tab.svg",
                color: "#4990e2",
            },
        ],
        ["link", { rel: "shortcut icon", href: "/icons/favicon.ico" }],
        ["meta", { name: "msapplication-TileColor", content: "#4990e2" }],
        [
            "meta",
            {
                name: "msapplication-config",
                content: "/icons/browserconfig.xml",
            },
        ],
        ["meta", { name: "theme-color", content: "#ffffff" }],
        [
            "script",
            {
                async: "",
                src: "https://www.googletagmanager.com/gtag/js?id=G-L956W1RNZQ",
            },
        ],
        [
            "script",
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-L956W1RNZQ');`,
        ],
    ],
    themeConfig: {
        lastUpdatedText: "Last Updated",
        editLink: false,

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/" },
            { text: "FAQs", link: "/faqs/" },
            { text: "Releases", link: "/releases/" },
            { text: "Booking System", link: "https://events.solidrock.io" },
        ],

        aside: "right",

        sidebar: {
            "/guide/": [
                {
                    text: "Getting Started",
                    link: "/guide/",
                },
                {
                    collapsed: true,
                    text: "Accounts",
                    link: "/guide/accounts/",
                    items: [
                        {
                            text: "Registration",
                            link: "/guide/accounts/registration",
                        },
                        {
                            text: "Account Types",
                            link: "/guide/accounts/account-types",
                        },
                        {
                            text: "Two Factor Authentication",
                            link: "/guide/accounts/two-factor-authentication",
                        },
                    ],
                },
                {
                    collapsed: true,
                    text: "Tickets",
                    link: "/guide/tickets/ticket-options",
                    items: [
                        {
                            text: "Tickets Options",
                            link: "/guide/tickets/ticket-options",
                        },
                        {
                            text: "Ticket Sets",
                            link: "/guide/tickets/ticket-sets",
                        },
                    ],
                },
                {
                    collapsed: true,
                    text: "Teams",
                    link: "/guide/teams/",
                    items: [
                        {
                            text: "Team Management",
                            link: "/guide/teams/teams",
                        },
                        {
                            text: "Tem Member Approval Criteria",
                            link: "/guide/teams/approval",
                        },
                        {
                            text: "Team Access Levels",
                            link: "/guide/teams/access",
                        },
                        {
                            text: "Team Leaders",
                            link: "/guide/teams/leaders",
                        },
                    ],
                },
                {
                    collapsed: true,
                    text: "Form Builder",
                    link: "/guide/form-builder/",
                    items: [
                        {
                            text: "Form Builder",
                            link: "/guide/form-builder/",
                        },
                        {
                            text: "Fields",
                            link: "/guide/form-builder/fields",
                        },
                        {
                            text: "Forms",
                            link: "/guide/form-builder/forms",
                        },
                    ],
                },
                {
                    collapsed: true,
                    text: "Front of House",
                    link: "/guide/front-of-house/",
                    items: [
                        {
                            text: "Arrivals",
                            link: "/guide/front-of-house/arrivals",
                        },
                        {
                            text: "Box Office",
                            link: "/guide/front-of-house/box-office",
                        },
                        {
                            text: "Check In & Out",
                            link: "/guide/front-of-house/check-in-out",
                        },
                        {
                            text: "Search",
                            link: "/guide/front-of-house/search",
                        },
                    ],
                },
                {
                    collapsed: true,
                    text: "Payment Plans",
                    link: "/guide/payment-plans/",
                    items: [
                        {
                            text: "Creating and Editing",
                            link: "/guide/payment-plans/creating-editing",
                        },
                        {
                            text: "Instalments",
                            link: "/guide/payment-plans/instalments",
                        },
                        {
                            text: "Lead Booker Payments",
                            link: "/guide/payment-plans/lead-booker-payments",
                        },
                    ],
                },
                {
                    text: "Organisations",
                    link: "/guide/organisations",
                },
                {
                    text: "Events",
                    link: "/guide/events",
                },
                {
                    text: "Digital Events",
                    link: "/guide/digital-events",
                },
                {
                    text: "Extras",
                    link: "/guide/extras",
                },
                {
                    text: "Discounts",
                    link: "/guide/discounts",
                },
                {
                    text: "Integrations",
                    link: "/guide/integrations",
                },
            ],
            "/faqs/": [
                {
                    text: "FAQs",
                    link: "/faqs/",
                },
            ],
            "/releases/": [
                {
                    text: "Releases",
                    link: "/releases/",
                },
            ],
        },

        search: {
            provider: "local",
        },
    },
});
