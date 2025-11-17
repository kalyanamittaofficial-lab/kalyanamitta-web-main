# 🚀 Vercel Deployment Checklist

## Pre-Deployment

- [ ] All code tested locally with `npm run dev`
- [ ] Environment variables configured in `.env` file
- [ ] Admin login working locally
- [ ] All dependencies installed (`npm install`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] No sensitive data in Git repository
- [ ] `.env` file is in `.gitignore`

## Vercel Configuration

### Step 1: Environment Variables

In Vercel Dashboard → Your Project → Settings → Environment Variables, add:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `JWT_SECRET` | Your 32+ char secret | Production, Preview, Development |
| `ADMIN_USERNAME` | Your admin username | Production, Preview, Development |
| `ADMIN_PASSWORD_HASH` | Your bcrypt hash | Production, Preview, Development |

**How to add:**
1. Click "Add New" button
2. Enter key name (e.g., `JWT_SECRET`)
3. Paste the value
4. Select all environments (Production, Preview, Development)
5. Click "Save"
6. Repeat for all three variables

### Step 2: Build Settings

Default settings should work, but verify:

- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Step 3: Deploy

```powershell
git add .
git commit -m "Add secure admin system"
git push origin main
```

Vercel will automatically deploy.

## Post-Deployment Verification

- [ ] Visit `https://your-domain.vercel.app`
- [ ] Public pages load correctly
- [ ] Visit `https://your-domain.vercel.app/admin/login`
- [ ] Login with admin credentials
- [ ] Test creating/editing/deleting content
- [ ] Verify logout works
- [ ] Check that API endpoints require authentication
- [ ] Test rate limiting (optional)

## Security Verification

### Test 1: Unauthorized Access
Try accessing admin without login:
```
https://your-domain.vercel.app/admin/dashboard
```
**Expected:** Redirects to login page

### Test 2: API Protection
Try calling API without token:
```bash
curl https://your-domain.vercel.app/api/admin/news
```
**Expected:** `{"error": "Unauthorized"}` with 401 status

### Test 3: CSRF Protection
Try API call without CSRF token:
```bash
curl -X POST https://your-domain.vercel.app/api/admin/news \
  -H "Content-Type: application/json" \
  -d '{"title":"Test"}'
```
**Expected:** `{"error": "Invalid CSRF token"}` with 403 status

## Troubleshooting

### Build Fails
- Check Vercel build logs
- Verify all dependencies are in `package.json`
- Test `npm run build` locally

### Environment Variables Not Working
- Ensure variables are added to correct environment
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

### "Cannot read properties of undefined"
- Environment variables not set in Vercel
- Wait a few minutes after adding variables
- Trigger a new deployment

### 500 Internal Server Error
- Check Vercel function logs
- Verify file permissions
- Check for syntax errors in server files

## Monitoring

After deployment, monitor:

- **Function Logs:** Vercel Dashboard → Logs
- **Analytics:** Vercel Dashboard → Analytics
- **Failed Requests:** Look for 401, 403, 500 errors
- **Performance:** Check function execution time

## Rollback Plan

If deployment fails:

1. Go to Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "..." menu → "Promote to Production"
4. Fix issues locally
5. Redeploy

## Security Maintenance

### Weekly
- [ ] Check access logs for suspicious activity

### Monthly
- [ ] Review failed login attempts
- [ ] Update dependencies (`npm update`)
- [ ] Run security audit (`npm audit`)

### Quarterly
- [ ] Rotate JWT_SECRET
- [ ] Update admin password
- [ ] Review and update security policies

## Emergency Contacts

Keep this information secure:

- **Vercel Account Email:** ___________________
- **Admin Username:** ___________________
- **Password Storage:** (Password manager name/location)
- **JWT Secret Backup:** (Secure storage location)

---

## ✅ Deployment Complete!

Once all checkboxes are complete, your secure admin system is live!

**Admin URL:** `https://your-domain.vercel.app/admin/login`

---

**Next:** See [ADMIN_QUICKSTART.md](./ADMIN_QUICKSTART.md) for daily usage guide.
