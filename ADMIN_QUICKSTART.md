# 🔐 Quick Start Guide - Admin System

## First-Time Setup (5 minutes)

### 1️⃣ Generate Your Password Hash

```powershell
npm run hash-password YourSecurePassword123!
```

Copy the output hash that looks like: `$2a$12$...`

### 2️⃣ Generate JWT Secret

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output (64 character hex string)

### 3️⃣ Create `.env` File

Create a new file named `.env` in the root directory:

```env
JWT_SECRET=paste_your_jwt_secret_here
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=paste_your_password_hash_here
```

### 4️⃣ Test Locally

```powershell
npm run dev
```

Visit: `http://localhost:4321/admin/login`

Login with:
- Username: `admin`
- Password: (the password you used in step 1)

### 5️⃣ Deploy to Vercel

1. **Add Environment Variables in Vercel:**
   - Go to your project in Vercel Dashboard
   - Settings → Environment Variables
   - Add all three variables from your `.env` file
   - Apply to: Production, Preview, and Development

2. **Deploy:**
   ```powershell
   git add .
   git commit -m "Add secure admin system"
   git push
   ```

3. **Access Your Admin:**
   - Visit: `https://your-domain.vercel.app/admin/login`
   - Login with your credentials

---

## 🎯 Admin Features

### Dashboard
`/admin/dashboard` - Overview and statistics

### Content Management
- `/admin/news` - Manage news articles
- `/admin/events` - Manage events
- `/admin/posts` - Manage blog posts
- `/admin/library` - Manage library resources

### Actions Available
- ✅ Create new content
- ✏️ Edit existing content
- 🗑️ Delete content
- 📊 View statistics

---

## 🛡️ Security Features

- ✅ JWT authentication with 8-hour sessions
- ✅ HTTP-only secure cookies
- ✅ CSRF protection
- ✅ Rate limiting (50 req/min for APIs)
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ Bcrypt password hashing
- ✅ Automatic route protection

---

## 🔑 Important Security Notes

### ⚠️ Never commit `.env` to Git
The `.env` file contains secrets and is ignored by `.gitignore`

### 🔒 Use Strong Passwords
- Minimum 12 characters
- Mix of letters, numbers, and symbols
- Example: `Kalyanamitta@2025!Secure`

### 🔄 Rotate Secrets Regularly
Update your JWT_SECRET every 3-6 months in Vercel settings

---

## 📝 Common Tasks

### Change Admin Password

```powershell
# Generate new hash
npm run hash-password NewPassword123!

# Update ADMIN_PASSWORD_HASH in Vercel
# Redeploy or wait for automatic deployment
```

### Add Another Admin User (Future)

Currently supports one admin. To add multiple admins, you'll need to:
1. Add a database (e.g., Vercel Postgres)
2. Modify authentication logic in `src/lib/auth.ts`

### Check Access Logs

View logs in Vercel Dashboard → Your Project → Logs

---

## 🆘 Troubleshooting

### Can't Login?
1. Check environment variables are set in Vercel
2. Verify password hash is correct
3. Clear browser cookies and try again

### "Unauthorized" Error?
- Ensure you're logged in
- Check if session expired (8 hours)
- Re-login to get fresh token

### Rate Limited?
- Wait 60 seconds
- Check if you have multiple tabs making requests

---

## 📚 Full Documentation

For detailed security architecture and advanced usage, see: **[ADMIN_SECURITY.md](./ADMIN_SECURITY.md)**

---

**🎉 You're all set! Start managing your content securely.**
