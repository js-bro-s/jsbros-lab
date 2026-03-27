-- ============================================
-- Exercise 02: Variables & Score Tracker
-- Lesson: 4 | Difficulty: Beginner
-- ============================================
-- GOAL: Track a player's score using variables
--       and print different messages based on it.
--
-- PUT THIS SCRIPT IN: ServerScriptService
-- ============================================

-- TODO 1: Create a variable called `score` and set it to 0
-- Hint: local score = ???


-- TODO 2: Create a variable called `playerName` with your name as a string


-- TODO 3: Add 5 to the score
-- Hint: score = score + 5


-- TODO 4: Print a message like "Jaxon has 5 points"
-- Hint: use .. to join strings and numbers


-- TODO 5: Use an if/elseif/else to print:
--   "Legendary!" if score >= 20
--   "Nice work!" if score >= 10
--   "Keep going!" if score < 10


-- ============================================
-- Try changing the score value and see what prints!
-- ============================================

-- SOLUTION --
--[[
local score = 0
local playerName = "Jaxon"

score = score + 5

print(playerName .. " has " .. score .. " points")

if score >= 20 then
    print("Legendary!")
elseif score >= 10 then
    print("Nice work!")
else
    print("Keep going!")
end
--]]
