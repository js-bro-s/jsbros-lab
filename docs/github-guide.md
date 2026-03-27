---
displayed_sidebar: null
---

# GitHub Guide for JS Bros

> Git is how we save our work, share it, and never lose anything. This guide is your cheat sheet.

---

## The Four Commands (Memorize These)

Every time you finish working, run these **in this order**:

```bash
git status        # See what you changed
git add .         # Get your changes ready
git commit -m ""  # Save with a description
git push          # Send it to GitHub
```

**Real example:**
```bash
git status
git add .
git commit -m "add touch script to my obstacle course"
git push
```

---

## Starting Fresh on a New Computer

```bash
git clone https://github.com/js-bro-s/jsbros-lab.git
cd jsbros-lab
```

---

## How to Write a Good Commit Message

A commit message answers: **"What did I do?"**

| ❌ Bad | ✅ Good |
|--------|---------|
| `update` | `add color change to lava part` |
| `stuff` | `fix score not resetting on respawn` |
| `changes` | `add welcome message for new players` |
| `asdfjkl` | `add about-me.md with my info` |

**Rule:** If you can't describe what you did, you probably changed too much at once. Split it up.

---

## Branches (When You're Ready)

A branch is your **own copy** to experiment in without breaking anything.

```bash
# Start your own branch
git checkout -b yourname-feature

# Work, save, commit like normal
git add .
git commit -m "trying new jump mechanic"
git push -u origin yourname-feature
```

Dad will review it and merge it into `main` when it's ready.

**You never push directly to `main`.** That's the rule.

---

## Undo Stuff

**See your save history:**
```bash
git log --oneline
```

**Go back and look at an old version (read-only):**
```bash
git checkout abc1234   # use the commit hash from git log
```

**Get back to the latest version:**
```bash
git checkout main
```

**Remove changes you haven't committed yet (careful — this deletes your work):**
```bash
git restore .
```

---

## Pull (Get Someone Else's Changes)

If someone else pushed code and you want it:
```bash
git pull
```

Always pull before you start working each session.

---

## The Golden Rules

1. **Pull before you work**
2. **Commit often** — small saves are better than one giant save
3. **Write real commit messages**
4. **Never commit broken code to `main`**
5. **Ask Dad before doing anything with `git reset` or `git push --force`**

---

## Quick Glossary

| Word | What It Means |
|------|--------------|
| **Repository (repo)** | A project folder tracked by Git |
| **Commit** | A saved snapshot of your changes |
| **Push** | Send your commits to GitHub |
| **Pull** | Get the latest commits from GitHub |
| **Branch** | Your own copy to experiment in |
| **Merge** | Combining a branch back into main |
| **Clone** | Download a repo to your computer |
| **Status** | See what files you've changed |
