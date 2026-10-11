# Melon Dev — Vercel API Raw

## Deploy
1. Upload the files to a Git repository.
2. Import the repository at https://vercel.com/new.
3. Deploy using default settings.

## Routes
- `/` — Melon Dev landing page.
- `/api/raw` — returns the script loader as plain text.
- `/raw` — redirects to `/`.
- `/dump` — redirects to `/`.

After deployment, the Roblox loader URL is:
`https://YOUR-PROJECT.vercel.app/api/raw`

The `/api/raw` endpoint is a public URL. Hiding the link on the homepage or redirecting `/raw` does not make the API private. Anyone who knows or discovers `/api/raw` can request its response. Review the remote Pastefy script before running it.
