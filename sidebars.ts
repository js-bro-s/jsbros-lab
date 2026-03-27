import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  lessonsSidebar: [
    {
      type: "category",
      label: "Lessons",
      collapsible: false,
      items: [
        "lessons/lesson-01-intro",
        "lessons/lesson-02-github-workflow",
        "lessons/lesson-03-roblox-studio-intro",
        "lessons/lesson-04-lua-basics",
      ],
    },
  ],

  exercisesSidebar: [
    {
      type: "category",
      label: "Exercises",
      collapsible: false,
      items: [
        "exercises/ex-01-hello-roblox",
        "exercises/ex-02-variables-and-score",
        "exercises/ex-03-touch-and-color",
      ],
    },
  ],
};

export default sidebars;
