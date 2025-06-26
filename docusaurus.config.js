// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Mylyzer مستندات',
  tagline: 'راهنمای کامل استفاده از ربات تحلیل‌گر مشتری',
  url: 'https://Mylyzer.github.io',
  baseUrl: '/mylyzer-docs/',
  
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Mylyzer', // 👈 GitHub username
  projectName: 'mylyzer-docs',       // 👈 GitHub repo name

  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
