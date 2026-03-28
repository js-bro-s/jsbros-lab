# JS Bros Lab — Presenter Notes
> Keep this open alongside the deck. Notes follow slide order: Cover → Overview → 3 slides per lesson (Section Card, Key Concepts, Try It) → Final.

---

## Slide 1 — Cover

Welcome them in. Set the vibe — this is a lab, not a classroom. Say something like: *"We're not here to sit and watch. We're here to break things, figure out why they broke, and fix them."* Let the title sit for a second. If it's the first time they've seen the deck, ask them: *"What do you think JS Bros Lab is?"* Let them answer before moving on.

---

## Slide 2 — Curriculum Overview

Walk through the 11 lessons without going deep on any of them. The point is to give them a map so they know where they're headed. Say: *"Some of these sound easy, some sound hard. By the end you'll have done all of them."* Point out that Lesson 9 is 90 minutes — that's the one where they build an actual game. Build anticipation. Ask: *"Which lesson are you most excited about?"*

---

## Lesson 01 — What We're Building

### Slide 3 · Section Card
Just read the title and subtitle out loud, then pause. Ask: *"What do you think a repository is?"* Let them guess — wrong answers are fine. Say: *"By the end of today you'll know exactly what it is."*

### Slide 4 · Key Concepts
Go through each concept slowly. The key analogies to use:
- **Repo = project folder** — "Imagine if every time you worked on a Lego set, everything went in one labeled box. That's a repo."
- **Commit = save point** — "Like saving in a game, except you never lose your old saves."
- **GitHub = cloud backup + teamwork** — "It lives online, so if your computer dies, your work doesn't."
- **The JS Bros universe** — Show them how the three repos (Games, Lab, Prints) connect. They're building a real portfolio here, not just doing homework.

### Slide 5 · Try It
Walk them through the steps in order. Don't rush step 4 (cloning). If it's their first `git clone`, watch their face when the files appear in VS Code — that moment lands. Key phrase to repeat out loud: *"Nothing breaks forever in a lab."* Say it when something goes wrong (and something will).

---

## Lesson 02 — Writing with Markdown

### Slide 6 · Section Card
Ask: *"Have you ever written something on a computer and wanted it to look nice, but you didn't have Word or Google Docs?"* Markdown is the answer. It's plain text that looks great anywhere — GitHub, websites, documentation.

### Slide 7 · Key Concepts
The best way to teach this is live. Have a `.md` file open in VS Code with a preview pane. As you go through each concept, type it out and show it rendering. Key points:
- Hash signs for headings — more hashes = smaller heading.
- Double asterisks for bold — "*wrapping* a word in stars makes it italic."
- Backticks for code — "when you're writing about code inside regular text, backticks are how you say *this is code*."

### Slide 8 · Try It
The goal is a real `my-game-plan.md` file they commit and push. When it shows up rendered on GitHub, that's the payoff moment. Say: *"That file is now the front page of your project on the internet."* Let that sink in. Ask them to read it on the GitHub website, not just in VS Code.

---

## Lesson 03 — Git in Action

### Slide 9 · Section Card
This is where they get the muscle memory. Say: *"Today you're learning four commands. That's it. Most developers use these exact four commands every single day."*

### Slide 10 · Key Concepts
Walk through the workflow as a story, not a list:
- `git status` — "Before you do anything, check what's changed."
- `git add .` — "Tell Git: I want to save these changes."
- `git commit -m ""` — "Write a note to yourself — future you will thank past you."
- `git push` — "Send it to GitHub. It's live."
- **Branches** — Use the analogy: "A branch is your own experiment table. You can make a mess there and it won't touch the main project."

### Slide 11 · Try It
Make them do all four commands without help if they can. When the file shows up live on GitHub, stop and celebrate it. Key phrase: *"Status. Add. Commit. Push. In that order. Every time."* Have them repeat it back. Make it feel like a ritual.

---

## Lesson 04 — Roblox Studio Basics

### Slide 12 · Section Card
This is where energy picks up — they've been waiting for Roblox. Don't rush it. Say: *"Every Roblox game you've ever played was made in exactly this tool."* Let them open Studio before you start the concepts slide.

### Slide 13 · Key Concepts
Have Studio open side by side. Point to each panel as you name it:
- **Viewport** — the 3D world. "This is what your players see."
- **Explorer** — "Think of it as the family tree. Everything in the game lives here."
- **Properties** — "Click anything in Explorer — Properties shows its settings."
- **Anchored** — this one trips kids up. Demo it: drop a Part, unanchor it, watch it fall. Then anchor it, watch it stay. They'll get it immediately.

### Slide 14 · Try It
Give them full control here. Let them place Parts, mess with colors, duplicate things. Their first build doesn't have to be anything — the point is comfort with the tools. Hit F5 together and walk around. Key phrase: *"Every Roblox game ever was built in exactly this tool."* Say it when they're in playtest mode.

---

## Lesson 05 — Lua Basics

### Slide 15 · Section Card
This is the real coding start. Acknowledge it: *"This is the moment you go from building things to making them do stuff."* Ask if either of them has written code before. Whatever the answer, say: *"By the end of today, you'll have code running inside a Roblox game you made."*

### Slide 16 · Key Concepts
Go slow here. Don't skip the `local` keyword — it matters. Good talking points:
- `print()` — "This is how you talk to yourself while coding. It doesn't show in the game, only in the Output window. You'll use it constantly to debug."
- **Variables with `local`** — "Always use `local`. It keeps your variable inside the function where you meant it."
- **Strings** — "Any text you want to store goes in quotes."
- **Booleans** — "Only two values: `true` or `false`. That's it."
- **if/else** — Read through the logic like a sentence: *"If score is 10 or more, do this. Otherwise, do that."*

### Slide 17 · Try It
The touch event is satisfying because it feels like magic — walk across a brick and it changes color. Take it step by step. Watch for the common mistake: script inside the Part vs. script in ServerScriptService. Key terms to say out loud: `script.Parent`, `Touched:Connect()`, `task.wait()`.

---

## Lesson 06 — Loops

### Slide 18 · Section Card
Use the concept of repetition: *"What if you wanted to spawn 100 coins in your game? Would you write the same line 100 times?"* That's what loops solve.

### Slide 19 · Key Concepts
Work through each loop type with a live example:
- **for i = 1, 10** — "Count from 1 to 10. Every time through the loop, `i` is one bigger."
- **Step value** — "The third number is the step. Go 0 to 20 by 2s, or count backwards with -1."
- **while loop** — "Keeps going as long as the condition is true. Perfect for game loops — run until the game ends."
- **task.wait()** — IMPORTANT: Tell them why. "Without task.wait() in a while loop, you'll freeze Roblox. The engine can't breathe."

### Slide 20 · Try It
Spawning a row of 10 colored Parts is visually rewarding. `BrickColor.Random()` especially — every run looks different. The countdown timer is a good confidence builder. Key terms: `Instance.new("Part")`, `part.Parent = workspace`, `BrickColor.Random()`.

---

## Lesson 07 — Functions

### Slide 21 · Section Card
Lead with the rule: *"If you copy-pasted code more than once, it should be a function."* Ask: *"Why would copying code be a problem?"* Guide them to the answer — if you need to change it, you have to change it in 10 places instead of 1.

### Slide 22 · Key Concepts
Key ideas to drive home:
- **Define vs. call** — "Writing `local function greet() end` doesn't run anything yet. You have to call it with `greet()`."
- **Parameters** — "They're like slots you fill in when you call the function. `greet('Jonathan', 5)` fills in `name` and `score`."
- **Return values** — "Functions can hand you something back. `getRank(score)` gives you back a string like `'Gold'`."
- **Default params** — Show the `color = color or BrickColor.Random()` pattern. "If nothing is passed in, use this fallback."

### Slide 23 · Try It
The refactor challenge is the most important skill-building exercise in the early lessons. Have them write the messy version first, then clean it up. When they see the same output with half the code, it clicks. Key phrase: *"If you copy-pasted it twice, it should be a function."*

---

## Lesson 08 — Tables & Lists

### Slide 24 · Section Card
Use the inventory analogy: *"In every RPG, your character has an inventory. A backpack with items. In Lua, that's a table."*

### Slide 25 · Key Concepts
Two types of tables — make sure they understand the difference:
- **List tables (array)** — ordered, accessed by number. "The first slot is 1, not 0 — Lua is different from most languages."
- **`#items`** — "The hash symbol gives you the count. Like `items.length` if you've ever seen JavaScript."
- **`table.insert` / `table.remove`** — "These are your add and remove tools."
- **`ipairs` vs `pairs`** — "Use `ipairs` for a list where order matters. Use `pairs` for a dictionary where you access by key name."

### Slide 26 · Try It
The leaderboard builder connects directly to their game. Finding the highest scorer is a good challenge that requires a loop + a variable tracking the max. Let them struggle on it a bit before helping.

---

## Lesson 09 — Build Your First Game

### Slide 27 · Section Card
This is the big one. Say: *"Everything from the last 8 lessons is going into one game today. This is what it was all building toward."* Give them a minute to be excited. This lesson is 90 minutes — plan for it.

### Slide 28 · Key Concepts
The 4-script architecture is the core idea. Draw it out if you can — or talk through it:
- **Spawner** — creates coins at random positions
- **ScoreTracker** — keeps score in `_G` (a shared global table for now)
- **CoinCollector** — handles what happens when a player touches a coin
- **GameTimer** — runs the 60-second countdown and announces the winner

Notes on `_G`: tell them it's a shortcut we're using now that works for a small game, but real projects use Module Scripts. They'll learn that later. Key concept: `GetPlayerFromCharacter(hit.Parent)` — this is how you figure out who touched something.

### Slide 29 · Try It
Do this one together, script by script. Don't rush to hand them the keyboard — walk through the logic of each script before writing it. When the full game runs and coins respawn and scores track correctly, stop. Key phrase: *"You just shipped a multiplayer game. That's real."* Mean it.

---

## Lesson 10 — GUI & Score Display

### Slide 30 · Section Card
Ask: *"When you play a game, where do you see your score? Your health bar? Your ammo?"* That UI layer is what we're building today. It's called a GUI — Graphical User Interface.

### Slide 31 · Key Concepts
Key hierarchy to walk through slowly: `StarterGui → ScreenGui → Frame → TextLabel`. They need to understand the parent-child relationship.
- **LocalScript** — "This script runs on each player's screen separately. A ServerScript runs once for everybody. This is the difference between 'my score' and 'the game score'."
- **`WaitForChild()`** — "The LocalScript loads almost instantly, but the GUI might not be there yet. WaitForChild pauses until it's ready."
- **`TextScaled`** — "Automatically fits the text to the box size. Turn it on so it works on any screen."
- **Update loop** — "Every 0.5 seconds, check the score and update the label."

### Slide 32 · Try It
Have them build the HUD bottom-up: TextLabel first, then style it, then wire it up with the LocalScript. The moment the score actually updates live during a playtest is satisfying. If time allows, the leader display is a great bonus — loops over all players and shows who's winning.

---

## Lesson 11 — Sounds & Effects

### Slide 33 · Section Card
This is polish. Say: *"The game works. Now we make it feel good."* A good lead-in: *"Think about your favourite game. Take the sound away. Take the visual effects away. Is it still fun?"* Usually the answer is: less fun, or at least different. Sound and effects are 50% of the experience.

### Slide 34 · Key Concepts
Three systems to cover:
- **Sound** — "Every Sound has a SoundId from the Roblox sound library. Volume from 0 to 1. Call `:Play()` to trigger it."
- **TweenService** — "TweenService smoothly animates a property from point A to point B. `TweenInfo.new(duration, EasingStyle, Direction)` controls how it moves. Try `Enum.EasingStyle.Bounce` for something fun."
- **ParticleEmitter** — "Lives inside a Part. Set Rate to 0 so it doesn't constantly emit, then call `:Emit(20)` to fire a burst."
- **SoundService** — "This is where background music goes. It plays globally — all players hear it."

### Slide 35 · Try It
Work through the coin collector polish step by step. The tween flash (coin grows before it disappears) and the particle burst are the most visually impactful. Let the kids pick the background music — it gives them ownership of the final result. Key phrase: *"Same game. Completely different experience."* Play it before and after the effects are added.

---

## Slide 36 — Final Slide

Read the slide out loud: *"You shipped a game."* Then: *"Push it to GitHub and show someone."*

Actually make them do it if it hasn't happened yet. Push to GitHub, share the link with someone — a parent, a friend, post it somewhere. The act of shipping — even a small thing — is what this whole curriculum is about. Remind them: everything on that slide is something they built from scratch.

Ask each of them: *"What was the hardest part? What was the coolest part? What do you want to add next?"*

---

## General Tips

**When something breaks**, don't fix it immediately. Ask: *"What do you think happened? Where should we look first?"* The debugging instinct is more important than any single concept.

**Keep the Output window open** in Roblox Studio at all times. Train them to read error messages, not just close them.

**Commit at the end of every lesson**, even if the code isn't perfect. The habit matters more than the state of the code.

**Energy check**: Lessons run 45–90 minutes. If attention is drifting before an activity, skip straight to Try It — doing always beats watching.
