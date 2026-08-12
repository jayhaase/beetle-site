# Beetle the Fairy — Website

A whimsical, storybook-style single-page site for "Beetle the Fairy," a Renaissance-festival
children's character (Minnesota Renaissance Festival). Static HTML/CSS/JS, no build step,
deployable directly to GitHub Pages.

## Structure

```
/index.html     Main page: hero, Her Story, The Magic Seed, Fairy Blessing,
                Gallery, Find Beetle + Booking, Social, footer
/origin.html    "Full origin tale" page (placeholder lore — see below)
/style.css      All styles, design tokens, and animations
/script.js      Butterfly click-to-fly-away interaction, gallery lightbox,
                and reading config.js to populate the booking email and
                social links
/config.js      Site-wide settings — edit here, no other files needed
/assets/        Photos
```

## Gallery lightbox

Clicking a gallery photo opens a full-screen lightbox (prev/next, close button,
click-outside-to-close, Escape to close, arrow keys to navigate). It's
hand-written vanilla JS/CSS in `script.js`/`style.css` — no third-party
library or dependency manager involved, so there was nothing to apply a
minimum-release-age policy to. If a future feature genuinely needs a library,
introduce a `package.json` at that point and set the registry client's
minimum release age (e.g. npm's `minimumReleaseAge` config, or an
equivalent Renovate/Dependabot setting) to at least 3 days before adding it.

## Editing site settings

Booking email and social handles/links live in one place: [`config.js`](config.js).
Edit the values there and both `index.html` and any other page that includes the
script will pick them up automatically.

Each social card also has an `imagePosition` setting (same syntax as CSS
`object-position`, e.g. `"50% 15%"`) to adjust the focal point of its cropped
photo — useful when a face gets cut off by the fixed 150px card height.
`"50%"` first value = horizontal center, second value = how far down the
crop window sits (lower % keeps more of the top of the photo in frame).

## Still placeholder — needs real content before launch

- **`config.js`** — `bookingEmail` and the Instagram/TikTok/Facebook URLs are
  placeholders (`booking@example.com`, `#`).
- **`origin.html`** — the "full origin tale" text is placeholder lore written to
  match the tone of the homepage copy. Swap in the client's real long-form
  origin story.
- **Instagram/TikTok handle spelling** — the design handoff doc flagged
  `@beetlethefaiy` (Instagram/TikTok) vs `@beetlethefairy` (Facebook) as a
  possible typo. Confirm the correct spelling with the client before launch.

## Responsive behavior

The original design reference was desktop-only. Standard responsive breakpoints
were added at ~768px (stacked columns, smaller hero/type, 2-col gallery) as a
placeholder — flag for design review if a mobile-specific pass is wanted.

## Deploying to GitHub Pages

1. `git init`, commit, and push to a GitHub repo.
2. Repo Settings → Pages → deploy from `main` branch, `/ (root)`.
3. No build step required.
