import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "JS Bros Lab",
  tagline: "Learn to build. Build to learn.",
  favicon: "img/favicon.ico",
  staticDirectories: ["public", "static"],
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
    image: "img/banner.png",
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "JS Bros Lab",
      logo: {
        alt: "JS Bros Logo",
        src: "img/js-bros-lab-favicon-neon.svg",
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
          title: "Lessons 1–5",
          items: [
            { label: "1 — Intro", to: "/lessons/lesson-01-intro" },
            { label: "2 — Git", to: "/lessons/lesson-02-github-workflow" },
            { label: "3 — Studio", to: "/lessons/lesson-03-roblox-studio-intro" },
            { label: "4 — Lua Basics", to: "/lessons/lesson-04-lua-basics" },
            { label: "5 — Loops", to: "/lessons/lesson-05-loops" },
          ],
        },
        {
          title: "Lessons 6–10",
          items: [
            { label: "6 — Functions", to: "/lessons/lesson-06-functions" },
            { label: "7 — Tables", to: "/lessons/lesson-07-tables" },
            { label: "8 — First Game", to: "/lessons/lesson-08-first-game" },
            { label: "9 — GUI", to: "/lessons/lesson-09-gui" },
            { label: "10 — Sounds & Effects", to: "/lessons/lesson-10-sounds-effects" },
          ],
        },
        {
          title: "Practice",
          items: [
            {
              label: "Ex 01 — Hello Roblox",
              to: "/exercises/ex-01-hello-roblox",
            },
            {
              label: "Ex 02 — Variables",
              to: "/exercises/ex-02-variables-and-score",
            },
            {
              label: "Ex 03 — Touch Event",
              to: "/exercises/ex-03-touch-and-color",
            },
          ],
        },
        {
          title: "JS Bros",
          items: [
            { label: "GitHub Org", href: "https://github.com/js-bro-s" },
            {
              label: "Games",
              href: "https://github.com/js-bro-s/jsbros-games",
            },
            {
              label: "Prints",
              href: "https://github.com/js-bro-s/jsbros-prints",
            },
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
