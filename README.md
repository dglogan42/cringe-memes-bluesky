# Cringe Meme Generator

A browser-based meme generator that pulls live posts from [@adhdloganberry.bsky.social](https://bsky.app/profile/adhdloganberry.bsky.social) on Bluesky and turns them into intentionally cringe image memes — plus a portfolio panel for meme-ing [@dglogan42](https://github.com/dglogan42)'s stupid GitHub projects.

No build step. No dependencies. Just static HTML, CSS, and JavaScript (ES modules).

**Repository:** [github.com/dglogan42/cringe-memes-bluesky](https://github.com/dglogan42/cringe-memes-bluesky)

## Features

- Fetches profile info and recent posts from the Bluesky public API
- 10 meme templates inspired by the feed (bot rants, ADHD brain, podcast drops, and more)
- Adjustable cringe level with sparkles, WordArt, and Comic Sans toggles
- Canvas-rendered meme preview with download and caption copy
- Bluesky compose intent link for sharing
- **Stupid GitHub Projects** — 70+ repos across two accounts ([@dglogan42](https://github.com/dglogan42) + [@Thedoctorjpg](https://github.com/Thedoctorjpg)) as one-click meme fuel (includes **Fable-Offline** + **CourseX** + **CourseX-Agents** + V8-Supercars + more)
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

1. Switch between **@dglogan42** (38 repos, newest first — **Fable-Offline** featured) and **@Thedoctorjpg** (portfolio tab).
2. Filter by category — Sports, Games, Chaos Apps, Commerce, Writing, etc.
3. Click a repo card or **Meme this repo** to load cringe top/bottom text.
4. Use **Meme a Random Repo** in the sidebar for chaos mode.

When a repo is selected:

- The canvas watermark shows the repo name
- Captions include the GitHub URL
- Bluesky share intent links to the project
- PNG downloads are named `cringe-meme-{repo-id}-….png`

## GitHub Portfolio (meme fuel)

| Repo | What it is |
|------|------------|
| [Fable-Offline](https://github.com/dglogan42/Fable-Offline) | Offline Fable 5 agent — Ollama chat, loop engineering, self-improving skills (maker ≠ grader) |
| [CourseX-Agents](https://github.com/dglogan42/CourseX-Agents) | Multi-agent swarm for CourseX — Python agent chaos |
| [CourseX](https://github.com/dglogan42/CourseX) | CourseX platform core — courses & educational pipeline energy |
| [V8-Supercars](https://github.com/dglogan42/V8-Supercars) | iOS + Android PWA — DAZZA bogan Supercars commentary, Clip Studio, Openrestream rebroadcast |
| [Card-Collector](https://github.com/dglogan42/Card-Collector) | iOS + Android TCG con app — scan, grade, trade, Stripe/PayPal/Apple Pay/Google Pay |
| [Mission-Not-Ready](https://github.com/dglogan42/Mission-Not-Ready) | Satire meme lab roasting missionreadyhq.com — empty Nest, no Wi‑Fi, phantom classrooms, multi-format export + social share packs |
| [Witchfire](https://github.com/dglogan42/Witchfire) | Full 3-act Broadway musical + EPUB — Basque witch-hunt of 1609 |
| [ABG-Finder](https://github.com/dglogan42/ABG-Finder) | ABG swipe app with snack flavor ratings & the sauce |
| [Valorant-Streamer](https://github.com/dglogan42/Valorant-Streamer) | Twitch ladder, clip studio, gift subs, Throne |
| [Glasgow-2026](https://github.com/dglogan42/Glasgow-2026) | Morag MacMeme Scots TTS Commonwealth Games |
| [sports-clip-studio](https://github.com/dglogan42/sports-clip-studio) | Shared audio clip trim & social/podcast share |
| [F1-Season](https://github.com/dglogan42/F1-Season) | 2026 F1 dashboard, Monaco timeline, meme modules |
| [le-tour](https://github.com/dglogan42/le-tour) | Tour de France tracker + French meme energy |
| [12th-Man](https://github.com/dglogan42/12th-Man) | Twelfth Man spoof Ashes commentary |
| [All-Blacks-Season](https://github.com/dglogan42/All-Blacks-Season) | Bledisloe Cup + sausage roll reviews |
| [Road-To-Wimbledon](https://github.com/dglogan42/Road-To-Wimbledon) | ATP/WTA road to Wimbledon drama meters |
| [WWE-Wrestlemania](https://github.com/dglogan42/WWE-Wrestlemania) | Road to WrestleMania hype & roast cards |
| [PGA-Masters](https://github.com/dglogan42/PGA-Masters) | PGA Tour leaderboards & Masters Fan Zone |
| [Asian-Supermarket](https://github.com/dglogan42/Asian-Supermarket) | Asian supermarket locator + Hungry Panda |
| [Healthpoint](https://github.com/dglogan42/Healthpoint) | NZ healthcare & community services finder |
| [Instagram-Anime-Effect](https://github.com/dglogan42/Instagram-Anime-Effect) | Cel-shaded anime camera PWA |
| [European-Pantry](https://github.com/dglogan42/European-Pantry) | European food shop for New Zealand |
| [OzBiz-Properties](https://github.com/dglogan42/OzBiz-Properties) | Australian commercial real estate |
| [Rednote-Trader](https://github.com/dglogan42/Rednote-Trader) | Xiaohongshu-style marketplace |
| [Rednote-Streaming](https://github.com/dglogan42/Rednote-Streaming) | RedNote extension — livestream to X & Bluesky |
| [Uncensored-AI](https://github.com/dglogan42/Uncensored-AI) | Local AI studio — SD, LLMs, Whisper, TTS |
| [Creampie-Time-Calculator](https://github.com/dglogan42/Creampie-Time-Calculator) | Ovulation tracker with whipped-cream pastry fertile-window alert |
| [Hogwarts-Sherlock](https://github.com/dglogan42/Hogwarts-Sherlock) | 33k-word EPUB — modern Sherlock science teacher × teenage notebook voice |
| [Openstream](https://github.com/dglogan42/Openstream) | Free open-source multi-site streamer — FFmpeg fan-out to YouTube/Twitch/etc. |
| [Openrestream](https://github.com/dglogan42/Openrestream) | Multi-destination broadcast experiments |
| [Beastwars-TCG](https://github.com/dglogan42/Beastwars-TCG) | Beast Wars Transformers TCG PWA — expansions, deck builder, battle AI |
| [Christmas-Countdown](https://github.com/dglogan42/Christmas-Countdown) | Buddy / Grinch / Jack · cozy -ber months · Feliz Navidad PWA |
| [Azogue-Netflix](https://github.com/dglogan42/Azogue-Netflix) | Netflix-adjacent viewing chaos |
| [Slam-Poet](https://github.com/dglogan42/Slam-Poet) | Slam poetry / spoken-word tooling |
| [THE-FALLEN-SEED](https://github.com/dglogan42/THE-FALLEN-SEED) | Dark-seed creative project |
| [ADHD-Ardour](https://github.com/dglogan42/ADHD-Ardour) | Ardour DAW + ADHD workflow chaos |
| [observability-monitoring-toolkit](https://github.com/dglogan42/observability-monitoring-toolkit) | Observability / monitoring toolkit |
| [cringe-memes-bluesky](https://github.com/dglogan42/cringe-memes-bluesky) | This repo (recursive cringe) |
| [Claude-Skills](https://github.com/dglogan42/Claude-Skills) | Custom Claude Code skills — found-footage screenplay method, tabloid gossip voice, promo shoot briefs |
| [UNLISTED](https://github.com/dglogan42/UNLISTED) | Found-footage horror screenplay — SD card, no return address, one very bad ARG |
| [production-notes](https://github.com/dglogan42/production-notes) | Yoga wind-down routine that turned into a shoot brief, call sheet, choreography count, and location scout guide |

### @Thedoctorjpg portfolio (35 repos)

Playdate games, open-source novels, red-flag scanners, snack finders, and other chaos — including [The-Keeper-s-Test](https://github.com/Thedoctorjpg/The-Keeper-s-Test), [warriors-meme-generator](https://github.com/Thedoctorjpg/warriors-meme-generator), [Constellation-Drug-Quiz](https://github.com/Thedoctorjpg/Constellation-Drug-Quiz), and more. Switch to the **@Thedoctorjpg** tab in the app.

Edit `projects.js` (dglogan42) or `projects-thedoctorjpg.js` (Thedoctorjpg) to add or update repos.

## Project Structure

```
cringe-meme-generator/
├── index.html   # App shell + GitHub projects panel
├── style.css    # Cringe UI styles
├── app.js       # Bluesky API + canvas meme engine
├── projects.js              # @dglogan42 GitHub portfolio data
├── projects-thedoctorjpg.js # @Thedoctorjpg GitHub portfolio data
├── package.json # Convenience scripts
├── LICENSE      # MIT
└── README.md
```

## API

Uses the Bluesky public API (no authentication required):

- `app.bsky.actor.getProfile`
- `app.bsky.feed.getAuthorFeed`

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Serve on port 3456 |
| `npm run dev` | Same as `npm start` |
| `python3 -m http.server 3456` | Manual static server |

## Disclaimer

Not affiliated with Bluesky or GitHub. Maximum cringe intended.

## License

MIT — see [LICENSE](LICENSE).

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

