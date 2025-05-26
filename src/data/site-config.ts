export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Germán Redondo',
    subtitle: 'Cybersecurity Enthusiast',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: 'CyberSecurity',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/german-redondo'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/redmenge'
        },
        {
            text: 'TryHackMe',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hello and welcome to my room in the internet',
        text: "I'm **Germán Redondo**, a Network Engineer taking the cybersecurity pathway, dedicated to absorbing knowledge of today's technology in a daily basis. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. Feel free to explore some of my projects and work on <a href='https://github.com/redmenge'>GitHub</a> or follow me on <a href='https://www.linkedin.com/in/german-redondo'>LinkedIn</a>.",
        image: {
            src: '/about.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
