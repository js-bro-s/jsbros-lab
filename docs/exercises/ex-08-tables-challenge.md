---
sidebar_position: 8
---

# Exercise 08 · Tables Challenge

**Lesson:** 08 — Tables & Lists | **Difficulty:** Beginner-Intermediate

**Goal:** Create, modify, and loop through tables to manage game data.

---

## Setup

In Roblox Studio → `ServerScriptService` → new Script → name it `TablesExercise`.

---

## Part 1 — Inventory List

Create a table called `inventory` with 5 items in it (strings — name them whatever you want).

Then:

1. Print the total number of items using `#inventory`
2. Print each item on its own line using a `for` loop with `ipairs`
3. Add a new item with `table.insert`
4. Remove the second item with `table.remove`
5. Print the inventory again to show the updated list

- [ ] Table created with 5 items
- [ ] `#inventory` used correctly
- [ ] `ipairs` loop prints each item
- [ ] Item added and removed correctly
- [ ] Final list printed and correct

---

## Part 2 — Player Card

Create a key-value table called `player` with these fields:

```
name, level, score, isAlive, weapon
```

Write a function called `printPlayerCard` that prints all 5 fields in a clean format:

```
--- Player Card ---
Name:    Jaxon
Level:   3
Score:   120
Alive:   true
Weapon:  Sword
```

Then update `player.score` by adding 50 and call `printPlayerCard` again to show the change.

- [ ] All 5 fields present in the table
- [ ] `printPlayerCard` function prints each field cleanly
- [ ] Score update shown on second call

---

## Part 3 — Leaderboard

Create a table of players and scores, then print a ranked leaderboard.

```lua
local scores = {
    Jaxon = 45,
    Marcus = 72,
    Zoe = 31,
    Tyler = 58,
}
```

Loop through it with `pairs` and print each player and score.

**Bonus:** Find and print the player with the highest score without sorting the table — use a variable to track the current highest as you loop.

- [ ] `pairs` loop prints all players and scores
- [ ] Bonus: highest score player identified and printed

---

**You're done when:** All 3 parts run correctly and the leaderboard bonus is attempted ✅
