# Multi-User Moderator System Setup Guide

## Overview
The system now supports multiple moderators with role-based access control and an approval workflow. Admins can manage users, assign permissions, and review submissions from moderators before they appear on the website.

## Key Features

### 1. **User Roles**
- **Admin**: Full access to all features including user management and approval
- **Moderator**: Limited access based on assigned permissions

### 2. **Granular Permissions**
Each user can have specific permissions for each content type (news, events, posts, library):
- **Create**: Can create new content
- **Edit**: Can modify existing content  
- **Delete**: Can remove content
- **Publish**: Can publish directly to the website (bypassing approval)

### 3. **Approval Workflow**
- Moderators without "publish" permission submit changes for approval
- Changes are stored in pending queue
- Admins (or users with approveChanges permission) review and approve/reject
- Approved changes are published to the website

## Getting Started

### Step 1: Initial Admin User
The default admin user is already configured in `src/data/users.json`:
- **Username**: `admin`
- **Password**: You'll need to use the existing ADMIN_PASSWORD_HASH from your .env file
- **Role**: Admin with full permissions

### Step 2: Add New Moderators
1. Log in as admin
2. Navigate to **Admin Dashboard** → **User Management**
3. Click **"Add New User"**
4. Fill in the form:
   - Username (required)
   - Password (required for new users)
   - Role (Moderator or Admin)
   - Content Permissions (select which actions for each content type)
   - Can approve changes checkbox (if they should review submissions)
5. Click **"Save User"**

### Step 3: Manage Permissions
You can edit user permissions at any time:
1. Go to **User Management**
2. Click **"Edit"** on any moderator
3. Update permissions as needed
4. Save changes

### Step 4: View Pending Changes
1. Navigate to **Pending Changes** from the dashboard
2. Review submissions from moderators
3. Click **"View Full Details"** to see complete data
4. **Approve** to publish or **Reject** to decline (with optional reason)

## User Management Features

### View Users
- See all users with their roles and status
- View last login time
- Check permissions summary

### Edit Users
- Update username
- Change role (admin/moderator)
- Modify permissions
- Reset password (leave blank to keep current)

### Suspend/Activate Users
- Suspend users to temporarily revoke access
- Activate suspended users to restore access
- Suspended users cannot log in

## Approval Workflow

### For Moderators
When a moderator creates/updates/deletes content:
1. If they have "publish" permission → Content goes live immediately
2. If they don't have "publish" permission → Submission goes to pending queue
3. They'll see a message: "Submitted for approval"

### For Approvers
1. Go to **Pending Changes**
2. See all submissions grouped by type (news, events, posts, library)
3. Each submission shows:
   - Action type (create/update/delete)
   - Submitter name
   - Submission time
   - Reason (if provided)
   - Content preview
4. Review and approve or reject

## API Changes

### Modified Endpoints
All admin API endpoints now check permissions:
- `/api/admin/news` - Requires news permissions
- `/api/admin/events` - Requires events permissions
- `/api/admin/posts` - Requires posts permissions
- `/api/admin/library` - Requires library permissions

### New Endpoints
- `/api/admin/users` - Manage users (POST/PUT/DELETE)
- `/api/admin/pending-changes` - Approve/reject submissions (POST)

## Security Features

### Role-Based Access Control (RBAC)
- Middleware checks user permissions for each request
- Users can only access pages/features they have permission for
- Failed permission checks return 403 Forbidden

### CSRF Protection
All state-changing operations require CSRF token validation

### Password Security
- Passwords are hashed using bcrypt (cost factor 12)
- Never stored in plain text
- Password reset requires admin action

## Files Structure

```
src/
├── data/
│   ├── users.json              # User accounts and permissions
│   └── pending-changes.json    # Submission queue
├── lib/
│   ├── auth.ts                 # Authentication with multi-user support
│   └── permissions.ts          # Permission checking utilities
├── pages/
│   ├── admin/
│   │   ├── users.astro        # User management page
│   │   └── pending-changes.astro  # Approval queue page
│   └── api/
│       └── admin/
│           ├── users.ts       # User CRUD API
│           └── pending-changes.ts  # Approval API
└── middleware.ts              # Enhanced with RBAC
```

## Example Permission Scenarios

### Scenario 1: Content Creator
- **Role**: Moderator
- **Permissions**:
  - News: create ✓
  - Events: create ✓
  - No publish permission
- **Result**: All content goes to pending queue for approval

### Scenario 2: Senior Moderator
- **Role**: Moderator  
- **Permissions**:
  - News: create ✓, edit ✓, publish ✓
  - Events: create ✓, edit ✓
  - Approve changes: ✓
- **Result**: News published directly, events need approval, can review others' submissions

### Scenario 3: Admin
- **Role**: Admin
- **Permissions**: All enabled
- **Result**: Full control, can manage users, publish everything directly

## Troubleshooting

### User Can't Log In
- Check if user status is "active" not "suspended"
- Verify password is correct
- Check browser console for errors

### Permissions Not Working
- Log out and log back in to refresh session
- Verify permissions are saved correctly in users.json
- Check middleware logs for permission checks

### Pending Changes Not Appearing
- Verify the submission was successful (check response)
- Ensure pending-changes.json is writable
- Check that user doesn't have "publish" permission (which bypasses pending)

## Next Steps

1. **Create your first moderator account** through User Management
2. **Test the workflow** by logging in as moderator and creating content
3. **Review submissions** as admin in Pending Changes
4. **Adjust permissions** based on your team's needs

## Support

For issues or questions:
- Check the browser console for error messages
- Review server logs for API errors
- Verify JSON files are not corrupted
