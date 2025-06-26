// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Mylyzer مستندات',
  tagline: 'راهنمای کامل استفاده از ربات تحلیل‌گر مشتری',
    url: 'http://localhost:3000',
    baseUrl: '/',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

//   organizationName: 'your-username', // 👈 GitHub username
//   projectName: 'mylyzer-docs',       // 👈 GitHub repo name

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
