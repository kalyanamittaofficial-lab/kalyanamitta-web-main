# Improved User Management & Permission System

## Overview
Enhanced user management system with comprehensive CRUD operations, advanced permissions, activity logging, and improved security controls.

---

## Key Improvements

### 1. **Statistics Access Control**
- ✅ New `viewStatistics` permission
- ✅ Dashboard statistics hidden from moderators
- ✅ Charts and analytics restricted to admins only
- ✅ Friendly message shown to moderators without access

### 2. **Enhanced CRUD Operations**

#### **Validation Layer**
- ✅ **Username Validation**
  - Minimum 3 characters
  - Maximum 30 characters
  - Only letters, numbers, underscores, and hyphens
  - Case-insensitive duplicate checking
  
- ✅ **Password Validation**
  - Minimum 6 characters
  - Maximum 100 characters
  - Required for new users
  - Optional for updates (change only if provided)
  
- ✅ **Role Validation**
  - Must be "admin" or "moderator"
  - Prevents unauthorized role assignments

#### **Security Enhancements**
- ✅ Prevent main admin account modification
- ✅ Users cannot suspend themselves
- ✅ Moderators automatically blocked from admin-only permissions
- ✅ Enhanced CSRF protection
- ✅ Case-insensitive username uniqueness check

### 3. **Activity Logging System**

#### **What Gets Logged**
All user management actions are tracked:
- User creation
- User updates (with detailed change tracking)
- User suspension
- User activation

#### **Log Details**
Each log entry includes:
```json
{
  "timestamp": "2025-11-18T10:30:00.000Z",
  "action": "created|updated|suspended|activated",
  "performedBy": "admin",
  "userId": "user-123",
  "username": "moderator1",
  "details": "Created new moderator user"
}
```

#### **Log Storage**
- Location: `src/data/user-activity.json`
- Automatic retention: Last 1000 entries
- Prevents file bloat with rolling logs

### 4. **Enhanced User Interface**

#### **Search & Filter Features**
- ✅ **Real-time Search**: Search by username or user ID
- ✅ **Role Filter**: Filter by Admin/Moderator/All
- ✅ **Status Filter**: Filter by Active/Suspended/All
- ✅ Combined filtering support

#### **Responsive Design**
- Mobile-friendly layout
- Stacked controls on small screens
- Touch-optimized buttons
- Horizontal scrolling for table

---

## New Permission: `viewStatistics`

### Purpose
Controls access to dashboard statistics and analytics

### Default Values
- **Admins**: `true` (can view statistics)
- **Moderators**: `false` (cannot view statistics)

### What It Controls
- Dashboard stat cards (Total News, Events, Posts, Library)
- Bar chart visualization
- Doughnut chart visualization
- Content overview analytics

### User Experience
**Admin with viewStatistics:**
```
✓ Sees all statistics
✓ Views charts
✓ Accesses full dashboard analytics
```

**Moderator without viewStatistics:**
```
✗ No statistics shown
✗ No charts displayed
✓ Friendly welcome message
✓ Access to content management sections
```

---

## Using the Enhanced User Management

### Adding a New User

1. **Navigate to User Management**
   ```
   /admin/users
   ```

2. **Click "Add New User"**

3. **Fill Required Information**
   - Username (3-30 chars, alphanumeric + underscore/hyphen)
   - Password (min 6 chars)
   - Role (Admin or Moderator)

4. **Configure Permissions**
   - Select content permissions (create, edit, delete, publish)
   - Check "Can approve pending changes" if needed
   - Admin permissions (`manageUsers`, `viewStatistics`) auto-assigned

5. **Save User**
   - Validation runs automatically
   - Activity logged
   - Confirmation message shown

### Editing a User

1. **Find the user** using search or filters
2. **Click "Edit"** button
3. **Modify fields** as needed
4. **Password** is optional (leave blank to keep unchanged)
5. **Save changes**
   - All changes are logged with details
   - Moderators cannot get admin-only permissions

### Suspending/Activating Users

1. **Locate the user**
2. **Click "Suspend"** or **"Activate"**
3. **Confirm action**
4. **Activity logged** automatically

**Protections:**
- Cannot suspend main admin account
- Cannot suspend your own account
- Status change logged with details

---

## Search & Filter Usage

### Search Box
```
Type any of:
- Username (partial match)
- User ID (partial match)

Example: "mod" finds "moderator1", "moderator2"
```

### Role Filter
```
Options:
- All Roles (default)
- Admin
- Moderator

Shows only users with selected role
```

### Status Filter
```
Options:
- All Status (default)
- Active
- Suspended

Shows only users with selected status
```

### Combined Filtering
All filters work together:
```
Search: "john"
Role: Moderator
Status: Active

Result: Active moderators named John
```

---

## API Changes

### POST `/api/admin/users` (Create User)

**Enhanced Validation:**
```typescript
{
  "id": "uuid",
  "username": "string (3-30 chars, alphanumeric)",
  "password": "string (min 6 chars, required)",
  "role": "admin | moderator",
  "permissions": { ... }
}
```

**New Response:**
```json
{
  "success": true,
  "message": "User created successfully"
}
```

**New Errors:**
```json
{
  "error": "Username must be at least 3 characters long"
}
{
  "error": "Username can only contain letters, numbers, underscores, and hyphens"
}
{
  "error": "Password must be at least 6 characters long"
}
{
  "error": "User ID already exists"
}
```

### PUT `/api/admin/users` (Update User)

**Enhanced Features:**
- Optional password (blank = unchanged)
- Prevents main admin role change
- Case-insensitive duplicate check
- Detailed change tracking

**New Response:**
```json
{
  "success": true,
  "message": "User updated successfully"
}
```

### DELETE `/api/admin/users` (Toggle Status)

**Enhanced Protections:**
```json
{
  "error": "Cannot suspend the main admin account"
}
{
  "error": "You cannot suspend your own account"
}
```

**New Response:**
```json
{
  "success": true,
  "message": "User suspended successfully",
  "status": "suspended"
}
```

---

## Activity Log Format

### Log Entry Structure
```json
{
  "timestamp": "ISO 8601 datetime",
  "action": "created | updated | suspended | activated | deleted",
  "performedBy": "username of admin",
  "userId": "id of affected user",
  "username": "username of affected user",
  "details": "description of changes"
}
```

### Update Log Details Examples
```
"username changed from 'john' to 'johnsmith', password updated, permissions updated"
```

```
"role changed from moderator to admin, permissions updated"
```

```
"permissions updated"
```

### Accessing Logs
Location: `src/data/user-activity.json`

**Programmatic Access:**
```typescript
import activityLogs from '../data/user-activity.json';

// Get recent logs
const recentLogs = activityLogs.slice(-50);

// Filter by user
const userLogs = activityLogs.filter(log => log.userId === 'user-123');

// Filter by action
const creations = activityLogs.filter(log => log.action === 'created');
```

---

## Database Schema Updates

### users.json Structure
```json
{
  "id": "string",
  "username": "string",
  "passwordHash": "string (bcrypt)",
  "role": "admin | moderator",
  "permissions": {
    "manageUsers": "boolean (admin only)",
    "approveChanges": "boolean",
    "viewStatistics": "boolean (NEW)",
    "news": {
      "create": "boolean",
      "edit": "boolean",
      "delete": "boolean",
      "publish": "boolean"
    },
    "events": { ... },
    "posts": { ... },
    "library": { ... }
  },
  "status": "active | suspended",
  "createdAt": "ISO 8601 datetime",
  "lastLogin": "ISO 8601 datetime | null"
}
```

### New File: user-activity.json
```json
[
  {
    "timestamp": "string",
    "action": "string",
    "performedBy": "string",
    "userId": "string",
    "username": "string",
    "details": "string"
  }
]
```

---

## Security Best Practices

### 1. **Password Handling**
- ✅ Bcrypt with 12 salt rounds
- ✅ Never logged or returned to client
- ✅ Validation before hashing
- ✅ Optional on updates (no forced changes)

### 2. **Permission Enforcement**
- ✅ Server-side validation on all operations
- ✅ Moderators blocked from admin permissions
- ✅ Role-based access control (RBAC)
- ✅ CSRF token verification

### 3. **Audit Trail**
- ✅ All actions logged
- ✅ Performer identity recorded
- ✅ Detailed change tracking
- ✅ Timestamp precision

### 4. **Input Validation**
- ✅ Username format restrictions
- ✅ Length limits enforced
- ✅ SQL injection prevention (JSON storage)
- ✅ XSS prevention (no HTML in usernames)

---

## Testing Checklist

### User Creation
- [ ] Create moderator with valid data
- [ ] Try duplicate username (should fail)
- [ ] Try short username (should fail)
- [ ] Try weak password (should fail)
- [ ] Try special characters in username (should fail)
- [ ] Verify moderator doesn't get admin permissions
- [ ] Check activity log entry

### User Updates
- [ ] Update username
- [ ] Update password
- [ ] Change role from moderator to admin
- [ ] Try to demote main admin (should fail)
- [ ] Update permissions
- [ ] Leave password blank (should keep old)
- [ ] Check activity log entry with details

### Status Management
- [ ] Suspend a moderator
- [ ] Activate a suspended user
- [ ] Try to suspend main admin (should fail)
- [ ] Try to suspend yourself (should fail)
- [ ] Check activity log entry

### Search & Filter
- [ ] Search by partial username
- [ ] Search by user ID
- [ ] Filter by role (admin)
- [ ] Filter by role (moderator)
- [ ] Filter by status (active)
- [ ] Filter by status (suspended)
- [ ] Combine all filters
- [ ] Test with empty results

### Dashboard Statistics
- [ ] Login as admin → see statistics
- [ ] Login as moderator → see welcome message
- [ ] Verify charts render for admins
- [ ] Verify no charts for moderators

---

## Common Issues & Solutions

### Issue: "Username already exists"
**Cause:** Username is taken (case-insensitive)
**Solution:** Choose a different username

### Issue: "Cannot suspend the main admin account"
**Cause:** Attempting to suspend protected admin account
**Solution:** Main admin cannot be suspended for system stability

### Issue: "You cannot suspend your own account"
**Cause:** User trying to suspend themselves
**Solution:** Ask another admin to perform the action

### Issue: Moderator sees admin permissions in form
**Cause:** Front-end allows selection but backend blocks
**Solution:** Backend automatically removes admin permissions for moderators

### Issue: Activity log file too large
**Cause:** Many operations over time
**Solution:** Automatic retention keeps last 1000 entries

---

## Future Enhancements

### Planned Features
- [ ] Bulk user operations
- [ ] Export user list to CSV
- [ ] Advanced activity log viewer in admin panel
- [ ] Email notifications for account changes
- [ ] Password reset functionality
- [ ] Two-factor authentication
- [ ] Session management (force logout)
- [ ] Failed login tracking
- [ ] IP-based access control
- [ ] API rate limiting

### Activity Log Viewer
- [ ] Filterable log table in admin panel
- [ ] Export logs to CSV
- [ ] Date range filtering
- [ ] User-specific logs
- [ ] Action-specific logs

---

## Migration Guide

### For Existing Users

1. **Update all users.json entries** to include `viewStatistics`:
   ```json
   "permissions": {
     "manageUsers": true,
     "approveChanges": true,
     "viewStatistics": true,  // ADD THIS
     "news": { ... }
   }
   ```

2. **Create user-activity.json** file:
   ```bash
   echo "[]" > src/data/user-activity.json
   ```

3. **Set appropriate values**:
   - Admins: `viewStatistics: true`
   - Moderators: `viewStatistics: false`

### Backwards Compatibility
- Existing users without `viewStatistics` will not see dashboard stats
- All CRUD operations remain compatible
- Existing sessions continue to work

---

## Support & Troubleshooting

### Check User Configuration
```typescript
// In browser console on admin pages
console.log(Astro.locals.user);
```

### Verify Activity Log
```bash
# View recent activity
cat src/data/user-activity.json | tail -n 20
```

### Check User Data
```bash
# View all users
cat src/data/users.json
```

### Enable Debug Logging
Check browser console for detailed operation logs

---

## Summary of Changes

| Feature | Before | After |
|---------|--------|-------|
| Username Validation | Basic | Comprehensive (length, format, case-insensitive) |
| Password Validation | Basic | Enhanced (min 6 chars, optional on update) |
| Duplicate Check | Case-sensitive | Case-insensitive |
| Admin Protection | None | Cannot modify/suspend main admin |
| Self-Protection | None | Cannot suspend own account |
| Activity Logging | None | Full audit trail |
| Dashboard Stats | All users | Admin-only with `viewStatistics` |
| Search/Filter | None | Real-time search + role/status filters |
| Error Messages | Generic | Specific, helpful |
| API Responses | Basic | Detailed with messages |

---

## Permissions Matrix

| Permission | Admin | Moderator | Controls |
|------------|-------|-----------|----------|
| `manageUsers` | ✅ Auto | ❌ Blocked | User management access |
| `approveChanges` | ✅ Optional | ✅ Optional | Approve pending changes |
| `viewStatistics` | ✅ Auto | ❌ Blocked | Dashboard statistics/charts |
| `news.create` | ✅ Optional | ✅ Optional | Create news articles |
| `news.edit` | ✅ Optional | ✅ Optional | Edit news articles |
| `news.delete` | ✅ Optional | ✅ Optional | Delete news articles |
| `news.publish` | ✅ Optional | ✅ Optional | Publish news directly |

*(Similar structure for events, posts, library)*

---

## Conclusion

The enhanced user management system provides:
- ✅ **Better Security**: Comprehensive validation, admin protection, audit trails
- ✅ **Better UX**: Search, filters, helpful error messages
- ✅ **Better Control**: Granular permissions, statistics access control
- ✅ **Better Compliance**: Full activity logging for accountability
- ✅ **Better Maintainability**: Clean API, consistent error handling

All improvements maintain backwards compatibility while adding powerful new features for modern admin panel management.
