---
sidebar_position: 2
---

# JS Bros Lab — Lesson 2

## Git in Action: Save Your Work Like a Pro

- **Duration:** 60 minutes
- **Prereq:** Lesson 1 complete, repo cloned locally
- **Goal:** Kids make their first real commit and push to GitHub

---

## 0–5 min — Recap

Ask the group:
- "What is a repository?"
- "What does a commit do?"
- "Where does GitHub store it?"

> If they can answer, they're ready. If not, do a 2-minute refresh.

---

## 5–15 min — The Four Commands (Teach Only These)

Write these on a whiteboard or sticky note at every desk:

```bash
git status          # What changed?
git add .           # Stage everything
git commit -m ""    # Save with a message
git push            # Send to GitHub
```

**Explain each one:**

- `git status` → "Shows you what's messy"
- `git add .` → "Picks up everything and gets it ready"
- `git commit -m "message"` → "Takes the photo — describe what you did"
- `git push` → "Sends your photo to the cloud"

**Key phrase:**
> "Status. Add. Commit. Push. In that order. Every time."

---

## 15–30 min — First Real Commit

Each kid:

1. Opens their cloned repo in VS Code or a text editor
2. Creates a new file: `about-me.md`
3. Writes 3 lines about themselves (name, favorite game, one goal)
4. Runs the four commands
5. Checks GitHub to see their file appear live

**Dad's job:** Walk around and help unstick anyone. Don't type for them — point and guide.

**Common problems:**

| Problem                       | Fix                                                      |
| ----------------------------- | -------------------------------------------------------- |
| `git: command not found`      | Git isn't installed — open terminal, run `git --version` |
| Nothing shows in `git status` | They're in the wrong folder — `cd jsbros-lab`            |
| Commit message missing        | Need quotes: `git commit -m "add about-me"`              |
| Push asks for login           | Set up GitHub credentials first                          |

---

## 30–40 min — Branches (Concept + Demo Only)

**Don't make them do this yet. Just show it.**

```bash
git checkout -b jaxon-ideas
# make a change
git add .
git commit -m "new idea from Jaxon"
git push -u origin jaxon-ideas
```

**Why this matters:**
> "A branch is your own sandbox. You can experiment without breaking the main project. When it's ready, Dad reviews it and merges it in."

---

## 40–55 min — Group Challenge

Everyone picks one of these and commits it:

- Add a `favorite-games.md` with their top 3 Roblox games
- Edit the `README.md` to add their name as a contributor
- Add a `ideas.md` with one feature they want to build

**Rule:** Commit message must describe exactly what they did. No `"update"` or `"stuff"`.

---

## 55–60 min — Wrap Up

Review each person's GitHub — everyone should see at least 2 commits.

**Discussion:**
- "Why do we write good commit messages?"
- "What would happen if two people edited the same file?"

**Key phrase for next time:**
> "Next lesson we open Roblox Studio."

---

:::tip Print Reference
[📄 Download the Lesson 03 cheatsheet](/cheatsheets/lesson-03-cheatsheet.pdf) — print it and keep it on your desk while you work.
:::
