---
sidebar_position: 9
---

# Exercise 09 · Game Extension Challenge

**Lesson:** 09 — Build Your First Game | **Difficulty:** Intermediate

**Goal:** Extend the Coin Collector game with 3 new features using everything you've learned.

---

## Starting Point

Open your Coin Collector game from Lesson 09. It should already have:

- Coin spawner
- Score tracker
- Coin collector with touch events
- 60 second game timer

If anything is missing, go back and finish Lesson 09 first.

---

## Challenge 1 — Coin Values

Not all coins should be worth the same. Add two types of coins:

| Coin         | Color         | Worth    | Spawn chance           |
| ------------ | ------------- | -------- | ---------------------- |
| Regular coin | Bright yellow | 1 point  | Common                 |
| Gold coin    | Bright orange | 3 points | Rare (spawn 2, not 10) |

Requirements:

- [ ] Two coin types spawn at game start (8 regular + 2 gold)
- [ ] Collecting gold gives 3 points, regular gives 1
- [ ] Output prints which type was collected: `"Jaxon collected a Gold Coin! (+3)"`

---

## Challenge 2 — Respawn with Variety

When a coin is collected, the replacement should be random — 80% chance of a regular coin, 20%
chance of a gold coin.

```lua
-- Hint: math.random(1, 10) returns a number 1-10
-- if the result is 9 or 10, spawn gold (that's 20% chance)
```

- [ ] Replacement coin type is random
- [ ] Roughly 1 in 5 replacements is gold

---

## Challenge 3 — Double Points Zone

Add a glowing purple Part to the center of the map named `DoubleZone`.

Any coin collected while a player is **standing inside** the DoubleZone is worth double points.

```lua
-- Hint: use Region3 or check distance from the zone's position
-- Simpler approach: check if the player's position is within X studs of the zone

local zonePosition = workspace.DoubleZone.Position
local playerPosition = character.HumanoidRootPart.Position
local distance = (playerPosition - zonePosition).Magnitude

if distance < 15 then
    -- player is in the zone
end
```

- [ ] Purple glowing zone visible in the map
- [ ] Coins collected inside the zone give double points
- [ ] Output prints `"DOUBLE POINTS!"` when triggered

---

## Bonus — Announce Point Milestones

When a player reaches 10, 25, or 50 points, print a special message:

```text
🎉 Jaxon hit 10 points!
⚡ Jaxon hit 25 points! On fire!
👑 Jaxon hit 50 points! LEGENDARY!
```

---

**You're done when:** All 3 challenges are working in a live playtest ✅

---

:::tip Print this Exercise
[📄 Download the Exercise 09 reference sheet (light/print)](/cheatsheets/ex-09-sheet-light.pdf) —
tick off each item as you complete it. :::
