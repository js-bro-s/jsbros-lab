---
sidebar_position: 4
---

# JS Bros Lab — Lesson 4

## Lua Basics: Make Your Game Do Something

- **Duration:** 60–75 minutes
- **Prereq:** Lessons 1–3 complete, Roblox Studio open with their place file
- **Goal:** Kids write their first working Lua scripts — print messages, use variables, react to events

---

## 0–5 min — What Is a Script?

> "A script is instructions you give the game. Without scripts, nothing moves, nothing happens, nothing reacts. Scripts are the brain."

Show the two script locations:
- **ServerScriptService** → runs on the server (everyone sees it)
- **StarterPlayerScripts** → runs for each player individually

For today: everything goes in **ServerScriptService**.

---

## 5–20 min — Hello Roblox (First Script)

**Step by step — everyone does this together:**

1. In Explorer → right-click `ServerScriptService` → Insert Object → **Script**
2. Name it `HelloScript`
3. Delete the default content
4. Type this exactly:

```lua
print("Hello from JS Bros!")
print("My name is " .. game.Players.LocalPlayer.Name)
```

5. Hit **Play** (`F5`)
6. Look at the **Output** panel

**Expected output:**
```
Hello from JS Bros!
```

> Note: `LocalPlayer` won't work in a server script — teach them to see the error and understand why. This is intentional.

**Fix it together:**
```lua
print("Hello from JS Bros!")

game.Players.PlayerAdded:Connect(function(player)
    print("Welcome " .. player.Name)
end)
```

**Concept:** They just wrote an **event listener**. The game reacted to something that happened.

---

## 20–35 min — Variables

**Teach these three types. Nothing else yet.**

```lua
-- Number
local score = 0

-- String (text)
local playerName = "Jaxon"

-- Boolean (yes/no)
local isAlive = true

print(playerName .. " has a score of " .. score)
```

**Rules to teach:**
- Always start with `local`
- Names can't have spaces — use `camelCase`
- `..` connects strings together (called concatenation)

**Exercise:** Each kid creates 3 variables about themselves and prints a sentence using all three.

Example output:
```
Jaxon is 12 years old and their favorite game is Blox Fruits
```

---

## 35–50 min — If Statements

```lua
local score = 10

if score >= 10 then
    print("You win!")
elseif score >= 5 then
    print("Almost there!")
else
    print("Keep trying!")
end
```

**Walk through it line by line:**
- `if` → "Is this true?"
- `then` → "If yes, do this"
- `elseif` → "Or maybe this is true?"
- `else` → "If nothing matched, do this"
- `end` → "We're done checking"

**Challenge:** Change the score to 3, then to 7, then to 10. Read what prints each time.

---

## 50–65 min — Brick Color on Touch (First Interactive Script)

This one makes something happen in the 3D world.

1. In Explorer → select a Part in the Workspace
2. Right-click → Insert Object → **Script** (inside the Part)
3. Type:

```lua
local part = script.Parent

local function onTouch(hit)
    part.BrickColor = BrickColor.new("Bright red")
    print(hit.Name .. " touched the part!")
end

part.Touched:Connect(onTouch)
```

4. Hit **Play** and walk into the part

**Explain:**
- `script.Parent` → the part this script lives inside
- `onTouch` → a function that runs when something touches the part
- `hit` → whatever touched it (usually a player's limb)
- `.Touched:Connect(onTouch)` → "when touched, call this function"

---

## 65–75 min — Save & Push

```bash
git status
git add .
git commit -m "add lua basics: variables, if statements, touch event"
git push
```

**Wrap up discussion:**
- "What's a variable?"
- "What does `local` mean?"
- "What is an event?"

**Next lesson:** Loops, functions, and building a simple scoring system.

---

:::tip Print Reference
[📄 Download the Lesson 05 cheatsheet](/cheatsheets/lesson-05-cheatsheet.pdf) — print it and keep it on your desk while you work.
:::
