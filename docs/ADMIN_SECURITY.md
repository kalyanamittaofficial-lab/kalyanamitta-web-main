# 🔐 Admin Security Architecture Documentation

## Overview

Your Kalyanamitta website now has a **production-grade secure admin system** with the following features:

### ✅ Security Features Implemented

1. **JWT-Based Authentication**
   - Secure token-based sessions with 8-hour expiry
   - HTTP-only cookies prevent XSS attacks
   - Secure flag ensures HTTPS-only transmission

2. **CSRF Protection**
   - Cross-Site Request Forgery tokens for all state-changing operations
   - Prevents unauthorized API calls from external sources

3. **Rate Limiting**
   - 50 requests per minute for API endpoints
   - 100 requests per minute for general routes
   - Prevents brute force attacks

4. **Security Headers**
   - X-Frame-Options: Prevents clickjacking
   - X-Content-Type-Options: Prevents MIME sniffing
   - Content-Security-Policy: Controls resource loading
   - Strict-Origin-When-Cross-Origin referrer policy

5. **Password Security**
   - Bcrypt hashing with cost factor 12
   - Salted hashes stored securely

6. **Route Protection**
   - Middleware automatically protects `/admin/*` and `/api/admin/*` routes
   - Unauthorized requests receive 401 status
   - Invalid tokens redirect to login

---

## 📁 File Structure

```
src/
├── lib/
│   └── auth.ts                    # Authentication utilities
├── middleware.ts                  # Global security middleware
├── pages/
│   ├── admin/
│   │   ├── login.astro           # Admin login page
│   │   ├── dashboard.astro       # Admin dashboard
│   │   ├── news.astro            # News management
│   │   ├── events.astro          # Events management (to be created)
│   │   ├── posts.astro           # Posts management (to be created)
│   │   └── library.astro         # Library management (to be created)
│   └── api/
│       ├── auth/
│       │   ├── login.ts          # Login endpoint
│       │   ├── logout.ts         # Logout endpoint
│       │   └── session.ts        # Session verification
│       └── admin/
│           ├── news.ts           # News CRUD API
│           ├── events.ts         # Events CRUD API
│           ├── posts.ts          # Posts CRUD API
│           └── library.ts        # Library CRUD API
scripts/
└── hash-password.js               # Password hash generator
```

---

## 🚀 Setup Instructions

### Step 1: Generate Admin Password

```powershell
# Generate a secure password hash
npm run hash-password YourSecurePassword123!

# Copy the output hash
```

### Step 2: Configure Environment Variables

Create a `.env` file in the root directory:

```env
# JWT Secret (generate random 32+ character string)
JWT_SECRET=your-random-secret-key-min-32-characters-long

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2a$12$your_bcrypt_hash_from_step_1
```

**Generate JWT Secret:**
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 3: Update Vercel Environment Variables

In your Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:
   - `JWT_SECRET` → Your generated JWT secret
   - `ADMIN_USERNAME` → Your admin username
   - `ADMIN_PASSWORD_HASH` → Your generated password hash

### Step 4: Deploy

```powershell
npm run build
git add .
git commit -m "Add secure admin system"
git push origin main
```

---

## 🔑 API Endpoints

### Authentication

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/auth/login` | POST | Admin login | No |
| `/api/auth/logout` | POST | Admin logout | Yes |
| `/api/auth/session` | GET | Check session | No |

### Admin APIs (All require authentication + CSRF token)

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `/api/admin/news` | GET, POST, PUT, DELETE | Manage news |
| `/api/admin/events` | GET, POST, PUT, DELETE | Manage events |
| `/api/admin/posts` | GET, POST, PUT, DELETE | Manage posts |
| `/api/admin/library` | GET, POST, PUT, DELETE | Manage library |

---

## 🛡️ Security Best Practices

### 1. **Strong Passwords**
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- Never use common passwords

### 2. **JWT Secret Rotation**
- Rotate JWT_SECRET every 3-6 months
- Update in Vercel environment variables
- All active sessions will be invalidated

### 3. **Monitor Access**
- Check Vercel logs for suspicious activity
- Watch for repeated failed login attempts
- Monitor API usage patterns

### 4. **HTTPS Only**
- Always access admin via HTTPS
- Cookies are set with `secure` flag
- Never disable HTTPS in production

### 5. **Regular Updates**
```powershell
# Keep dependencies updated
npm update
npm audit fix
```

---

## 🔒 How Authentication Works

### Login Flow

1. User submits credentials to `/api/auth/login`
2. Server verifies against environment variables
3. If valid, generates JWT with CSRF token
4. Sets HTTP-only cookie with token
5. Returns CSRF token to client
6. Client stores CSRF token in sessionStorage

### API Request Flow

1. Browser automatically sends auth cookie
2. Middleware extracts and verifies JWT
3. Checks CSRF token for POST/PUT/DELETE
4. Attaches user info to request context
5. API endpoint accesses user via `Astro.locals.user`

### Logout Flow

1. Client calls `/api/auth/logout`
2. Server deletes auth cookie
3. Client redirects to login page

---

## 🚫 What's Protected

### Automatically Protected Routes:
- `/admin/*` - All admin pages
- `/api/admin/*` - All admin API endpoints

### Public Routes:
- `/` - Homepage
- `/news` - News listing
- `/events` - Events listing
- `/writings` - Posts listing
- `/connect` - Contact page
- `/finder` - Finder tool

---

## 📊 Rate Limiting

| Route Type | Limit | Window |
|------------|-------|--------|
| API Routes | 50 requests | 60 seconds |
| Web Routes | 100 requests | 60 seconds |

Exceeded limits return **429 Too Many Requests**

---

## 🐛 Troubleshooting

### "Unauthorized" on Admin Access
- Check if `.env` file exists
- Verify environment variables are set in Vercel
- Ensure JWT_SECRET is at least 32 characters
- Check password hash is correct

### "Invalid CSRF Token"
- Clear browser cookies and sessionStorage
- Re-login to get fresh CSRF token
- Ensure CSRF token is sent in `X-CSRF-Token` header

### Rate Limit Errors
- Wait 60 seconds before retrying
- Check for infinite loops in client code
- Consider implementing client-side rate limiting

### Session Expires Too Quickly
- Default: 8 hours
- Modify in `src/lib/auth.ts` → `SESSION_DURATION`

---

## 📝 Making API Calls from Admin Pages

```javascript
// Example: Create news item
const csrfToken = sessionStorage.getItem('csrfToken');

const response = await fetch('/api/admin/news', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken
  },
  body: JSON.stringify({
    title: 'New Article',
    description: 'Article content',
    date: '2025-11-18',
    image: '/images/article.jpg'
  })
});

const data = await response.json();
```

---

## 🔄 Adding New Admin Features

### 1. Create API Endpoint

```typescript
// src/pages/api/admin/new-feature.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  // User is automatically authenticated via middleware
  const user = locals.user;
  
  // Your logic here
  return new Response(JSON.stringify({ data: 'value' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### 2. Create Admin Page

```astro
---
// src/pages/admin/new-feature.astro
import Layout from '../../layouts/Layout.astro';

const user = Astro.locals.user; // Authenticated user
const csrfToken = Astro.locals.csrfToken;
---

<Layout title="New Feature - Admin">
  <!-- Your admin UI here -->
</Layout>
```

---

## ✅ Security Checklist

- [ ] `.env` file is in `.gitignore`
- [ ] Strong JWT_SECRET (32+ characters)
- [ ] Strong admin password (12+ characters)
- [ ] Environment variables set in Vercel
- [ ] HTTPS enabled on production
- [ ] Regular dependency updates scheduled
- [ ] Access logs monitored
- [ ] Backup admin credentials stored securely

---

## 🆘 Emergency Access Recovery

If you lose admin credentials:

1. Generate new password hash locally
2. Update `ADMIN_PASSWORD_HASH` in Vercel
3. Redeploy or wait for automatic deployment
4. Use new credentials to login

---

## 📞 Support

For security concerns or issues, check:
- Vercel deployment logs
- Browser console for errors
- Network tab for API responses

---

**✨ Your admin system is now production-ready and secure!**
