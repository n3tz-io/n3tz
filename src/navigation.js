import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
      title: 'Pages',
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
  ],
  secondaryLinks: [
    /*  {
      text: 'Privacy',
      href: '/privacy',
    },
    {
      text: 'Terms',
      href: '/terms',
    }, */
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
  ],
  footNote: `
   \u00A92024 n3tz, Ltd. · All rights reserved.
  `,
};
