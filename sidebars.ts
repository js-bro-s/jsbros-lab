import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  lessonsSidebar: [
    {
      type: "category",
      label: "Lessons",
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "lessons/lesson-01-intro",
          label: "01 · What We're Building",
        },
        {
          type: "doc",
          id: "lessons/lesson-02-markdown",
          label: "02 · Writing with Markdown",
        },
        {
          type: "doc",
          id: "lessons/lesson-03-github-workflow",
          label: "03 · Git in Action",
        },
        {
          type: "doc",
          id: "lessons/lesson-04-roblox-studio-intro",
          label: "04 · Roblox Studio Basics",
        },
        {
          type: "doc",
          id: "lessons/lesson-05-lua-basics",
          label: "05 · Lua Basics",
        },
        {
          type: "doc",
          id: "lessons/lesson-06-loops",
          label: "06 · Loops",
        },
        {
          type: "doc",
          id: "lessons/lesson-07-functions",
          label: "07 · Functions",
        },
        {
          type: "doc",
          id: "lessons/lesson-08-tables",
          label: "08 · Tables & Lists",
        },
        {
          type: "doc",
          id: "lessons/lesson-09-first-game",
          label: "09 · Build Your First Game",
        },
        {
          type: "doc",
          id: "lessons/lesson-10-gui",
          label: "10 · GUI & Score Display",
        },
        {
          type: "doc",
          id: "lessons/lesson-11-sounds-effects",
          label: "11 · Sounds & Effects",
        },
      ],
    },
  ],

  exercisesSidebar: [
    {
      type: "category",
      label: "Exercises",
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "exercises/ex-01-about-me",
          label: "Ex 01 · About Me",
        },
        {
          type: "doc",
          id: "exercises/ex-02-markdown-challenge",
          label: "Ex 02 · Markdown Challenge",
        },
        {
          type: "doc",
          id: "exercises/ex-03-git-practice",
          label: "Ex 03 · Git Practice",
        },
        {
          type: "doc",
          id: "exercises/ex-04-studio-build",
          label: "Ex 04 · Studio Build",
        },
        {
          type: "doc",
          id: "exercises/ex-05-lua-basics-challenge",
          label: "Ex 05 · Lua Basics",
        },
        {
          type: "doc",
          id: "exercises/ex-06-loops-challenge",
          label: "Ex 06 · Loops",
        },
        {
          type: "doc",
          id: "exercises/ex-07-functions-challenge",
          label: "Ex 07 · Functions",
        },
        {
          type: "doc",
          id: "exercises/ex-08-tables-challenge",
          label: "Ex 08 · Tables & Lists",
        },
        {
          type: "doc",
          id: "exercises/ex-09-game-extension",
          label: "Ex 09 · Game Extension",
        },
        {
          type: "doc",
          id: "exercises/ex-10-gui-challenge",
          label: "Ex 10 · GUI Challenge",
        },
        {
          type: "doc",
          id: "exercises/ex-11-effects-challenge",
          label: "Ex 11 · Sounds & Effects",
        },
      ],
    },
  ],
};

export default sidebars;
