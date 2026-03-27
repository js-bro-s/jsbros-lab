---
sidebar_position: 8
---

# JS Bros Lab — Lesson 8

## Build Your First Mini Game: Coin Collector

**Duration:** 90 minutes (or split across two sessions)
**Prereq:** Lessons 1–7 complete
**Goal:** Build a complete playable game using everything learned so far

---

## What We're Building

A **coin collector game**:
- Coins spawn randomly around the map
- Player walks into a coin to collect it
- Score increases each time
- Score displays in the Output (GUI comes in Lesson 9)
- Game announces the winner after 60 seconds

No new concepts — just applying everything.

---

## Setup (10 min)

1. Open Roblox Studio → new **Baseplate** template
2. Build a simple flat arena (a few walls or obstacles — keep it simple)
3. Create a `Part` that will be your coin template:
   - Size: `2, 2, 2`
   - Shape: `Ball`
   - BrickColor: `Bright yellow`
   - Material: `Neon`
   - Name it `Coin`
   - Anchor it
4. Delete it from the Workspace — the script will spawn copies

---

## Script 1: Coin Spawner (20 min)

In `ServerScriptService`, create a new Script called `CoinSpawner`:

```lua
-- CoinSpawner.lua
-- Spawns coins randomly around the map

local COIN_COUNT = 10
local SPAWN_AREA = 40  -- how far from center coins can appear

local function spawnCoin()
    local coin = Instance.new("Part")
    coin.Name = "Coin"
    coin.Shape = Enum.PartType.Ball
    coin.Size = Vector3.new(2, 2, 2)
    coin.BrickColor = BrickColor.new("Bright yellow")
    coin.Material = Enum.Material.Neon
    coin.Anchored = true

    -- Random position within the spawn area
    local x = math.random(-SPAWN_AREA, SPAWN_AREA)
    local z = math.random(-SPAWN_AREA, SPAWN_AREA)
    coin.Position = Vector3.new(x, 1.5, z)

    coin.Parent = workspace
    return coin
end

-- Spawn all coins at game start
for i = 1, COIN_COUNT do
    spawnCoin()
end

print("Spawned " .. COIN_COUNT .. " coins!")
```

**Test it:** Hit Play — 10 yellow balls should appear randomly on the map.

---

## Script 2: Score Tracker (15 min)

Still in `ServerScriptService`, create a new Script called `ScoreTracker`:

```lua
-- ScoreTracker.lua
-- Tracks each player's score

local scores = {}

local function getScore(player)
    if scores[player.Name] == nil then
        scores[player.Name] = 0
    end
    return scores[player.Name]
end

local function addScore(player, amount)
    scores[player.Name] = getScore(player) + amount
    print(player.Name .. " — Score: " .. scores[player.Name])
end

-- Make these accessible to other scripts
_G.getScore = getScore
_G.addScore = addScore
```

> **Note for Dad:** `_G` is a global table — it's the simplest way to share functions between scripts for now. We'll cover ModuleScripts in a later lesson.

---

## Script 3: Coin Collector (20 min)

In `ServerScriptService`, create `CoinCollector`:

```lua
-- CoinCollector.lua
-- Handles what happens when a player touches a coin

local function onCoinTouched(coin, hit)
    -- Check if a player character touched it
    local character = hit.Parent
    local player = game.Players:GetPlayerFromCharacter(character)

    if player then
        coin:Destroy()
        _G.addScore(player, 1)

        -- Respawn a new coin after a short delay
        task.delay(3, function()
            local newCoin = Instance.new("Part")
            newCoin.Name = "Coin"
            newCoin.Shape = Enum.PartType.Ball
            newCoin.Size = Vector3.new(2, 2, 2)
            newCoin.BrickColor = BrickColor.new("Bright yellow")
            newCoin.Material = Enum.Material.Neon
            newCoin.Anchored = true

            local x = math.random(-40, 40)
            local z = math.random(-40, 40)
            newCoin.Position = Vector3.new(x, 1.5, z)
            newCoin.Parent = workspace

            -- Connect the touch event to the new coin
            newCoin.Touched:Connect(function(h)
                onCoinTouched(newCoin, h)
            end)
        end)
    end
end

-- Connect touch events to all existing coins
task.wait(1)  -- Wait for CoinSpawner to finish

for _, coin in ipairs(workspace:GetChildren()) do
    if coin.Name == "Coin" then
        coin.Touched:Connect(function(hit)
            onCoinTouched(coin, hit)
        end)
    end
end
```

**Test it:** Play, walk into coins — score should print in Output.

---

## Script 4: Game Timer (15 min)

In `ServerScriptService`, create `GameTimer`:

```lua
-- GameTimer.lua
-- 60 second countdown, then announces winner

local GAME_DURATION = 60

task.wait(2)  -- Let everything else load first

print("Game started! " .. GAME_DURATION .. " seconds!")

-- Countdown
for timeLeft = GAME_DURATION, 1, -1 do
    if timeLeft <= 10 then
        print(timeLeft .. " seconds left!")
    end
    task.wait(1)
end

-- Find the winner
print("Time's up!")

local winner = nil
local highScore = 0

for _, player in ipairs(game.Players:GetPlayers()) do
    local score = _G.getScore(player)
    if score > highScore then
        highScore = score
        winner = player
    end
end

if winner then
    print("Winner: " .. winner.Name .. " with " .. highScore .. " coins!")
else
    print("No winner — nobody collected any coins!")
end
```

---

## Playtest & Polish (10 min)

Play together as a family. Ask each kid:
- "What would you change?"
- "What should happen when a coin is collected?" (sound? flash?)
- "What if coins were worth different points?"

These become goals for Lessons 9 and 10.

---

## Save & Wrap Up

```bash
git add .
git commit -m "lesson 8: coin collector game - spawner, score, timer"
git push
```

**What they built:**
- A working multiplayer game
- 4 separate scripts that work together
- Loops, functions, tables, events — all in one project

**Next lesson:** Show the score on screen with a GUI.
