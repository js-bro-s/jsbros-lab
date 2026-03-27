---
sidebar_position: 1
---

# Exercise 01: Hello Roblox

```lua
-- ============================================
-- Exercise 01: Hello Roblox
-- Lesson: 4 | Difficulty: Beginner
-- ============================================
-- GOAL: Print a welcome message when a player joins the game.
--
-- PUT THIS SCRIPT IN: ServerScriptService
-- ============================================

-- TODO 1: Print a simple message to the Output
-- Hint: use print("your message here")


-- TODO 2: Listen for when a player joins and welcome them by name
-- Hint: game.Players.PlayerAdded:Connect(function(player) ... end)


-- ============================================
-- EXPECTED OUTPUT (in the Output panel):
--   Game started!
--   Welcome, PlayerName!
-- ============================================

-- SOLUTION (don't peek until you try!) --
--[[
print("Game started!")

game.Players.PlayerAdded:Connect(function(player)
    print("Welcome, " .. player.Name .. "!")
end)
--]]
```