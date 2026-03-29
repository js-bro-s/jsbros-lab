---
sidebar_position: 10
---

# JS Bros Lab — Lesson 10

## Sounds & Effects: Make Your Game Feel Alive

- **Duration:** 60 minutes
- **Prereq:** Lessons 8 & 9 complete
- **Goal:** Add sounds, color tweens, and particle effects to the coin game

---

## 0–5 min — Why Effects Matter

Play two versions of the same game — one with no sound or effects, one with both.

> "The gameplay is identical. Which one felt better to play?" "Sound and visual feedback tell the
> player that something happened. Without it, the game feels broken even if it works perfectly."

---

## 5–20 min — Adding Sounds

**Where sounds live in Roblox:**

- Inside a `Part` → plays at that location in the world (3D positional)
- Inside `SoundService` or `ReplicatedStorage` → plays globally

**Add a collect sound to each coin:**

1. In the Toolbox, search for a free coin collect sound (or use SoundId from the catalog)
2. Or use this free Roblox sound ID: `rbxassetid://4807263376`

**Update `CoinCollector.lua`:**

```lua
local function playCollectSound(position)
    local sound = Instance.new("Sound")
    sound.SoundId = "rbxassetid://4807263376"
    sound.Volume = 0.5
    sound.RollOffMaxDistance = 30

    -- Attach to a temp part at coin position so it's positional
    local soundPart = Instance.new("Part")
    soundPart.Anchored = true
    soundPart.CanCollide = false
    soundPart.Transparency = 1
    soundPart.Position = position
    soundPart.Parent = workspace
    sound.Parent = soundPart

    sound:Play()

    -- Clean up after sound finishes
    task.delay(sound.TimeLength + 0.5, function()
        soundPart:Destroy()
    end)
end
```

**Call it in `onCoinTouched`:**

```lua
if player then
    local coinPosition = coin.Position
    coin:Destroy()
    _G.addScore(player, 1)
    playCollectSound(coinPosition)
    -- ... rest of function
end
```

---

## 20–35 min — TweenService: Smooth Color Changes

`TweenService` animates values over time — position, size, color, transparency.

```lua
local TweenService = game:GetService("TweenService")

local part = workspace.SomePart

local tweenInfo = TweenInfo.new(
    0.5,                      -- duration (seconds)
    Enum.EasingStyle.Quad,    -- easing style
    Enum.EasingDirection.Out  -- direction
)

local goal = {
    BrickColor = BrickColor.new("Bright red")
}

local tween = TweenService:Create(part, tweenInfo, goal)
tween:Play()
```

**Apply to the coin collector — flash the coin before it disappears:**

```lua
local TweenService = game:GetService("TweenService")

local function flashAndDestroy(coin)
    local tweenInfo = TweenInfo.new(0.15, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)

    -- Flash to white
    local tween = TweenService:Create(coin, tweenInfo, {
        Color = Color3.new(1, 1, 1),
        Size = Vector3.new(3, 3, 3),
    })
    tween:Play()

    task.wait(0.15)
    coin:Destroy()
end
```

Replace `coin:Destroy()` in `onCoinTouched` with `flashAndDestroy(coin)`.

---

## 35–48 min — Particle Effects

Add a burst of particles when a coin is collected.

1. In Studio, insert a `Part` somewhere in Workspace
2. Insert → `ParticleEmitter` inside it
3. Tweak properties:
   - `Color`: yellow/gold gradient
   - `LightEmission`: 1
   - `Rate`: 20
   - `Speed`: 10
   - `Lifetime`: 0.5

4. Name the Part `CoinBurst` and move it to `ReplicatedStorage` as a template

**Spawn particles on collect:**

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local function burstEffect(position)
    local burst = ReplicatedStorage.CoinBurst:Clone()
    burst.Position = position
    burst.Parent = workspace

    -- Enable emitter briefly then clean up
    local emitter = burst:FindFirstChildOfClass("ParticleEmitter")
    if emitter then
        emitter:Emit(20)  -- emit 20 particles instantly
    end

    task.delay(2, function()
        burst:Destroy()
    end)
end
```

---

## 48–57 min — Background Music

Add ambient music that plays for all players.

In `ServerScriptService`, create a new Script `BackgroundMusic`:

```lua
local SoundService = game:GetService("SoundService")

local music = Instance.new("Sound")
music.SoundId = "rbxassetid://1843671737"  -- replace with your track
music.Volume = 0.3
music.Looped = true
music.Parent = SoundService

music:Play()
print("Music started")
```

**Let kids pick their own track** — search the Toolbox for free music and grab the SoundId from the
Properties panel.

---

## 57–60 min — Final Playtest & Save

Play the full game together. It should now have:

- ✅ Coins spawning randomly
- ✅ Score on screen
- ✅ Timer countdown
- ✅ Winner announcement
- ✅ Collect sound
- ✅ Coin flash + particle burst
- ✅ Background music

```bash
git add .
git commit -m "lesson 10: sounds, tweens, particle effects, background music"
git push
```

**Celebrate.** They just built and shipped a real game.

---

## What's Next?

Now that they have a working game, natural next projects are:

- **RemoteEvents** — proper client-server communication (replace `_G`)
- **DataStores** — save scores between sessions
- **ModuleScripts** — organize code into reusable modules
- **Publishing** — put the game live on Roblox for others to play

---

:::tip Print Reference [📄 Download the Lesson 11 cheatsheet](/cheatsheets/lesson-11-cheatsheet.pdf)
— print it and keep it on your desk while you work. :::
