import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'action.contact', href: '/contact', translate: true }],
};

export const footerData = {
  links: [
    {
      title: 'footer.pages',
      links: [
        {
          text: 'nav.home',
          href: '/',
        },
        {
          text: 'nav.contact',
          href: '/contact',
        },
        {
          text: 'nav.blog',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      title: 'footer.founder',
      links: [
        {
          text: 'tarik',
          href: 'https://tarik.n3tz.io',
          target: '_blank',
        },
      ],
    },
  ],
  resources: [
    {
      title: 'footer.resources',
      links: [
        {
          text: 'footer.privacy',
          href: '/privacy',
        },
        {
          text: 'footer.terms',
          href: '/termsofservice',
        },
        {
          text: 'footer.refund',
          href: '/refund',
        },
        {
          text: 'footer.cookie',
          href: '/cookie',
        },
        {
          text: 'footer.imprint',
          href: '/impressum',
        },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/n3tz_io', target: '_blank' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://linkedin.com/company/n3tz-ltd',
      target: '_blank',
    },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/n3tz-io', target: '_blank' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://n3tz.medium.com', target: '_blank' },
  ],
  footNote: 'footer.copyright',
};
