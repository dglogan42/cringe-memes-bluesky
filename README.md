# Cringe Meme Generator

A browser-based meme generator that pulls live posts from [@adhdloganberry.bsky.social](https://bsky.app/profile/adhdloganberry.bsky.social) on Bluesky and turns them into intentionally cringe image memes.

No build step. No dependencies. Just static HTML, CSS, and JavaScript.

## Features

- Fetches profile info and recent posts from the Bluesky public API
- 10 meme templates inspired by the feed (bot rants, ADHD brain, podcast drops, and more)
- Adjustable cringe level with sparkles, WordArt, and Comic Sans toggles
- Canvas-rendered meme preview with download and caption copy
- Bluesky compose intent link for sharing

## Quick Start

```bash
cd cringe-meme-generator
python3 -m http.server 3456
```

Open [http://localhost:3456](http://localhost:3456) in your browser.

## Usage

1. Pick a meme template or click **Randomize Cringe**.
2. Edit the top and bottom text, or click **Pull From Feed** to use a real post.
3. Tune the cringe level and visual options.
4. **Download Meme** as a PNG or **Copy Caption** for posting.

Click any post in the "Recent Posts" sidebar to turn it into meme text instantly.

## Project Structure

```
cringe-meme-generator/
├── index.html   # App shell
├── style.css    # Cringe UI styles
├── app.js       # Bluesky API + canvas meme engine
├── package.json # Convenience scripts
├── LICENSE      # MIT
└── README.md
```

## API

Uses the Bluesky public API (no authentication required):

- `app.bsky.actor.getProfile`
- `app.bsky.feed.getAuthorFeed`

## Disclaimer

Not affiliated with Bluesky. Maximum cringe intended.

## License

MIT — see [LICENSE](LICENSE).