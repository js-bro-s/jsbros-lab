import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "JS Bros Lab",
  tagline: "Learn to build. Build to learn.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://js-bro-s.github.io",
  baseUrl: "/jsbros-lab/",

  organizationName: "js-bro-s",
  projectName: "jsbros-lab",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/js-bro-s/jsbros-lab/tree/main/",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/jsbros-social.png",
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "JS Bros Lab",
      logo: {
        alt: "JS Bros Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "lessonsSidebar",
          position: "left",
          label: "Lessons",
        },
        {
          type: "docSidebar",
          sidebarId: "exercisesSidebar",
          position: "left",
          label: "Exercises",
        },
        {
          to: "/github-guide",
          label: "GitHub Guide",
          position: "left",
        },
        {
          to: "/progress-tracker",
          label: "Progress",
          position: "left",
        },
        {
          href: "https://github.com/js-bro-s/jsbros-lab",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            { label: "Lesson 1 — Intro", to: "/lessons/lesson-01-intro" },
            { label: "Lesson 2 — Git", to: "/lessons/lesson-02-github-workflow" },
            { label: "Lesson 3 — Studio", to: "/lessons/lesson-03-roblox-studio-intro" },
            { label: "Lesson 4 — Lua", to: "/lessons/lesson-04-lua-basics" },
          ],
        },
        {
          title: "Practice",
          items: [
            { label: "Ex 01 — Hello Roblox", to: "/exercises/ex-01-hello-roblox" },
            { label: "Ex 02 — Variables", to: "/exercises/ex-02-variables-and-score" },
            { label: "Ex 03 — Touch Event", to: "/exercises/ex-03-touch-and-color" },
          ],
        },
        {
          title: "JS Bros",
          items: [
            { label: "GitHub Org", href: "https://github.com/js-bro-s" },
            { label: "Games", href: "https://github.com/js-bro-s/jsbros-games" },
            { label: "Prints", href: "https://github.com/js-bro-s/jsbros-prints" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} JS Bros. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["lua", "bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
