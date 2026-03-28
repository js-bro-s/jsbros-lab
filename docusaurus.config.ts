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
    image: "img/jsbros-lab-banner-alt.png",
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
          title: "Lessons 1–6",
          items: [
            {
              label: "01 · What We're Building",
              to: "/lessons/lesson-01-intro",
            },
            {
              label: "02 · Writing with Markdown",
              to: "/lessons/lesson-02-markdown",
            },
            {
              label: "03 · Git in Action",
              to: "/lessons/lesson-03-github-workflow",
            },
            {
              label: "04 · Roblox Studio Basics",
              to: "/lessons/lesson-04-roblox-studio-intro",
            },
            { label: "05 · Lua Basics", to: "/lessons/lesson-05-lua-basics" },
            { label: "06 · Loops", to: "/lessons/lesson-06-loops" },
          ],
        },
        {
          title: "Lessons 7–11",
          items: [
            { label: "07 · Functions", to: "/lessons/lesson-07-functions" },
            { label: "08 · Tables & Lists", to: "/lessons/lesson-08-tables" },
            {
              label: "09 · Build Your First Game",
              to: "/lessons/lesson-09-first-game",
            },
            { label: "10 · GUI & Score Display", to: "/lessons/lesson-10-gui" },
            {
              label: "11 · Sounds & Effects",
              to: "/lessons/lesson-11-sounds-effects",
            },
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
