---
sidebar_position: 10
---

# Exercise 10 · GUI Challenge

**Lesson:** 10 — GUI & Score Display | **Difficulty:** Intermediate

**Goal:** Build a complete HUD (heads-up display) for the Coin Collector game — from scratch, without referring to the lesson.

---

## What You're Building

A HUD with 3 elements:

```
┌─────────────────────────────────────┐
│  🪙 Coins: 12      ⏱ Time: 38s      │
│                                     │
│              [Top Right]            │
│              👑 Leader: Marcus (18) │
└─────────────────────────────────────┘
```

---

## Part 1 — Coins & Timer Bar

Build the top bar in `StarterGui`:

- [ ] A `Frame` anchored to the top of the screen
- [ ] A `TextLabel` showing `"🪙 Coins: 0"` — updates every 0.5s from `_G.getScore`
- [ ] A `TextLabel` showing `"⏱ Time: 60"` — updates every 0.5s from `_G.timeLeft`
- [ ] Both labels use `TextScaled: true` and `Font: GothamBold`
- [ ] Background has some transparency so the game shows through

---

## Part 2 — Leader Display

Add a second `Frame` in the top-right corner that shows the current leader.

A **LocalScript** should:

1. Every 2 seconds, loop through all players using `game.Players:GetPlayers()`
2. Find the player with the highest score using `_G.getScore`
3. Update a `TextLabel` to show: `"👑 Leader: PlayerName (score)"`
4. If the local player IS the leader, show: `"👑 You're winning! (score)"`

- [ ] Leader frame visible in top-right
- [ ] Updates every 2 seconds
- [ ] Shows different text when you are the leader

---

## Part 3 — Collect Flash

When the player collects a coin, flash a short message in the center of their screen.

- [ ] A `TextLabel` in the center of the screen, normally invisible (`TextTransparency: 1`)
- [ ] When a coin is collected, it briefly shows `"+1"` or `"+3"` in bright yellow
- [ ] Fades out over 0.5 seconds using a tween on `TextTransparency`

```lua
-- Hint: use TweenService to tween TextTransparency from 0 to 1
local TweenService = game:GetService("TweenService")
```

- [ ] Flash appears on collect
- [ ] Shows correct point value
- [ ] Smoothly fades out

---

## Bonus — Winner Screen

When `_G.winner` is set (after the timer ends), show a full-screen overlay with:
- The winner's name in large text
- A semi-transparent dark background
- A `"Play Again"` TextButton (the button doesn't need to do anything yet)

---

**You're done when:** All 3 parts are working in a live playtest with at least 2 players (or solo testing) ✅
