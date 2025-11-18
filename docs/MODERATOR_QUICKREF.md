# Quick Reference: Moderator System

## New Pages
- **User Management**: `/admin/users` - Add, edit, and manage moderators
- **Pending Changes**: `/admin/pending-changes` - Review and approve submissions

## Default Admin Credentials
- Username: `admin`
- Password: (uses existing ADMIN_PASSWORD_HASH from .env)
- Full permissions enabled

## Adding a New Moderator

1. **Navigate**: Dashboard → User Management → "Add New User"
2. **Fill Form**:
   - Username: `john_moderator`
   - Password: `securepassword123`
   - Role: `Moderator`
   - Select permissions per content type
   - Check "Can approve changes" if needed
3. **Save**: User can now log in

## Permission Types

### Content Permissions (per type: news/events/posts/library)
- ✓ **Create** - Can create new content
- ✓ **Edit** - Can modify existing content
- ✓ **Delete** - Can remove content
- ✓ **Publish** - Content goes live immediately (no approval needed)

### System Permissions
- ✓ **Manage Users** - Can add/edit/suspend users (Admin only)
- ✓ **Approve Changes** - Can review pending submissions

## Workflow Examples

### Moderator WITHOUT Publish Permission
1. Creates news article
2. Submission goes to "Pending Changes"
3. Admin receives notification
4. Admin reviews and approves
5. Article appears on website

### Moderator WITH Publish Permission
1. Creates news article
2. Article appears on website immediately
3. No approval needed

## API Response Codes
- `200` - Success
- `401` - Unauthorized (not logged in)
- `403` - Forbidden (no permission)
- `404` - Not found

## Data Files
- `src/data/users.json` - User accounts
- `src/data/pending-changes.json` - Submission queue

## Security Features
- ✓ Bcrypt password hashing
- ✓ JWT session tokens
- ✓ CSRF protection
- ✓ Role-based access control
- ✓ Rate limiting

## Troubleshooting Quick Fixes

### "Permission Denied"
→ Check user permissions in User Management
→ Ensure user is "active" not "suspended"

### "Submission Not Appearing"
→ If user has "publish" permission, content goes live directly
→ Check Pending Changes for queue

### "Can't Add User"
→ Ensure username is unique
→ Verify you're logged in as admin
→ Check console for errors

## Testing the System

1. **Create Test Moderator**:
   ```
   Username: test_mod
   Password: TestPass123!
   Role: Moderator
   Permissions: News (create only)
   ```

2. **Log In as Moderator**:
   - Create a news article
   - Should see "Submitted for approval"

3. **Log Back as Admin**:
   - Go to Pending Changes
   - See the submission
   - Approve it
   - Check website for live article

## Quick Commands

### Hash a Password (for manual user.json edits)
```bash
node scripts/hash-password.js YourPasswordHere
```

### View Current Users (in DevTools console)
```javascript
fetch('/api/admin/users').then(r => r.json()).then(console.log)
```

## Key Differences from Before

| Before | After |
|--------|-------|
| Single admin user | Multiple users (admin + moderators) |
| All changes live immediately | Moderators can have approval workflow |
| No permission management | Granular per-content-type permissions |
| No audit trail | Track who submitted what and when |
| Fixed environment credentials | Database-backed user management |

---

**Need Help?** Check `MODERATOR_SYSTEM_GUIDE.md` for detailed documentation.
