# CLAUDE.md

## Project
AGROalert – AI-powered crop monitoring & advice tool for farmers (Nigeria focus).  
Right now it's a static frontend (HTML + Bootstrap 5 + vanilla JS). Python/FastAPI + SQL backend is coming next and will live in its own `/backend` folder.

## Key Conventions
- All static assets must leave in `/assets/` (images, icons, etc.). Never use the old “assest” folder.
- Frontend changes stay in the root HTML/CSS/JS files for now. No frameworks.
- When backend arrives: FastAPI routes go in `/backend/app/`, keep it separate from frontend.
- Use `.env` for any keys/secrets (never commit them, ensure there are no hardcoded secrects).

## Do Not
- Rename or reorganize folders without updating every single reference in HTML/CSS/JS.
- Put business logic or AI calls directly in frontend JavaScript.
- Use `console.log` in production code — we’ll add a proper logger later.
- Add any new dependencies without discussing first (especially on the Python side).
- Commit large image files without compressing them first.

## Workflow
- After any frontend change, open `index.html` in a browser and test the affected page.
- When backend is added: run it with `uvicorn` or `fastapi dev` and test API calls from frontend.
- Always update the README live-demo link after deploying to Netlify/Vercel.
- Branch naming: `feature/xxx`, `fix/yyy`, `docs/zzz`.

## Tests (when we add them)
- Frontend: manual browser testing for now.
- Backend: pytest + FastAPI test client (will live in `/backend/tests/`).

## Gotchas
- Bootstrap icons are loaded via CDN — internet is required for the demo to look right.
- The “web pages” folder is legacy; new pages should go straight in root until we clean it up.
- SQLite will be used first, then we’ll switch to PostgreSQL — keep SQL queries simple.

Keep this file short. If I keep ignoring a rule, the rule probably needs to be clearer or shorter.
