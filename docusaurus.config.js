import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'PantsuStreaming',
  tagline: 'PantsuStreaming API Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://Kitsu-Senpai.github.io',
  baseUrl: '/PantsuStreaming/',
  organizationName: 'PantsuStreaming',
  projectName: 'PantsuStreaming',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Kitsu-Senpai/PantsuStreaming.Docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      mermaid: {
        theme: { light: "neutral", dark: "dark" },
      },
      announcementBar: {
        id: "prerelease",
        content: 'PantsuStreaming is currently in development. Many features are missing and bugs are to be expected.',
        backgroundColor: "#3DB4F2",
        textColor: "#ffffff",
        isCloseable: true,
      },
      navbar: {
        title: 'PantsuStreaming',
        logo: {
          alt: 'PantsuStreaming',
          src: 'img/pantsuIcon64.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Kitsu-Senpai/PantsuStreaming.Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ["powershell", "markdown"],
      },
    }),
};

module.exports = config;