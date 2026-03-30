---
sidebar_position: 5
---

# Exercise 05 · Lua Basics Challenge

**Lesson:** 05 — Lua Basics | **Difficulty:** Beginner

**Goal:** Write a script from scratch using `print`, variables, and `if/else` — no looking at the
lesson.

---

## Setup

In Roblox Studio → `ServerScriptService` → new Script → name it `LuaBasicsExercise`.

---

## Part 1 — Variables (no hints)

Create 4 variables:

- Your name (string)
- Your age (number)
- Your favourite game (string)
- Whether you have played Roblox today (boolean)

Then print a single sentence that uses all four, like:

```text
Jaxon is 10 years old. Favourite game: Blox Fruits. Played today: true
```

- [ ] All 4 variables created with `local`
- [ ] Single print statement using `..` to join them
- [ ] Output matches expected format

---

## Part 2 — If/Else (no hints)

Create a variable called `coins` and set it to any number between 0 and 100.

Write an `if/elseif/else` block that prints:

- `"Legend!"` if coins is 75 or more
- `"Nice work!"` if coins is 50 or more
- `"Keep going!"` if coins is 25 or more
- `"Just getting started!"` if coins is less than 25

Test it by changing the `coins` value to 80, then 55, then 30, then 10.

- [ ] All 4 conditions covered
- [ ] Correct message prints for each test value

---

## Part 3 — Touch Event

Place a Part in the Workspace. Inside the Part, add a Script that:

1. Changes the part's `BrickColor` to `Bright blue` when touched
2. Prints the name of whatever touched it
3. Changes back to the original color after 1.5 seconds

- [ ] Part changes color on touch
- [ ] Name of toucher prints in Output
- [ ] Color resets after delay

---

## Bonus

Make the part change to a **random** color on each touch instead of always blue:

```lua
-- Hint: BrickColor.Random() returns a random color
```

---

**You're done when:** All 3 parts work and the bonus is attempted ✅

---

:::tip Print this Exercise
[📄 Download the Exercise 05 reference sheet (light/print)](/cheatsheets/ex-05-sheet-light.pdf) —
tick off each item as you complete it. :::
