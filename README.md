# Seinote Early Access Landing

Static landing page for the Seinote Early Access campaign.

## Production Target

- Domain: `marketing.seinote.ca`
- Hosting: Vercel
- Public entry: `index.html`

## Deploy Flow

1. Edit and test locally.
2. Commit changes to GitHub.
3. Review the Vercel preview deployment.
4. Promote/deploy to production only after approval.

## Google Ads Tracking

- Google tag ID: `AW-18244315052`
- Landing diagnostic events:
  - `landing_page_view`
  - `apply_click`
- Attribution parameters preserved on signup links:
  - `gclid`
  - `gbraid`
  - `wbraid`
  - UTM parameters
- Primary conversion is intentionally pending until the Google Ads Conversion Label is provided and the real account-created backend confirmation point is instrumented in the Seinote signup application.

## Files

- `index.html`
- `seinote-early-access.css`
- `seinote-early-access.js`
- `assets/`
