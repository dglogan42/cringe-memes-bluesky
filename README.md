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
- **Stupid GitHub Projects** — 20 repos from [@dglogan42](https://github.com/dglogan42) as one-click meme fuel

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

1. Filter by **All Chaos**, **Sports**, **Chaos Apps**, or **Commerce**.
2. Click a repo card or **Meme this repo** to load cringe top/bottom text.
3. Use **Meme a Random Repo** in the sidebar for chaos mode.

When a repo is selected:

- The canvas watermark shows the repo name
- Captions include the GitHub URL
- Bluesky share intent links to the project
- PNG downloads are named `cringe-meme-{repo-id}-….png`

## GitHub Portfolio (meme fuel)

| Repo | What it is |
|------|------------|
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
| [cringe-memes-bluesky](https://github.com/dglogan42/cringe-memes-bluesky) | This repo (recursive cringe) |

Edit `projects.js` to add or update repos.

## Project Structure

```
cringe-meme-generator/
├── index.html   # App shell + GitHub projects panel
├── style.css    # Cringe UI styles
├── app.js       # Bluesky API + canvas meme engine
├── projects.js  # @dglogan42 GitHub portfolio data
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