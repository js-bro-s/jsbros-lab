---
sidebar_position: 6
---

# Exercise 06 · Loops Challenge

**Lesson:** 06 — Loops | **Difficulty:** Beginner

**Goal:** Use `for` and `while` loops to spawn objects and create a countdown — without looking at the lesson.

---

## Setup

In Roblox Studio → `ServerScriptService` → new Script → name it `LoopsExercise`.

---

## Part 1 — Count and Print

Write a `for` loop that prints every **even number** from 2 to 20.

Expected output:
```
2
4
6
...
20
```

- [ ] Loop uses a step of 2
- [ ] Starts at 2, ends at 20
- [ ] Only even numbers print

---

## Part 2 — Spawn a Ring of Parts

Spawn **8 parts** in a circle around the center of the map.

The position of each part in a circle can be calculated like this:

```lua
-- Hint: math.cos and math.sin create circular positions
-- angle goes from 0 to 2*math.pi (a full circle)
-- multiply by radius to control the size of the circle

local radius = 20
local angle = (i / totalParts) * (2 * math.pi)
local x = math.cos(angle) * radius
local z = math.sin(angle) * radius
```

Requirements:
- [ ] 8 parts spawned
- [ ] All parts form a visible circle in the Workspace
- [ ] Each part is a different `BrickColor` (use `BrickColor.Random()`)
- [ ] All parts are Anchored

---

## Part 3 — Countdown Timer

Write a `while` loop that counts down from 10 to 0, printing each number with `task.wait(1)` between each.

When it reaches 0, print `"GO!"` and spawn a single glowing part at position `(0, 5, 0)`.

- [ ] Countdown prints 10 down to 0 with 1 second between each
- [ ] `"GO!"` prints at the end
- [ ] A neon part spawns at the right position

---

## Bonus

After spawning the ring of parts in Part 2, write another loop that removes them one by one with a 0.2 second delay between each, making them disappear like a sequence.

---

**You're done when:** All 3 parts run without errors and the bonus is attempted ✅
