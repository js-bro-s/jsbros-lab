---
sidebar_position: 9
---

# JS Bros Lab — Lesson 9

## GUI: Show Your Score on Screen

**Duration:** 60 minutes
**Prereq:** Lesson 8 complete (coin collector game)
**Goal:** Add an on-screen score display to the coin collector game using Roblox GUI

---

## 0–5 min — What Is a GUI?

> "GUI stands for Graphical User Interface. It's everything you see on screen that isn't the 3D world — score, health bar, buttons, menus."

Show examples in real Roblox games: health bar, score counter, inventory.

> "Today we build the score display for our coin game."

---

## 5–20 min — Create the GUI (No Code Yet)

Build the GUI by hand in Studio first so they understand the structure.

**In the Explorer:**

1. Select `StarterGui`
2. Insert → `ScreenGui` → name it `GameGui`
3. Inside `GameGui` → Insert → `Frame` → name it `ScoreFrame`
4. Set `ScoreFrame` properties:
   - `Size`: `{0.2, 0}, {0.08, 0}` (20% wide, 8% tall)
   - `Position`: `{0.01, 0}, {0.01, 0}` (top-left corner)
   - `BackgroundColor3`: dark color (e.g. `30, 30, 30`)
   - `BackgroundTransparency`: `0.3`
5. Inside `ScoreFrame` → Insert → `TextLabel` → name it `ScoreLabel`
6. Set `ScoreLabel` properties:
   - `Size`: `{1, 0}, {1, 0}` (fill the frame)
   - `Text`: `Score: 0`
   - `TextColor3`: White
   - `TextScaled`: `true`
   - `BackgroundTransparency`: `1`
   - `Font`: `GothamBold`

**Hit Play** — you should see "Score: 0" in the top-left corner.

---

## 20–40 min — Update Score from a Script

GUI updates happen on the **client** (each player's screen). We need a `LocalScript`.

**In the Explorer:**
- `StarterPlayerScripts` → Insert → `LocalScript` → name it `ScoreDisplay`

```lua
-- ScoreDisplay (LocalScript in StarterPlayerScripts)
-- Updates the score label on the player's screen

local Players = game:GetService("Players")
local player = Players.LocalPlayer

-- Wait for the GUI to load
local gameGui = player.PlayerGui:WaitForChild("GameGui")
local scoreFrame = gameGui:WaitForChild("ScoreFrame")
local scoreLabel = scoreFrame:WaitForChild("ScoreLabel")

-- Update the label every 0.5 seconds
while true do
    local score = _G.getScore and _G.getScore(player) or 0
    scoreLabel.Text = "Coins: " .. score
    task.wait(0.5)
end
```

**Test it:** Play, collect coins — the score on screen should update.

---

## 40–52 min — Add a Timer Display

Add a second label showing time remaining.

**In Studio:**
1. Inside `ScoreFrame` → Insert another `TextLabel` → name it `TimerLabel`
2. Position it below `ScoreLabel` or in a new frame

**Update `ScoreDisplay`:**

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer

local gameGui = player.PlayerGui:WaitForChild("GameGui")
local scoreFrame = gameGui:WaitForChild("ScoreFrame")
local scoreLabel = scoreFrame:WaitForChild("ScoreLabel")
local timerLabel = scoreFrame:WaitForChild("TimerLabel")

-- Read shared game state
while true do
    local score = _G.getScore and _G.getScore(player) or 0
    local timeLeft = _G.timeLeft or 0

    scoreLabel.Text = "Coins: " .. score
    timerLabel.Text = "Time: " .. timeLeft

    task.wait(0.5)
end
```

**Update `GameTimer` to expose time remaining:**

```lua
-- Add this inside the countdown loop in GameTimer.lua
_G.timeLeft = timeLeft
```

---

## 52–58 min — Winner Announcement Screen

When the game ends, show the winner on screen.

**Add a new Frame to `GameGui`:**
- Name: `WinnerFrame`
- Centered on screen, hidden by default (`Visible: false`)
- Inside it: a `TextLabel` named `WinnerLabel`

**At the end of `GameTimer.lua`:**

```lua
-- Show winner on all clients
game:GetService("ReplicatedStorage")  -- we'll come back to this properly

-- Simple version: use _G
_G.winner = winner and winner.Name or "Nobody"
```

**In `ScoreDisplay`, after the while loop ends (or check in the loop):**

```lua
if _G.winner then
    local winnerFrame = gameGui:WaitForChild("WinnerFrame")
    local winnerLabel = winnerFrame:WaitForChild("WinnerLabel")
    winnerLabel.Text = _G.winner .. " wins!"
    winnerFrame.Visible = true
end
```

---

## 58–60 min — Save & Wrap Up

```bash
git add .
git commit -m "lesson 9: add score gui, timer display, winner screen"
git push
```

**Ask:**
- "Where does a LocalScript run? Why does it matter?"
- "What's `WaitForChild` for?"

**Next lesson:** Sound and visual effects — making the game feel alive.
