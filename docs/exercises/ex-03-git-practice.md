---
sidebar_position: 3
---

# Exercise 03 · Git Practice

**Lesson:** 03 — Git in Action | **Difficulty:** Beginner

**Goal:** Prove you can use the four commands on your own, from scratch, without help.

---

## Rules

- No asking for help on the commands
- No copying from the lesson — try from memory
- If you get stuck, write down which step you got stuck on before looking it up

---

## Your Task

Complete all 5 checkpoints in order. Each one requires a commit.

---

### Checkpoint 1 — Start Clean

Open your terminal, navigate to the `jsbros-lab` folder, and run:

```bash
git status
```

- [ ] You can see the repo is up to date or has expected changes
- [ ] You are on the `main` branch

---

### Checkpoint 2 — Create a File and Commit It

1. Create a new file called `ideas.md`
2. Write at least 3 game ideas in it (bullet points)
3. Run the four commands with the commit message: `add ideas list`

- [ ] File created
- [ ] Commit made with a real message
- [ ] `git status` shows nothing to commit after pushing

---

### Checkpoint 3 — Edit and Commit Again

1. Open `ideas.md` and add 2 more ideas
2. Also add a `##` heading called `My Favourite Idea` and write one sentence about which idea is
   your favourite
3. Commit with the message: `update ideas with favourite`

- [ ] File edited
- [ ] Commit message describes the change accurately

---

### Checkpoint 4 — Create a Branch

1. Create a new branch with your name in it: `git checkout -b yourname-experiment`
2. Create a file called `experiment.md` with anything you want in it
3. Commit and push the branch: `git push -u origin yourname-experiment`

- [ ] New branch created
- [ ] File committed on that branch
- [ ] Branch visible on GitHub

---

### Checkpoint 5 — Read the History

Run:

```bash
git log --oneline
```

- [ ] You can see at least 3 commits listed
- [ ] Write down what the last 3 commits were (on paper or in a note)

---

## Bonus

Switch back to `main` and look at the difference between `main` and your branch on GitHub's branch
selector. Notice that `experiment.md` doesn't exist on `main`.

---

**You're done when:** All 5 checkpoints are ticked ✅

---

:::tip Print this Exercise
[📄 Download the Exercise 03 reference sheet (light/print)](/cheatsheets/ex-03-sheet-light.pdf) —
tick off each item as you complete it. :::
