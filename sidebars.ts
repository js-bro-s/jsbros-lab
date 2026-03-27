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
          id: "exercises/ex-01-hello-roblox",
          label: "Ex 01 · Hello Roblox",
        },
        {
          type: "doc",
          id: "exercises/ex-02-variables-and-score",
          label: "Ex 02 · Variables & Score",
        },
        {
          type: "doc",
          id: "exercises/ex-03-touch-and-color",
          label: "Ex 03 · Touch & Color",
        },
      ],
    },
  ],
};

export default sidebars;
