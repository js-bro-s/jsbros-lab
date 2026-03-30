---
sidebar_position: 6
---

# JS Bros Lab — Lesson 6

## Functions: Write Once, Use Anywhere

- **Duration:** 60 minutes
- **Prereq:** Lesson 5 complete
- **Goal:** Kids write their own functions, understand parameters and return values, and clean up
  their scripts

---

## 0–5 min — The Problem Functions Solve

Show this messy script:

```lua
-- Player 1 joins
print("Welcome to JS Bros!")
print("You have 0 points")
print("Good luck!")

-- Player 2 joins
print("Welcome to JS Bros!")
print("You have 0 points")
print("Good luck!")
```

> "What if we need to do that for 100 players? And what if we want to change the message?"

> "A function lets you name a block of code and run it whenever you want."

---

## 5–20 min — Writing a Basic Function

```lua
local function greetPlayer()
    print("Welcome to JS Bros!")
    print("You have 0 points")
    print("Good luck!")
end

-- Call it like this:
greetPlayer()
greetPlayer()
greetPlayer()
```

**Rules:**

- `local function` → creates the function
- `functionName()` → calls (runs) it
- The `()` are always required — even when empty

**Activity:** Each kid writes a function called `printMyInfo()` that prints their name, age, and
favorite game.

---

## 20–35 min — Parameters (Inputs)

Functions become powerful when you can pass information in.

```lua
local function greetPlayer(name)
    print("Welcome, " .. name .. "!")
    print("Good luck out there.")
end

greetPlayer("Jaxon")
greetPlayer("Marcus")
greetPlayer("Zoe")
```

**Output:**

```lua
Welcome, Jaxon!
Good luck out there.
Welcome, Marcus!
Good luck out there.
```

**Multiple parameters:**

```lua
local function showScore(name, score)
    print(name .. " has " .. score .. " points")
end

showScore("Jaxon", 10)
showScore("Marcus", 25)
```

**Activity:** Update their `greetPlayer` function to take a name parameter.

---

## 35–48 min — Return Values (Outputs)

Functions can also give back a result.

```lua
local function addPoints(current, bonus)
    return current + bonus
end

local myScore = addPoints(10, 5)
print("New score: " .. myScore)  -- 15
```

**Real example — calculate a letter grade:**

```lua
local function getGrade(score)
    if score >= 90 then
        return "A"
    elseif score >= 75 then
        return "B"
    elseif score >= 60 then
        return "C"
    else
        return "Try again"
    end
end

print(getGrade(95))   -- A
print(getGrade(80))   -- B
print(getGrade(45))   -- Try again
```

---

## 48–57 min — Refactor Challenge

Give them their Lesson 4 touch script and ask them to refactor it using a function:

**Before:**

```lua
local part = script.Parent

part.Touched:Connect(function(hit)
    part.BrickColor = BrickColor.new("Bright red")
    print(hit.Name .. " touched the part!")
    task.wait(2)
    part.BrickColor = BrickColor.new("Medium stone grey")
end)
```

**After (their goal):**

```lua
local part = script.Parent
local DEFAULT_COLOR = BrickColor.new("Medium stone grey")
local TOUCHED_COLOR = BrickColor.new("Bright red")

local function onTouch(hit)
    part.BrickColor = TOUCHED_COLOR
    print(hit.Name .. " touched the part!")
    task.wait(2)
    part.BrickColor = DEFAULT_COLOR
end

part.Touched:Connect(onTouch)
```

**Key concept:** Named functions are easier to read and reuse than anonymous `function(hit)` inline.

---

## 57–60 min — Save & Wrap Up

```bash
git add .
git commit -m "lesson 6: functions, parameters, return values"
git push
```

**Ask:**

- "What's the difference between a parameter and a return value?"
- "Name one place in your game where a function would be useful."

**Next lesson:** Tables — storing lists of things.

---

:::tip Print Reference [📄 Download the Lesson 07 cheatsheet](/cheatsheets/lesson-07-cheatsheet.pdf)
— print it and keep it on your desk while you work. :::
