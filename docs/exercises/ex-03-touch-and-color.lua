-- ============================================
-- Exercise 03: Touch Event + Color Change
-- Lesson: 4 | Difficulty: Beginner-Intermediate
-- ============================================
-- GOAL: When a player touches a part, change its color
--       and print who touched it.
--
-- PUT THIS SCRIPT IN: A Part (inside the Workspace)
--   Right-click the Part → Insert Object → Script
-- ============================================

-- TODO 1: Get a reference to the part this script lives in
-- Hint: local part = script.???


-- TODO 2: Write a function called `onTouch` that takes a `hit` parameter
-- Inside the function:
--   - Change part.BrickColor to any color you want
--     Hint: BrickColor.new("Bright blue")
--   - Print a message saying what touched it
--     Hint: hit.Name is the name of whatever touched the part


-- TODO 3: Connect the Touched event to your function
-- Hint: part.Touched:Connect(onTouch)


-- ============================================
-- BONUS: Make the part change back to its original
--        color after 2 seconds using task.wait(2)
-- ============================================

-- SOLUTION --
--[[
local part = script.Parent
local originalColor = part.BrickColor

local function onTouch(hit)
    part.BrickColor = BrickColor.new("Bright blue")
    print(hit.Name .. " touched the part!")

    -- BONUS
    task.wait(2)
    part.BrickColor = originalColor
end

part.Touched:Connect(onTouch)
--]]
