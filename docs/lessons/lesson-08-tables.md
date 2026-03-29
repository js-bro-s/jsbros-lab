---
sidebar_position: 7
---

# JS Bros Lab — Lesson 7

## Tables: Storing Lists of Things

- **Duration:** 60 minutes
- **Prereq:** Lessons 5 & 6 complete
- **Goal:** Kids create tables, loop through them, and use them to store game data

---

## 0–5 min — The Problem Tables Solve

Ask: "How would you store the names of 5 players?"

They'll say:

```lua
local player1 = "Jaxon"
local player2 = "Marcus"
local player3 = "Zoe"
local player4 = "Tyler"
local player5 = "Ava"
```

> "That works for 5. What about 50? What if you don't know how many there will be?"
> "Tables let you store a whole list in one variable."

---

## 5–20 min — Creating a Table

```lua
local players = {"Jaxon", "Marcus", "Zoe", "Tyler", "Ava"}
```

**Access items by position (starts at 1, not 0):**

```lua
print(players[1])  -- Jaxon
print(players[3])  -- Zoe
print(players[5])  -- Ava
```

**Get the length:**

```lua
print(#players)  -- 5
```

**Add an item:**

```lua
table.insert(players, "Sam")
print(#players)  -- 6
```

**Remove an item:**

```lua
table.remove(players, 2)  -- removes Marcus
print(players[2])  -- Zoe (everything shifts down)
```

---

## 20–35 min — Looping Through a Table

Tables and loops are best friends.

```lua
local fruits = {"apple", "banana", "mango", "grape"}

for i = 1, #fruits do
    print(i .. ": " .. fruits[i])
end
```

**Output:**
```
1: apple
2: banana
3: mango
4: grape
```

**Cleaner way using `ipairs`:**

```lua
for index, fruit in ipairs(fruits) do
    print(index .. ": " .. fruit)
end
```

> "`ipairs` gives you both the position AND the value at the same time. Use this for lists."

**Activity:** Each kid creates a table of their top 5 Roblox games and prints them in a numbered list.

---

## 35–50 min — Tables as Dictionaries (Key-Value)

Tables can also store named data — like a character card.

```lua
local player = {
    name = "Jaxon",
    score = 0,
    isAlive = true,
    level = 1,
}

print(player.name)     -- Jaxon
print(player.score)    -- 0

-- Update a value
player.score = player.score + 10
print(player.score)    -- 10
```

**Activity:** Each kid creates a `character` table with at least 4 fields and a function that prints a summary:

```lua
local function showCharacter(character)
    print("Name: " .. character.name)
    print("Level: " .. character.level)
    print("Score: " .. character.score)
end

showCharacter(player)
```

---

## 50–57 min — Real Game Use: Leaderboard

A simple score table for multiple players:

```lua
local scores = {
    Jaxon = 15,
    Marcus = 22,
    Zoe = 8,
}

-- Print the leaderboard
for name, score in pairs(scores) do
    print(name .. ": " .. score .. " pts")
end
```

> "`pairs` is like `ipairs` but for key-value tables — it gives you the key and value."

---

## 57–60 min — Save & Wrap Up

```bash
git add .
git commit -m "lesson 7: tables, ipairs, pairs, key-value data"
git push
```

**Ask:**
- "What's the difference between a list table and a key-value table?"
- "When would you use `ipairs` vs `pairs`?"

**Next lesson:** We put everything together and build a real mini game.


---

:::tip Print Reference
[📄 Download the Lesson 08 cheatsheet](/cheatsheets/lesson-08-cheatsheet.pdf) — print it and keep it on your desk while you work.
:::
