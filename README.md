# MoveM Radio (Static AngularJS SPA)

A lightweight single‑page application for MoveM Radio using AngularJS 1.8 and `ngRoute`. This starter includes a responsive navigation bar with dropdown, dedicated sections (Home, About Us, Elite Artists, MoveM Radio), sample data, and placeholders for integrating a live audio stream.

## Tech Stack
- HTML5 / CSS3 (responsive, accessible)
- AngularJS 1.8.3 (CDN) + ngRoute
- No build pipeline required (pure static assets)

## Project Structure
```
index.html              # Main shell with nav + ng-view
css/styles.css          # Styles
js/app.js               # Module + routing + runtime updates
default favicon (placeholder)
js/controllers.js       # Controllers & sample data
partials/*.html         # Template views
img/                    # (Add your images / favicon)
```

## Running Locally
Simply open `index.html` in a modern browser.

For cleaner local dev with a static server (recommended for future streaming integrations):

### PowerShell (Windows)
```powershell
# Python 3
python -m http.server 8080
# or Node (if installed)
npx serve . -l 8080
# or simple http server
yarn global add http-server # (optional install)
http-server -p 8080
```
Then browse: http://localhost:8080

## Adding a Live Stream
Replace the placeholder in `partials/radio.html` with an embed from your provider (Icecast/Shoutcast / Live365 / Mixcloud Live). Example iframe snippet (replace `SRC_URL`):
```html
<iframe src="SRC_URL" width="100%" height="120" frameborder="0" allow="autoplay" title="MoveM Radio Stream"></iframe>
```
If CORS or autoplay issues occur, consider a custom HTML5 `<audio>` element fed by a stream URL.

## Custom Domain via GoDaddy
1. Choose a hosting method:
   - GitHub Pages
   - Netlify / Vercel (drag & drop) 
   - GoDaddy hosting (upload via cPanel / File Manager / SFTP)
2. Point DNS from GoDaddy to host:
   - For GitHub Pages: Create `A` records pointing to GitHub IPs (check current docs) + a `CNAME` record `www` -> `username.github.io`.
   - Or if using Netlify: Add a `CNAME` for `www` to your Netlify site target + set Netlify-managed DNS.
3. Add a `CNAME` file (for GitHub Pages) with your domain (e.g., `movemradio.com`).
4. Enforce HTTPS in hosting dashboard.

## Accessibility & Performance Notes
- Uses semantic regions (`header`, `main`, `footer`, aria labels, focusable cards)
- Mobile nav uses toggle button with `aria-expanded`
- Minimal JS footprint; no blocking render beyond Angular core

## Future Enhancements (Ideas)
- Artist detail route (`/artist/:slug`)
- Backend API or headless CMS (Strapi / Directus / Supabase)
- Authentication for artist submissions
- Live schedule + programmatic now-playing metadata
- Progressive Web App (manifest + service worker)

## License
MIT (Adjust as needed). Replace placeholder assets before production.

---

## Installing Python (Windows)
Choose ONE of the methods below:

### 1. Winget (recommended)
```powershell
winget install -e --id Python.Python.3
```
Close and reopen PowerShell, then verify:
```powershell
python --version
```

### 2. Microsoft Store
Search "Python" in the Microsoft Store, install the latest stable 3.x. Verify as above.

### 3. Official Installer
Download from: https://www.python.org/downloads/
During setup: CHECK "Add python.exe to PATH".

If `python` fails but `py` works, you can use:
```powershell
py -m http.server 8080
```

## Installing Node.js (Windows)

### 1. Winget
```powershell
winget install -e --id OpenJS.NodeJS.LTS
```
Verify:
```powershell
node -v
npm -v
```

### 2. Official Installer
Download LTS from: https://nodejs.org/ (includes `npm`).

### 3. Chocolatey (alternative if you already have choco)
```powershell
choco install nodejs-lts -y
```

## Dev Helper Script
A convenience script `scripts/dev-server.ps1` will attempt (in order):
1. `python -m http.server`
2. `py -m http.server`
3. `npx serve` (Node)
4. `npx http-server`

### Run It
```powershell
powershell -ExecutionPolicy Bypass -File scripts/dev-server.ps1 -Port 8080
```
Then open: http://localhost:8080

If no tools are installed, it prints installation guidance.

## Troubleshooting
| Issue | Fix |
|-------|-----|
| `python` not found | Install via winget or use `py` launcher |
| `node` not recognized | Reopen terminal after install (PATH refresh) |
| Port already in use | Pick new port: `-Port 9090` |
| Browser caching old files | Hard refresh (Ctrl+F5) |
| Hash routes not updating title | Ensure `js/app.js` loaded (check console) |

## Next Steps Ideas
- Add real stream `<audio>` element & metadata polling
- Add service worker for offline shell
- Deploy to GitHub Pages with `CNAME` for `movemradio.com`
- Convert to TypeScript / modern framework later

