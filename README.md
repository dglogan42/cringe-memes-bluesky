# Cringe Meme Generator

A browser-based meme generator that pulls live posts from [@adhdloganberry.bsky.social](https://bsky.app/profile/adhdloganberry.bsky.social) on Bluesky and turns them into intentionally cringe image memes — plus a portfolio panel for meme-ing [@dglogan42](https://github.com/dglogan42) and [@Thedoctorjpg](https://github.com/Thedoctorjpg)'s stupid GitHub projects.

No build step. No dependencies. Just static HTML, CSS, and JavaScript (ES modules).

**Repository:** [github.com/dglogan42/cringe-memes-bluesky](https://github.com/dglogan42/cringe-memes-bluesky)  
**Version:** 1.44.0 · **Discord-Restream** era portfolio fuel (synced) — 122 @dglogan42

## Features

- Fetches profile info and recent posts from the Bluesky public API
- 10 meme templates inspired by the feed (bot rants, ADHD brain, podcast drops, and more)
- Adjustable cringe level with sparkles, WordArt, and Comic Sans toggles
- Canvas-rendered meme preview with download and caption copy
- Bluesky compose intent link for sharing
- **Stupid GitHub Projects** — **157** repos across two accounts ([@dglogan42](https://github.com/dglogan42) **122** + [@Thedoctorjpg](https://github.com/Thedoctorjpg) **35**) as one-click meme fuel
- Newest fuel: **[Discord-Restream](https://github.com/dglogan42/Discord-Restream)** — Signal Deck, Discord Go Live / Replit YouTube rebroadcast control room
- Also hot: **[Bluesky-Replit](https://github.com/dglogan42/Bluesky-Replit)**, **[Sugarpaw](https://github.com/dglogan42/Sugarpaw)**, **[Lacewarrant](https://github.com/dglogan42/Lacewarrant)**, **[lytchgate](https://github.com/dglogan42/lytchgate)**
- **Multi-platform PWA** — install on web, iOS, Android, Windows, Mac, Linux

## Quick Start

```bash
git clone https://github.com/dglogan42/cringe-memes-bluesky.git
cd cringe-memes-bluesky
python3 -m http.server 3456
```

Or with npm:

```bash
npm start
```

Open [http://localhost:3456](http://localhost:3456) in your browser.

## Usage

### Bluesky feed memes

1. Pick a meme template or click **Randomize Cringe**.
2. Edit the top and bottom text, or click **Pull From Feed** to use a real post.
3. Tune the cringe level and visual options.
4. **Download Meme** as a PNG or **Copy Caption** for posting.

Click any post in the **Recent Posts** sidebar to turn it into meme text instantly.

### GitHub project memes

Scroll to **My Stupid GitHub Projects**:

1. Switch between **@dglogan42** (122 repos, newest first — **Discord-Restream** featured) and **@Thedoctorjpg** (35 repos).
2. Filter by category — Sports, Games, Chaos Apps, Commerce, Writing, etc.
3. Click a repo card or **Meme this repo** to load cringe top/bottom text.
4. Use **Meme a Random Repo** in the sidebar for chaos mode.

When a repo is selected:

- The canvas watermark shows the repo name
- Captions include the GitHub URL
- Bluesky share intent links to the project
- PNG downloads are named `cringe-meme-{repo-id}-….png`

## GitHub Portfolio (meme fuel)

Synced from `projects.js` — **122** @dglogan42 repos (newest first; matches public GitHub).

| Repo | What it is |
|------|------------|
| [Discord-Restream](https://github.com/dglogan42/Discord-Restream) | Signal Deck — Discord livestream rebroadcast control room PWA. Pick Discord Go Live or the Replit YouTube stream, send it to Bluesky, YouTube, Twitch, Kick, or custom RTMP. Partial failure is first-class. MIT. |
| [Bluesky-Replit](https://github.com/dglogan42/Bluesky-Replit) | Replit YouTube → Bluesky. Watches youtube.com/@replit/streams and posts the official Live Now pattern: YouTube card embed + app.bsky.actor.status#live. Optional Discord webhook. MIT. Does not restream the video file. |
| [Sugarpaw](https://github.com/dglogan42/Sugarpaw) | SUGARPAW — original cozy orchard cart. Nuan, 22, half-East-Asian panda-kin. Pick strawberries, watermelon, grapes; mix lemonade and ice cream; serve the line. Three days then festival. PC browser. Original IP; not affiliated with hololive / any cosplayer. |
| [Lacewarrant](https://github.com/dglogan42/Lacewarrant) | LACEWARRANT — original 2D action hunter. Rue Calder, 27, licensed hem hunter of the Nameless Ward. Slash combos, dash i-frames, heavy launch, six adult warrants, Seamlord boss. PC browser. Original IP; not affiliated with UMO Studio / Tia:weird hunter. |
| [lytchgate](https://github.com/dglogan42/lytchgate) | WITHERMERE — original Victorian survival horror. Mira Alden, Fallowmere House, the Pale Bloom. Pre-rendered rooms, tank controls, eight-slot case, phonograph needles, crest puzzles, two endings. PC browser. Original IP; not affiliated with Capcom / Resident Evil. |
| [Spanlight](https://github.com/dglogan42/Spanlight) | Spanlight — original browser lane-siege. Aurel vs Nadir across three living brass spans. Last-hit Glimmers, spend Shards at the Hearth, tear down the Spire. Four Bound. Not Dota, League, or any licensed MOBA. |
| [ContinentalLine](https://github.com/dglogan42/ContinentalLine) | Continental Line — original American War of Independence real-time tactics. No camps: line, column, square, loose. Volleys, morale, fatigue, woods and redoubts. Lexington to Guilford. PC browser + Gradle WebView APK. Inspired by formation RTS; not affiliated with Veterans: Napoleonic Wars / Tactical Boar. |
| [MossGlow-Island](https://github.com/dglogan42/MossGlow-Island) | Mossglow Isle — original cozy island adventure for Android sideload + PC browser. Farm, fish, mine, cook, hatch Mossglows, clear the Ancient Hollow. Gradle WebView APK, no stamina. Inspired by the farm/explore/companion loop; not affiliated with Luma Island / Feel Free Games. |
| [HoloTCG](https://github.com/dglogan42/HoloTCG) | HoloTCG / LUMINA — unofficial hololive OCG fan client. Official EN names and public stats, original proxy art, no COVER scans. Browser CPU + LAN rooms, Gradle WebView Android APK. Not affiliated with COVER / hololive / Bushiroad. |
| [Bark-Derby](https://github.com/dglogan42/Bark-Derby) | Bark Derby — dog-racing training-sim: scout, train 12 turns, championship race, then karaoke night and date night with five house idols. React + Express + signed Android 8+ APK. Original. |
| [Portaloo-Sim](https://github.com/dglogan42/Portaloo-Sim) | The Loo Yard — offline portable toilet hire tycoon. Buy cabins, crew the wash bay, hire to festivals, markets, civil sites and farm weddings. PC browser + WebView Android APK. Original. |
| [Vanguard-Command](https://github.com/dglogan42/Vanguard-Command) | VANGUARD COMMAND — offline squad tactics APK. Four operations (Sector 7 → Core Vault), cards each round, on-device leaderboard. WebView Android 8+. Original; not Nintendo / Marvel / MICA. |
| [Franxx-Command](https://github.com/dglogan42/Franxx-Command) | FRANXX COMMAND — unofficial mecha gacha APK. 8-hunt campaign, 3-unit squad, dupe upgrades, pair sync bonus, Plant commissary. Offline WebView Android 8+. Fan project; not Darling in the Franxx / Xenoblade. |
| [Mossling-Meadows](https://github.com/dglogan42/Mossling-Meadows) | Mossling — offline cozy valley life-sim for Android sideload + PC browser. Tend Mossvale: gather dew and peat, craft gifts, plant dewleaf, restore a workshop and shrine, befriend ten original moss-folk. Original; not Pokémon Pokopia / Nintendo. |
| [ATSNZExpo](https://github.com/dglogan42/ATSNZExpo) | ATSNZ Access — unofficial Expo web companion for the ATSNZ Disability Expo 2026 (Due Drop, Manukau). High contrast, Easy Read, Gate 3 parking, Have a Go, Help now. Not official ATSNZ. |
| [The-Silk-Roads](https://github.com/dglogan42/The-Silk-Roads) | 3D Silk Road globe — 18 corridors, 72 cities, caravan fly-through Luoyang to Constantinople. Cesium + Google Earth KML. |
| [Sundry](https://github.com/dglogan42/Sundry) | Rate anything (pens, incense, Lindt, bus routes). 1–10 + SS→D boards. Static web, localStorage. |
| [Herd](https://github.com/dglogan42/Herd) | Anonymous campus feed for Android. Votes, comments, peek other herds. Original; not Yik Yak. |
| [Ink](https://github.com/dglogan42/Ink) | Instagram messenger without Instagram. Notes, requests, hearts. No feed / Reels / Meta. |
| [local-marketplace](https://github.com/dglogan42/local-marketplace) | Stoop — local classifieds without Facebook. Two-week listings, typed first messages. |
| [Vitalstatistix](https://github.com/dglogan42/Vitalstatistix) | Local-first Health.app for Android. Kotlin + Jetpack Compose on Health Connect: one timeline, two-second logging, honest widgets. Symptoms, brushing, meds, labs. No company server, no INTERNET. Apache 2.0. Not a medical device. |
| [Rubble-App](https://github.com/dglogan42/Rubble-App) | Out of the Rubble — Gracecity Church 8-week Nehemiah personal journey. Native Android (Java + JDK + Android SDK): weekly practices, lined journal, great-work sentence, bundled booklet PDF, sermon links. Offline. Apache 2.0. |
| [Frisco-Founders-Club](https://github.com/dglogan42/Frisco-Founders-Club) | Fogline — San Francisco club for founders, operators, and investors who meet through sport and wellness. Android (Kotlin + Compose): this week’s events, RSVP, member directory, 1:1 chat. MIT. Not Golden Born Society. |
| [Nineties-Fighter](https://github.com/dglogan42/Nineties-Fighter) | HYPER RUSH — 3-on-3 90s arcade tag fighter (Icons vs Outlaws). Assists, launchers, Variable Combination, Level 3 hypers. Web + signed Android 8+ APK. Original roster; not Marvel vs Capcom. |
| [Starroot-Isle](https://github.com/dglogan42/Starroot-Isle) | Starroot Isle — original cozy island adventure for Android. Farm, mine, fish, craft, Heartseed story, puffkin companions, local + online visit co-op. MIT original IP. |
| [APKs](https://github.com/dglogan42/APKs) | Sideloadable Android APKs for dglogan42 games — one repo, many unknown-sources installs. |
| [Cursed-Circuit](https://github.com/dglogan42/Cursed-Circuit) | CURSED CIRCUIT — original jujutsu-academy JRPG homage. Octopath BP/Break, Chained Echoes Overdrive, King's Fingers, Domain Expansion. Web 320×240 + signed Android 8+ APK. Not official JJK. |
| [Haiyaku-Beach-Volleyball](https://github.com/dglogan42/Haiyaku-Beach-Volleyball) | HAIYAKU! — week-long beach training camp. 2v2 sand volleyball, tiki bar, infinity pool, suikawari / fireworks / shaved ice. Web + signed Android 8+ APK. Original; not Haikyū!! or DOA Xtreme. |
| [Sakura-Mart](https://github.com/dglogan42/Sakura-Mart) | ちびマート / CHIBI MART — chibi Japanese supermarket sim in Game Boy Advance pixel graphics + chiptunes. Web 240×160 + signed Android 8+ APK. Stock shelves, scan neighbors, 7-day week. |
| [Bread](https://github.com/dglogan42/Bread) | Bread — cozy bakery shop sim for Android & iOS (Expo / React Native). Order supplies, bake recipes, serve customers, pay rent, day cycle + autosave. EAS preview APK. |
| [Supa-Saver](https://github.com/dglogan42/Supa-Saver) | Supa Saver — NZ supermarket price spy. Compare Woolworths, New World, PAK'nSAVE & FreshChoice. Barcode scan, GPS regions, multi-store basket split. Expo + Express. |
| [ToyFinder](https://github.com/dglogan42/ToyFinder) | ToyFinder — preorder upcoming toys before they sell out. Expo mobile + Vite web, NZD catalog, filters, limited editions, on-device preorder history. |
| [Hardware-Help](https://github.com/dglogan42/Hardware-Help) | Hardware Help / Aisle Finder — AR aisle locate + 15% price match for Bunnings & Mitre 10. Capacitor web→Android/iOS, dual-chain maps, offline catalogue. |
| [Space-Factory](https://github.com/dglogan42/Space-Factory) | Space Factory — Android orbital factory sim. Mine asteroids, smelt metal, fabricate chips, launch starships. 48×32 grid, solar power network, 15-ship victory. Original; not Factorio. |
| [Pebble-Cove](https://github.com/dglogan42/Pebble-Cove) | Pebble Cove — offline village / collectible life-sim for Android (Kotlin + Compose). Island map, day/night, bugs/fish/shells, NPCs, shop, cottage décor. Not affiliated with Nintendo / Stardew / etc. |
| [FairDinkum-Trivia](https://github.com/dglogan42/FairDinkum-Trivia) | Fair Dinkum Trivia — offline Australian general-knowledge quiz for Android (Kotlin + Compose). Prize ladder, lifelines, 130+ AU questions, local high scores. Free; not a TV-show port. |
| [TryLine-Sevens](https://github.com/dglogan42/TryLine-Sevens) | Tryline Sevens '98 — HK / Wellington Sevens–style 7-a-side cup rugby for Android sideload + PC browser. Arcade energy; not Jonah Lomu Rugby. |
| [Flare](https://github.com/dglogan42/Flare) | Flare Android (Offline) — packaging for free/libre Flare ARPG engine + Empyrean Campaign (official APK + mods zip). Not a reimplementation. |
| [Shardfall](https://github.com/dglogan42/Shardfall) | Shardfall — offline Diablo-style ARPG for Android sideload + PC browser. Procedural floors, loot, Spellblade / Warden / Arcanist. Original; not Blizzard. |
| [MetroDash](https://github.com/dglogan42/MetroDash) | Metro Dash PC — original Windows endless runner (3 lanes, jump/slide, coins, power-ups). Offline, not Steam, not Subway Surfers. |
| [HoloLive-Dreams](https://github.com/dglogan42/HoloLive-Dreams) | Dream Park PC — offline Windows fan demo (not Steam). Park hub, 4-lane rhythm, Hoppin' Rope, quests, Xbox controller support. Unofficial; not affiliated with COVER / hololive. |
| [mythicats](https://github.com/dglogan42/mythicats) | Pokémon GO–style AR hunt for mythical cats — web (Three.js + GPS) + Android (ARCore Geospatial, SceneView glTF, multiplayer). Catch with Catnip, Tuna, or Milk. MIT monorepo. |
| [Convention-Expo](https://github.com/dglogan42/Convention-Expo) | Con/expo volunteer toolkit — Grok event-volunteer skill, Overload NZ packs, applications, ICS, guests/events, floor landmarks (PII redacted) |
| [Voice-Agent](https://github.com/dglogan42/Voice-Agent) | Carina — ADHD-friendly xAI Realtime scheduling voice agent (calendar clash checks, safety guards, 1737 handoff) |
| [Witch-Dating](https://github.com/dglogan42/Witch-Dating) | Thorn Scarhart dating & social kit — Tinder profile, IG/Bluesky/TikTok packs, Don't Stop Believin' Radio, thirst stills + 6s reels, Grok skill to post across socials. Inspired by *An Ancient Witch's Guide to Modern Dating*. |
| [Ubuntu-Live-Desktop](https://github.com/dglogan42/Ubuntu-Live-Desktop) | StudioWall — live wallpaper for Ubuntu Studio / KDE Plasma (Wayland + X11). PyQt6 player, dark GUI, tray, CLI, multi-monitor, autostart. Wallspace-inspired, no subscription. |
| [Dropzone-Royale](https://github.com/dglogan42/Dropzone-Royale) | Linux-native offline battle royale — plane drop, loot, blue zone, AI rivals; PUBG-genre inspired, original MIT (not a Krafton port). |
| [Blade-Arena](https://github.com/dglogan42/Blade-Arena) | Offline Android sideload tactical sword fighter — Blade Symphony–inspired 1v1 / 2v2 / FFA / Control Points, stances, WebView + Canvas APK. |
| [Ubuntu-Studio-Tablet](https://github.com/dglogan42/Ubuntu-Studio-Tablet) | Tablet-first Ubuntu Studio 26.04 layer — Plasma app launchers, Xiaoxin laptop dual-boot, ARM/Plasma Mobile, Waydroid helpers. |
| [steam-mods](https://github.com/dglogan42/steam-mods) | Umamusume Linux tools — GE-Proton/external library, UMML GUI + `patch-mods.py`, MIT helpers only. |
| [alchemised](https://github.com/dglogan42/alchemised) | Alchemised: Resonance — pixel-art RPG Android APK (sideload), memory shards, alchemy, three Resonance classes. Fan tribute. |
| [flying-fox](https://github.com/dglogan42/flying-fox) | Flying Fox — cozy hex tile-laying deckbuilder (Hexfell/Dorfromantik vibes) + Firefox extension. |
| [Visual-Diary](https://github.com/dglogan42/Visual-Diary) | Spine · Open Studio — marketing kit for a visual diary app: waitlist pages (en/es/fr/en-AU), Starter Packs, #OpenStudioFriday, brand tokens. |
| [Puzzler](https://github.com/dglogan42/Puzzler) | Puzzle Sorter — find puzzles, AR piece assist (colour/edges/grid), frames/glue/mats, clubs & table nights. |
| [Marketing-Kit](https://github.com/dglogan42/Marketing-Kit) | Full-stack marketing kit studio — live-event promos, Bluesky-first campaigns, AI generate-from-source (SpaceXAI/xAI). |
| [Drone-Hire](https://github.com/dglogan42/Drone-Hire) | Hire drones + optional pilots for photo, cinema, survey, thermal, FPV, ag. |
| [Trails-Companion](https://github.com/dglogan42/Trails-Companion) | Local hiking group social app — discover walks, join crews, RSVP meetups, trail catalog. |
| [Paleo-Pal](https://github.com/dglogan42/Paleo-Pal) | Paleo calorie & macro tracker — calorie ring, meal sections, ~40 staples, 7-day history. |
| [Sew-And-Sew](https://github.com/dglogan42/Sew-And-Sew) | Craft community for sewing, crochet, knitting, embroidery, quilting, mending — patterns, clubs, stitch-night RSVPs. |
| [birdy-bro](https://github.com/dglogan42/birdy-bro) | Field guide, life list & spot log for amateur ornithologists — 50+ species, GPS, photos, hotspots, optional SpaceXAI ID. |
| [Biker-Meet](https://github.com/dglogan42/Biker-Meet) | Group rides for motorcyclists and cycle clubs — discover rides, join chapters, RSVP, plan runs, garage profile. |
| [Pickle-Padel](https://github.com/dglogan42/Pickle-Padel) | Pickleball + padel club app — tournaments, solo join, partner queue, leaderboards, club meets. |
| [Kart-Lap](https://github.com/dglogan42/Kart-Lap) | Lapline — pit-lane lap timer & scoreboard for go-kart challenges. |
| [The-good-herbs](https://github.com/dglogan42/The-good-herbs) | Local garden club finder, seed & bulb swap board, and a hemisphere-aware planting calendar. |
| [Camera-Trader](https://github.com/dglogan42/Camera-Trader) | Auckland camera trade-in hub — grade gear, store credit vs cash (Stripe Connect sim), inventory, shutter depreciation, stolen-serial mock. |
| [Vinyl-Addict](https://github.com/dglogan42/Vinyl-Addict) | Vinyl Addict × Real Groovy PWA — scan covers, collection, mock trade-in grade, cash vs store credit (+10%). |
| [Uma-Companion](https://github.com/dglogan42/Uma-Companion) | Personal PWA companion — offline chat, mood check-ins, private notes. |
| [Fetchly](https://github.com/dglogan42/Fetchly) | Student neighborhood delivery — email-only signup, walk/bike/scooter/skateboard couriers, no driver’s license. |
| [Manga-Mate](https://github.com/dglogan42/Manga-Mate) | Manga series tracker by genre + chapter progress. |
| [Brick-Bud](https://github.com/dglogan42/Brick-Bud) | LEGO® Collectible Minifig tracker — Expo + React Native, 28 CMF series, owned/wishlist, spend vs value, per-series completion. |
| [WarBand](https://github.com/dglogan42/WarBand) | Teams/Slack-style hub for tabletop groups — channels, calendar ICS sync, Socket.IO chat, Jitsi video, JWT + SQLite,… |
| [Dispensa](https://github.com/dglogan42/Dispensa) | Pharmacist AR support tool — eRx queue, camera AR overlays, accuracy checks, drug interaction engine, QR/PDF intake,… |
| [Cosplay-Meetup-Manager](https://github.com/dglogan42/Cosplay-Meetup-Manager) | Cosplay meetup event planner — checklist, attendees, schedule, localStorage, and share to LINE / KakaoTalk / WeChat / WhatsApp / Discord. |
| [Church-Date](https://github.com/dglogan42/Church-Date) | Kindred — faith-based dating. Next.js + Prisma + NextAuth, 18+ gate, real photo onboarding, mutual match, chat,… |
| [MILF-Mate](https://github.com/dglogan42/MILF-Mate) | Location-based discover app — swipe, filters, matches, Haversine distance. |
| [palagi-life](https://github.com/dglogan42/palagi-life) | Self-deprecating blog + simulated live stream (palagi_live) + TikTok kit. |
| [delphitools-mobile](https://github.com/dglogan42/delphitools-mobile) | Mobile-first privacy-first browser tools + an unhinged AI Prompt Pack (Agent Team, FMCG ads, Blender MCP, VRM, DAW…). |
| [User-Ex-Int](https://github.com/dglogan42/User-Ex-Int) | User Experience Intelligence via Graph Engineering — multi-agent loops with shared memory (generate → critique →… |
| [bubble-tea-news](https://github.com/dglogan42/bubble-tea-news) | Fictional Auckland bubble-tea freesheet — weekly satirical issues, print PDFs, and a whole coffee-news energy empire. |
| [SapioLink](https://github.com/dglogan42/SapioLink) | Dating app landing page — write a letter before you see a face. |
| [Fable-Offline](https://github.com/dglogan42/Fable-Offline) | Offline Fable 5 agent — Ollama chat, loop engineering, self-improving skills. |
| [CourseX-Agents](https://github.com/dglogan42/CourseX-Agents) | Agent swarm for CourseX — multi-agent course chaos in Python. |
| [CourseX](https://github.com/dglogan42/CourseX) | CourseX platform core — courses, content, and educational pipeline energy. |
| [V8-Supercars](https://github.com/dglogan42/V8-Supercars) | iOS + Android PWA — DAZZA bogan Supercars commentary, Clip Studio, Openrestream rebroadcast. |
| [Card-Collector](https://github.com/dglogan42/Card-Collector) | iOS + Android TCG con companion — scan, grade, trade, and pay with Stripe/PayPal/Apple Pay/Google Pay at the booth. |
| [Mission-Not-Ready](https://github.com/dglogan42/Mission-Not-Ready) | Satire meme lab roasting missionreadyhq.com — on-site with no site, no Wi‑Fi, phantom classrooms. |
| [Witchfire](https://github.com/dglogan42/Witchfire) | Full 3-act Broadway musical + EPUB — Basque witch-hunt of 1609, but make it showtunes. |
| [ABG-Finder](https://github.com/dglogan42/ABG-Finder) | Swipe ABGs, rate bubble tea sweetness, track the sauce. |
| [Valorant-Streamer](https://github.com/dglogan42/Valorant-Streamer) | Twitch ladder, gift subs, Throne wishlists, clip studio. |
| [Glasgow-2026](https://github.com/dglogan42/Glasgow-2026) | Morag MacMeme Scots TTS for Commonwealth Games chaos. |
| [sports-clip-studio](https://github.com/dglogan42/sports-clip-studio) | Trim sports commentary clips. Share to Bluesky & podcasts. |
| [F1-Season](https://github.com/dglogan42/F1-Season) | 2026 championship dashboard, Monaco timeline, Speed Racer memes. |
| [le-tour](https://github.com/dglogan42/le-tour) | Tour de France tracker with unreasonable French meme energy. |
| [12th-Man](https://github.com/dglogan42/12th-Man) | Twelfth Man spoof Ashes commentary with Bill Lawry chaos. |
| [All-Blacks-Season](https://github.com/dglogan42/All-Blacks-Season) | Bledisloe Cup tracker + sausage roll stadium reviews. |
| [Road-To-Wimbledon](https://github.com/dglogan42/Road-To-Wimbledon) | ASB Classic → Roland Garros → Wimbledon drama meters. |
| [WWE-Wrestlemania](https://github.com/dglogan42/WWE-Wrestlemania) | Road to WrestleMania hype cards. Roast superstars IWC style. |
| [PGA-Masters](https://github.com/dglogan42/PGA-Masters) | PGA Tour leaderboards, FedEx Cup, Masters Fan Zone. |
| [Asian-Supermarket](https://github.com/dglogan42/Asian-Supermarket) | Find Asian supermarkets. Voice search. Hungry Panda delivery. |
| [Healthpoint](https://github.com/dglogan42/Healthpoint) | NZ chemists, GPs, physios, ACC/WINZ — maps linked. |
| [Instagram-Anime-Effect](https://github.com/dglogan42/Instagram-Anime-Effect) | Cel-shaded anime camera filter PWA for Instagram. |
| [European-Pantry](https://github.com/dglogan42/European-Pantry) | European food shop for NZ — Auckland, Wellington, Christchurch. |
| [OzBiz-Properties](https://github.com/dglogan42/OzBiz-Properties) | Australian commercial real estate — offices, warehouses, retail. |
| [Rednote-Trader](https://github.com/dglogan42/Rednote-Trader) | Xiaohongshu-style marketplace with Stripe & PayPal. |
| [Rednote-Streaming](https://github.com/dglogan42/Rednote-Streaming) | RedNote Chrome extension — livestream to X and Bluesky. |
| [Uncensored-AI](https://github.com/dglogan42/Uncensored-AI) | Local AI studio — SD, LLMs, Whisper, Kokoro, video gen. |
| [Creampie-Time-Calculator](https://github.com/dglogan42/Creampie-Time-Calculator) | Ovulation tracker with whipped-cream pastry alert when it's baby time. |
| [Hogwarts-Sherlock](https://github.com/dglogan42/Hogwarts-Sherlock) | 33k-word EPUB — Mr Holmes on TikTok meets teenage secret notebook energy. |
| [Openstream](https://github.com/dglogan42/Openstream) | Free open-source multi-site streamer — one ingest, many platforms via FFmpeg. |
| [Openrestream](https://github.com/dglogan42/Openrestream) | Standalone multistream app + OBS Lua companion — one OBS feed, many platforms. |
| [Beastwars-TCG](https://github.com/dglogan42/Beastwars-TCG) | Beast Wars Transformers TCG PWA — 100+ cards, expansions, battle vs AI. |
| [Christmas-Countdown](https://github.com/dglogan42/Christmas-Countdown) | Buddy, Grinch & Jack — cozy -ber months, raid party, Feliz Navidad karaoke PWA. |
| [Azogue-Netflix](https://github.com/dglogan42/Azogue-Netflix) | Netflix-adjacent viewing chaos. Queue the doomscroll. |
| [Slam-Poet](https://github.com/dglogan42/Slam-Poet) | Spoken-word / slam poetry tooling for the mic-drop adjacent. |
| [THE-FALLEN-SEED](https://github.com/dglogan42/THE-FALLEN-SEED) | Dark-seed creative project energy. Grow something cursed. |
| [ADHD-Ardour](https://github.com/dglogan42/ADHD-Ardour) | Ardour DAW + ADHD workflow chaos. Record before the hyperfocus ends. |
| [observability-monitoring-toolkit](https://github.com/dglogan42/observability-monitoring-toolkit) | Monitoring / observability toolkit. Graphs for people who graph their feelings. |
| [cringe-memes-bluesky](https://github.com/dglogan42/cringe-memes-bluesky) | This app. Bluesky feed → cringe memes. Maximum regret. |
| [Claude-Skills](https://github.com/dglogan42/Claude-Skills) | Custom Claude Code skills — found-footage screenplay method, tabloid gossip voice, whatever chaos comes next. |
| [UNLISTED](https://github.com/dglogan42/UNLISTED) | Found-footage horror screenplay — an SD card mailed with no return address, three people go looking, one very bad ARG. |
| [production-notes](https://github.com/dglogan42/production-notes) | Evening yoga routine that spiralled into a full shoot brief, call sheet, choreography count, and location scout guide. |
| [AI-Friend](https://github.com/dglogan42/AI-Friend) | Cat-eared VR companion, in pseudocode: BEGIN heard ← Listen(); reply ← Think(heard); Emote(reply.mood); Speak(reply.text) END. |

### @Thedoctorjpg portfolio (35 repos)

Playdate games, open-source novels, red-flag scanners, snack finders, and other chaos — including [warriors-meme-generator](https://github.com/Thedoctorjpg/warriors-meme-generator), [book-club-discussion](https://github.com/Thedoctorjpg/book-club-discussion), [neurohire](https://github.com/Thedoctorjpg/neurohire), [hospo-guide](https://github.com/Thedoctorjpg/hospo-guide), [Amateur-Botanist](https://github.com/Thedoctorjpg/Amateur-Botanist), [mad-max-podcaster](https://github.com/Thedoctorjpg/mad-max-podcaster), and more. Switch to the **@Thedoctorjpg** tab in the app.

Edit `projects.js` (dglogan42) or `projects-thedoctorjpg.js` (Thedoctorjpg) to add or update repos.

## Project Structure

```
cringe-memes-bluesky/          # local folder may still be cringe-meme-generator
├── index.html                 # App shell + GitHub projects panel
├── style.css                  # Cringe UI styles
├── app.js                     # Bluesky API + canvas meme engine
├── projects.js                # @dglogan42 portfolio meme fuel
├── projects-thedoctorjpg.js   # @Thedoctorjpg portfolio meme fuel
├── install.js                 # PWA install prompt helpers
├── sw.js                      # Service worker (offline cache v1.44.0)
├── manifest.webmanifest       # PWA manifest
├── icons/                     # App icons
├── package.json               # Convenience scripts (npm start)
├── LICENSE                    # MIT
└── README.md
```

## API

Uses the Bluesky public API (no authentication required):

- `app.bsky.actor.getProfile`
- `app.bsky.feed.getAuthorFeed`

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Serve on port 3456 (all interfaces) |
| `npm run dev` | Serve on port 3456 |
| `python3 -m http.server 3456` | Manual static server |

## Multi-platform (web · iOS · Android · Windows · Mac · Linux)

This app is a **Progressive Web App (PWA)** — installable from the browser on phones and desktops.

| Platform | How |
|----------|-----|
| **Web** | Any modern browser |
| **iOS** | Safari → Share → **Add to Home Screen** |
| **Android** | Chrome → **Install app** / Add to Home screen |
| **Windows / Mac / Linux** | Chrome or Edge → Install from address bar |

```bash
npm start
# → http://localhost:3456
# Use the Network URL on a phone (same Wi‑Fi)
```

Serve over **HTTPS** (or localhost) for install + offline. Core files are cached by `sw.js`.

## Disclaimer

Not affiliated with Bluesky or GitHub. Maximum cringe intended.

## License

MIT — see [LICENSE](LICENSE).
