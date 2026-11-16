# HIRENEST — Enterprise Job & Recruitment Portal

A modular, frontend-only React + TypeScript project following the supplied enterprise folder architecture.

## Run locally
1. Install Node.js 18 or newer.
2. Extract this ZIP and open the `HIRENEST` folder in VS Code.
3. Open the VS Code terminal in the project root.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the localhost URL shown in the terminal (usually http://localhost:5173).

## Production build
Run `npm run build`, then `npm run preview`.

## Demo workspaces
Open `/login` and choose Candidate, Employer, or Admin. The project uses sample data and browser LocalStorage. No backend or database is connected.

## Images
Decorative images are loaded from remote Unsplash URLs. You do not need to manually attach image files; internet access is needed for remote images and Google Fonts.

## Production note
This is a frontend prototype, not a production recruitment platform. Real authentication, database, server-side role permissions, email delivery, file storage, and security controls require a backend.
