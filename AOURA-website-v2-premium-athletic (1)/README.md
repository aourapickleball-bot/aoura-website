# AOURA Website

Production-ready static website for www.aoura.com.au.

## Upload to GitHub
Upload the *contents* of this folder to the root of the GitHub Pages repository.

Important files:
- `index.html`
- `CNAME`
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`
- `assets/`
- page folders (`sessions/`, `brisbane-pickleball/`, etc.)

## After deployment
1. Enable GitHub Pages from the `main` branch / root.
2. Confirm custom domain: `www.aoura.com.au`.
3. Configure DNS at the domain provider.
4. Enable HTTPS in GitHub Pages when available.
5. Add the site to Google Search Console.
6. Submit `https://www.aoura.com.au/sitemap.xml`.
7. Add Google Analytics only if desired.

## Live integrations
- Mailchimp email subscription endpoint is wired in.
- OpenSports booking buttons point to the AOURA club page.
- Instagram links point to @aouraofficial.

## Content model
The website deliberately treats OpenSports as the source of truth for current session availability,
so the static site does not become stale every time a session changes.
