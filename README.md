# Kalyanamitta Website

A modern, secure Buddhist community website built with Astro and Tailwind CSS.

## 🔐 Secure Admin System

This website includes a **production-grade secure admin dashboard** for content management.

### Quick Setup (5 minutes)

1. **Generate password hash:**
   ```sh
   npm run hash-password YourSecurePassword
   ```

2. **Create `.env` file:**
   ```env
   JWT_SECRET=your-32-char-secret-here
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD_HASH=hash-from-step-1
   ```

3. **Start development:**
   ```sh
   npm run dev
   ```

4. **Access admin:** `http://localhost:4321/admin/login`

📚 **Full Documentation:**
- [Quick Start Guide](./ADMIN_QUICKSTART.md)
- [Security Architecture](./ADMIN_SECURITY.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)

## ✨ Features

- 🔒 JWT-based authentication
- 🛡️ CSRF protection
- ⚡ Rate limiting
- 🔐 HTTP-only secure cookies
- 📊 Admin dashboard
- ✏️ Content management (News, Events, Posts, Library)
- 🎨 Modern UI with Tailwind CSS
- 🚀 Deployed on Vercel with SSR

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
