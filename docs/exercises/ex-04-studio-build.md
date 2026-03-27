---
sidebar_position: 4
---

# Exercise 04 · Studio Build Challenge

**Lesson:** 04 — Roblox Studio Basics | **Difficulty:** Beginner

**Goal:** Build a specific structure in Roblox Studio using only what you learned — no scripts yet.

---

## Your Task

Build a **mini obstacle course** with at least 5 sections. Each section must use a different part property.

---

## Requirements

| Section | What to Do |
|---------|------------|
| **Start platform** | A large flat Part, `BrickColor: Bright green`, Anchored |
| **Thin walkway** | A long narrow Part (`30, 1, 3`), any color, Anchored |
| **Jump gap** | Two platforms with a gap between them — wide enough to make you think |
| **Color wall** | A wall of 4+ Parts in different colors stacked or arranged |
| **Finish platform** | A Part with `Material: Neon`, labeled with a name using a `SurfaceGui` or just a bright color |

---

## Checklist

- [ ] At least 5 distinct sections built
- [ ] Every part is **Anchored** (nothing falls when you hit Play)
- [ ] At least 3 different `BrickColor` values used
- [ ] At least 2 different `Material` values used
- [ ] You playtested it and walked the whole course

---

## Bonus Challenges

- [ ] Add a `SpawnLocation` at the start so you always spawn at the beginning
- [ ] Use `Neon` material on the finish platform so it glows
- [ ] Add a kill brick (set `BrickColor` to red, name it `KillBrick` — we'll add the script in a later lesson)

---

## Save and Push

1. File → Save to File → save as `ObstacleCourse.rbxl` in your `jsbros-games` folder
2. Open terminal in `jsbros-games`

```bash
git add .
git commit -m "add obstacle course build"
git push
```

**You're done when:** The `.rbxl` file is on GitHub and you've playtested the full course ✅
