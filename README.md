# Cringe Meme Generator

A browser-based meme generator that pulls live posts from [@adhdloganberry.bsky.social](https://bsky.app/profile/adhdloganberry.bsky.social) on Bluesky and turns them into intentionally cringe image memes — plus a portfolio panel for meme-ing [@dglogan42](https://github.com/dglogan42) and [@Thedoctorjpg](https://github.com/Thedoctorjpg)'s stupid GitHub projects.

No build step. No dependencies. Just static HTML, CSS, and JavaScript (ES modules).

**Repository:** [github.com/dglogan42/cringe-memes-bluesky](https://github.com/dglogan42/cringe-memes-bluesky)  
**Version:** 1.11.0 · **steam-mods** era portfolio fuel

## Features

- Fetches profile info and recent posts from the Bluesky public API
- 10 meme templates inspired by the feed (bot rants, ADHD brain, podcast drops, and more)
- Adjustable cringe level with sparkles, WordArt, and Comic Sans toggles
- Canvas-rendered meme preview with download and caption copy
- Bluesky compose intent link for sharing
- **Stupid GitHub Projects** — **122** repos across two accounts ([@dglogan42](https://github.com/dglogan42) **81** + [@Thedoctorjpg](https://github.com/Thedoctorjpg) **41**) as one-click meme fuel
- Newest fuel: **[steam-mods](https://github.com/dglogan42/steam-mods)** — Linux Steam / Proton mod tooling (Umamusume UMML helpers + GE-Proton notes)
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

1. Switch between **@dglogan42** (81 repos, newest first — **steam-mods** featured) and **@Thedoctorjpg** (41 repos).
2. Filter by category — Sports, Games, Chaos Apps, Commerce, Writing, etc.
3. Click a repo card or **Meme this repo** to load cringe top/bottom text.
4. Use **Meme a Random Repo** in the sidebar for chaos mode.

When a repo is selected:

- The canvas watermark shows the repo name
- Captions include the GitHub URL
- Bluesky share intent links to the project
- PNG downloads are named `cringe-meme-{repo-id}-….png`

## GitHub Portfolio (meme fuel)

Synced from `projects.js` — **81** @dglogan42 repos (newest first).

| Repo | What it is |
|------|------------|
| [steam-mods](https://github.com/dglogan42/steam-mods) | Linux Steam mod tooling — GE-Proton helpers, UMML/patch scripts for Umamusume, external library install notes. |
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

### @Thedoctorjpg portfolio (41 repos)

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
├── sw.js                      # Service worker (offline cache v1.11.0)
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
