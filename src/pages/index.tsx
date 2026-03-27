import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

type Card = {
  title: string;
  emoji: string;
  description: string;
  to: string;
  label: string;
};

const cards: Card[] = [
  {
    title: "Lessons",
    emoji: "📚",
    description:
      "Step-by-step lessons covering Git, Roblox Studio, and Lua. Start at Lesson 1 and work your way through.",
    to: "/lessons/lesson-01-intro",
    label: "Start Lesson 1",
  },
  {
    title: "Exercises",
    emoji: "💻",
    description:
      "Hands-on Lua coding challenges with hints and solutions. Open in Roblox Studio and get building.",
    to: "/exercises/ex-01-hello-roblox",
    label: "Try Exercise 1",
  },
  {
    title: "GitHub Guide",
    emoji: "🔧",
    description:
      "The four commands you need to save and share your work. Bookmark this page.",
    to: "/github-guide",
    label: "Open Guide",
  },
  {
    title: "Progress Tracker",
    emoji: "🏆",
    description:
      "Track which lessons and exercises each student has completed, plus skill badges.",
    to: "/progress-tracker",
    label: "View Progress",
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="JS Bros Lab — Learn to build games, use Git, and write Lua code."
    >
      <header className={styles.hero}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            JS Bros Lab
          </Heading>
          <p className={styles.heroSubtitle}>
            Learn to build. Build to learn.
          </p>
          <div className={styles.heroCta}>
            <Link
              className="button button--primary button--lg"
              to="/lessons/lesson-01-intro"
            >
              Start Lesson 1 →
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/github-guide"
            >
              GitHub Guide
            </Link>
          </div>
        </div>
      </header>

      <main className="container" style={{ padding: "3rem" }}>
        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardEmoji}>{card.emoji}</div>
              <Heading as="h3">{card.title}</Heading>
              <p>{card.description}</p>
              <Link className="button button--outline button--primary" to={card.to}>
                {card.label}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
