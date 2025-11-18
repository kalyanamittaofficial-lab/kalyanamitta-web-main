# Troubleshooting: Admin Can't See Statistics

## Issue
Admin user cannot see dashboard statistics after adding `viewStatistics` permission.

## Root Cause
Your **session was created before** the `viewStatistics` permission was added to the database. The session still has the old permission structure without `viewStatistics`.

## Solution

### **STEP 1: Log Out and Log Back In** ⚠️

1. Go to the admin dashboard
2. Click the **"Logout"** button in the top-right
3. Log back in with your admin credentials
4. Navigate to the dashboard

**This will create a new session with the updated permissions.**

---

## Quick Verification

### Check Your Session (Browser Console)
Open browser console (F12) and check the dashboard logs:
```
Dashboard User: admin Role: admin viewStatistics: true canViewStatistics: true
```

If you see `viewStatistics: undefined` or `false`, you need to log out and log back in.

---

## Why This Happens

When you log in, the system:
1. Reads your user data from `users.json`
2. Creates a session token (JWT)
3. **Embeds your permissions in the token**

When we added `viewStatistics` to `users.json`, your **existing session token** still has the old permissions without `viewStatistics`.

**Logging out and back in creates a new token with updated permissions.**

---

## Backup Solution: Clear Session Manually

If logout doesn't work, clear cookies manually:

### Chrome/Edge
1. F12 → Application tab
2. Cookies → Select your site
3. Find and delete `auth_token` cookie
4. Refresh page
5. Log back in

### Firefox
1. F12 → Storage tab
2. Cookies → Select your site  
3. Find and delete `auth_token` cookie
4. Refresh page
5. Log back in

---

## Updated Code Logic

The dashboard now checks:
```typescript
const canViewStatistics = user?.role === 'admin' || user?.permissions?.viewStatistics === true;
```

This means:
- ✅ All admins can see statistics (role-based)
- ✅ Users with explicit `viewStatistics: true` can see statistics
- ❌ Moderators without the permission cannot see statistics

---

## Verify Your User Data

Your admin user in `users.json` should have:
```json
{
  "id": "admin",
  "username": "admin",
  "role": "admin",
  "permissions": {
    "manageUsers": true,
    "approveChanges": true,
    "viewStatistics": true,  ← This should be present and true
    "news": { ... }
  }
}
```

✅ **Your data is correct!** You just need to refresh the session.

---

## Test After Login

1. Login as admin
2. Go to dashboard
3. You should see:
   - ✅ 4 stat cards (News, Events, Posts, Library)
   - ✅ Bar chart
   - ✅ Doughnut chart
   - ❌ NO welcome message

4. Check browser console for:
   ```
   Dashboard User: admin Role: admin viewStatistics: true canViewStatistics: true
   ```

---

## If Still Not Working

### Check Session Endpoint
```bash
# In browser console on admin page
fetch('/api/auth/session', {
  credentials: 'include'
}).then(r => r.json()).then(console.log)
```

Should return:
```json
{
  "user": {
    "username": "admin",
    "role": "admin",
    "permissions": {
      "viewStatistics": true,
      ...
    }
  }
}
```

If `viewStatistics` is missing, the session needs to be recreated by logging out and back in.

---

## Summary

🔴 **Problem**: Old session without new permission  
🟢 **Solution**: **Log out and log back in**  
⏱️ **Time**: 10 seconds  

**This is normal and expected when adding new permissions to existing users!**
