export const sitemap = [
  {
    title: 'Company',
    pages: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Features',
        url: '/',
      },
      {
        label: 'Screenshots',
        url: '/',
      },
      {
        label: 'Pricing',
        url: '/',
      },
      {
        label: 'Team',
        url: '/',
      },
    ],
  },
  {
    title: 'Help',
    pages: [
      {
        label: 'Help Center',
        url: '/',
      },
      {
        label: "FAQ'S",
        url: '/',
      },
      {
        label: 'Terms & Conditions',
        url: '/',
      },
      {
        label: 'Privacy',
        url: '/',
      },
      {
        label: 'Contacts',
        url: '/',
      },
    ],
  },
  {
    title: 'Solutions',
    pages: [
      {
        label: 'Consumer',
        url: '/',
      },
      {
        label: 'Saas',
        url: '/',
      },
      {
        label: 'Education',
        url: '/',
      },
      {
        label: 'Gaming',
        url: '/',
      },
      {
        label: 'Financial Services',
        url: '/',
      },
    ],
  },
];
export interface SiteMapEntry {
  title: string;
  pages: {
    label: string;
    url: string;
  }[];
};
