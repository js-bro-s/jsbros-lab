---
sidebar_position: 11
---

# Exercise 11 · Sounds & Effects Challenge

**Lesson:** 11 — Sounds & Effects | **Difficulty:** Intermediate

**Goal:** Polish the Coin Collector game with sound, tweens, and particles so it feels like a real shipped game.

---

## This is the final exercise. No hints on where to put things — use your judgment.

---

## Challenge 1 — Sound Design

Add a distinct sound for each of these events:

| Event | Sound type |
|-------|-----------|
| Regular coin collected | Short bright click or chime |
| Gold coin collected | Bigger, more satisfying sound |
| Player enters Double Zone | Whoosh or power-up sound |
| 10 seconds left on timer | Ticking or urgent sound loop |
| Game over / winner announced | Fanfare or finish sound |

Requirements:
- [ ] At least 3 different sounds implemented
- [ ] Sounds are positional for in-world events (play from where they happen)
- [ ] Background music plays throughout and loops cleanly
- [ ] All sound volumes are balanced — nothing is jarring

---

## Challenge 2 — Coin Polish

Make collecting a coin feel satisfying:

- [ ] Coin scales up slightly before disappearing (tween `Size` to `3,3,3` over 0.1s)
- [ ] Coin spins continuously while on the map (use a `while true do` loop with small rotation increments, or a `BodyAngularVelocity`)
- [ ] Particle burst emits 15–20 particles on collect
- [ ] Particles match the coin color (yellow for regular, orange for gold)

---

## Challenge 3 — Double Zone Pulse

The Double Zone should pulse visually to draw attention to it.

- [ ] Zone glows brighter and dimmer on a loop using `TweenService` on `Color` or `Transparency`
- [ ] A `BillboardGui` above the zone shows the text `"2x Points!"`
- [ ] The billboard text also pulses (scale or color)

```lua
-- Hint: ping-pong a tween by playing it forward then in reverse
local tween = TweenService:Create(zone, tweenInfo, { Color = Color3.new(1, 0, 1) })
tween:Play()
tween.Completed:Connect(function()
    -- play the reverse tween here
end)
```

---

## Challenge 4 — Winner Celebration

When the game ends:

- [ ] The winner's character gets a `ParticleEmitter` attached above their head for 5 seconds
- [ ] A loud fanfare sound plays
- [ ] The winner's character is highlighted with a bright `SelectionBox` or glow effect
- [ ] All remaining coins on the map disappear with a fade-out tween before the winner screen shows

---

## Final Checklist — Ship It

Before calling this done, play through the full game and check:

- [ ] Game starts cleanly with no errors in Output
- [ ] Coins spawn and can be collected
- [ ] Score updates on screen
- [ ] Timer counts down
- [ ] Sound plays on every meaningful event
- [ ] No sounds play after the game ends (stop background music)
- [ ] Winner is announced correctly
- [ ] Game feels fun to play

---

**You're done when:** You can play a full round from start to winner screen with no errors and it feels polished ✅

---

> This is your first shipped game. Push it to GitHub and show someone.

```bash
git add .
git commit -m "final polish: sounds, effects, and game feel"
git push
```


---

:::tip Print this Exercise
[📄 Download the Exercise 11 reference sheet (light/print)](/cheatsheets/ex-11-sheet-light.pdf) — tick off each item as you complete it.
:::
