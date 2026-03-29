---
sidebar_position: 5
---

# JS Bros Lab — Lesson 5

## Loops: Make Things Happen Over and Over

- **Duration:** 60 minutes
- **Prereq:** Lesson 4 complete
- **Goal:** Kids understand `for` and `while` loops and use them to do things in the 3D world

---

## 0–5 min — The Problem Loops Solve

Ask: "What if I wanted to print 'Hello' 100 times?"

Let them answer. Someone will say "write print 100 times."

```lua
print("Hello")
print("Hello")
print("Hello")
-- ... 97 more times
```

> "That's painful. Loops let one line do the work of a hundred."

---

## 5–20 min — The `for` Loop

The most common loop. Counts from a start number to an end number.

```lua
for i = 1, 5 do
    print("Count: " .. i)
end
```

**Output:**

```lua
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

**Break it down:**

- `i` → the counter variable (starts at 1)
- `1, 5` → count from 1 to 5
- `do ... end` → the code to run each time

**Challenges — change one thing each time:**

```lua
-- Try 1: Count to 10
for i = 1, 10 do
    print(i)
end

-- Try 2: Count by 2s (third number is the step)
for i = 0, 20, 2 do
    print(i)
end

-- Try 3: Count backwards
for i = 10, 1, -1 do
    print(i)
end
```

---

## 20–35 min — Loops in the 3D World

**Spawn a row of parts using a loop:**

1. In Roblox Studio, open `ServerScriptService` → new Script
2. Type this:

```lua
for i = 1, 10 do
    local part = Instance.new("Part")
    part.Size = Vector3.new(4, 4, 4)
    part.Position = Vector3.new(i * 5, 3, 0)
    part.Anchored = true
    part.BrickColor = BrickColor.Random()
    part.Parent = workspace
end
```

1. Hit Play

**What they see:** 10 randomly colored parts in a row.

**Discussion:**

- "What does `i * 5` do to the position?"
- "What happens if you change `10` to `50`?"
- "What if you change the step to `2`?"

---

## 35–45 min — The `while` Loop

Runs forever (or until a condition is false). Use with care.

```lua
local count = 0

while count < 5 do
    count = count + 1
    print("Count is now: " .. count)
    task.wait(1)
end

print("Done!")
```

**Key difference from `for`:**

- `for` → you know how many times before you start
- `while` → you keep going until something changes

**⚠️ Warn them:** A `while true do` loop with no `task.wait()` will freeze Studio. Always include
`task.wait()` inside a while loop.

```lua
-- Safe infinite loop pattern
while true do
    print("tick")
    task.wait(1)
end
```

---

## 45–55 min — Countdown Challenge

Each kid builds a countdown timer that prints in the Output:

```lua
3...
2...
1...
Go!
```

Then as a bonus: spawn a part when it reaches Go.

```lua
-- Bonus solution
for i = 3, 1, -1 do
    print(i .. "...")
    task.wait(1)
end

print("Go!")

local part = Instance.new("Part")
part.Position = Vector3.new(0, 10, 0)
part.BrickColor = BrickColor.new("Bright green")
part.Anchored = true
part.Parent = workspace
```

---

## 55–60 min — Save & Wrap Up

```bash
git add .
git commit -m "lesson 5: for loops, while loops, spawn parts"
git push
```

**Ask:**

- "What's the difference between `for` and `while`?"
- "When would you use each one?"

**Next lesson:** Writing your own functions so you can reuse code anywhere.

---

:::tip Print Reference [📄 Download the Lesson 06 cheatsheet](/cheatsheets/lesson-06-cheatsheet.pdf)
— print it and keep it on your desk while you work. :::
