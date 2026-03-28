---
sidebar_position: 3
---

# JS Bros Lab — Lesson 3

## Roblox Studio: Your First Baseplate

- **Duration:** 60 minutes
- **Prereq:** Roblox Studio installed, Lessons 1–2 done
- **Goal:** Kids navigate Studio, place parts, and run their first playtest

---

## 0–5 min — Context

> "Everything you've played in Roblox was built in exactly this tool. Today you learn to use it."

- Open Roblox Studio
- Show the interface: Explorer, Properties, Viewport, Toolbox
- One sentence per panel — don't over-explain

---

## 5–20 min — The Five Panels (Tour Only)

| Panel          | What It Does                              |
| -------------- | ----------------------------------------- |
| **Viewport**   | 3D world — what players will see          |
| **Explorer**   | The family tree of everything in the game |
| **Properties** | Settings for whatever you clicked         |
| **Toolbox**    | Free models and assets from Roblox        |
| **Output**     | Where errors and print messages show up   |

**Activity:** Each kid clicks something in the Explorer and reads what shows up in Properties.

---

## 20–35 min — Build Something Simple

Each kid starts a **Baseplate** template and does exactly this:

1. Insert a **Part** (`+` button in Explorer or Model tab → Part)
2. In Properties, change:
   - `BrickColor` → pick any color
   - `Size` → make it bigger: `10, 1, 10`
   - `Material` → SmoothPlastic or Neon
3. Move it using the **Move tool** (keyboard shortcut: `W`)
4. Duplicate it (`Ctrl+D`) — make a small structure

**Goal:** Build something — anything. A wall, a tower, a platform. Just build.

---

## 35–45 min — First Playtest

- Hit **Play** (or `F5`)
- Walk around their creation as a character
- Notice: what's solid, what they can walk through, what feels wrong

**Discussion after:**
- "What did you notice when you played it?"
- "What would you change?"
- "What does 'Anchored' mean in Properties?" (Answer: the part won't fall)

**Key concept:**
> "Anchored = frozen in place. Un-anchored = physics applies."

---

## 45–55 min — Save to GitHub (Link Back)

1. File → Save to File → save as `MyFirstPlace.rbxl` in `jsbros-games/`
2. Open terminal, navigate to `jsbros-games/`
3. Run the four commands:

```bash
git status
git add .
git commit -m "add first studio build"
git push
```

> "Every time you build something, you save it to GitHub. That's your backup."

---

## 55–60 min — Wrap Up

**Ask each kid:**
- "What did you build?"
- "Name one thing you want to add next time"

**Next lesson preview:**
> "Next time: we write our first line of Lua code inside that world."