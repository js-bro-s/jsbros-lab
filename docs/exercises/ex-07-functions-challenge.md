---
sidebar_position: 7
---

# Exercise 07 · Functions Challenge

**Lesson:** 07 — Functions | **Difficulty:** Beginner-Intermediate

**Goal:** Write and call your own functions with parameters and return values — from scratch.

---

## Setup

In Roblox Studio → `ServerScriptService` → new Script → name it `FunctionsExercise`.

---

## Part 1 — Write a Greeting Function

Write a function called `greetPlayer` that takes two parameters: `name` (string) and `score` (number).

It should print:

```
Welcome back, Jaxon! Your score is 42.
```

Call it 3 times with different names and scores.

- [ ] Function uses both parameters
- [ ] Output matches the format above
- [ ] Called at least 3 times with different values

---

## Part 2 — Return a Value

Write a function called `getRank` that takes a `score` number and returns a rank string:

| Score | Rank |
|-------|------|
| 50+ | `"Gold"` |
| 30+ | `"Silver"` |
| 10+ | `"Bronze"` |
| below 10 | `"Unranked"` |

Then call `greetPlayer` but update it to also print the rank:

```
Welcome back, Marcus! Your score is 35. Rank: Silver
```

- [ ] `getRank` returns the correct rank for each range
- [ ] `greetPlayer` uses the return value from `getRank`

---

## Part 3 — Refactor a Messy Script

This script works but is badly written. Rewrite it using at least 2 named functions:

```lua
local part1 = Instance.new("Part")
part1.BrickColor = BrickColor.new("Bright red")
part1.Size = Vector3.new(4, 4, 4)
part1.Position = Vector3.new(0, 2, 0)
part1.Anchored = true
part1.Parent = workspace

local part2 = Instance.new("Part")
part2.BrickColor = BrickColor.new("Bright red")
part2.Size = Vector3.new(4, 4, 4)
part2.Position = Vector3.new(10, 2, 0)
part2.Anchored = true
part2.Parent = workspace

local part3 = Instance.new("Part")
part3.BrickColor = BrickColor.new("Bright red")
part3.Size = Vector3.new(4, 4, 4)
part3.Position = Vector3.new(20, 2, 0)
part3.Anchored = true
part3.Parent = workspace
```

- [ ] At least one function created to remove repetition
- [ ] All 3 parts still spawn in the same positions
- [ ] The script is visibly shorter and cleaner

---

## Bonus

Add an optional third parameter to your `spawnPart` function for `color` — if no color is passed, default to `BrickColor.Random()`.

```lua
-- Hint: default parameters in Lua
local function spawnPart(position, size, color)
    color = color or BrickColor.Random()
    -- ...
end
```

---

**You're done when:** All 3 parts work and the refactored script is cleaner than the original ✅


---

:::tip Print this Exercise
[📄 Download the Exercise 07 reference sheet (light/print)](/cheatsheets/ex-07-sheet-light.pdf) — tick off each item as you complete it.
:::
