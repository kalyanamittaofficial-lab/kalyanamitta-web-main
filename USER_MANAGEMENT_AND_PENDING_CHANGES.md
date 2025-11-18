# User Management & Pending Changes Improvements

## Overview
This document describes the improvements made to the user management and pending changes features.

## 1. User Management - Add New Users

### Features Implemented
- ✅ **Add New User Functionality**: Admins can now create new moderator or admin accounts
- ✅ **Password Hashing**: Passwords are securely hashed using bcrypt with salt rounds of 12
- ✅ **Permission Configuration**: Set granular permissions for each content type (news, events, posts, library)
- ✅ **Role Assignment**: Assign admin or moderator roles
- ✅ **Status Management**: Activate or suspend user accounts

### How to Add a New User

1. **Navigate to User Management**
   - Go to `/admin/users`
   - Click the "Add New User" button

2. **Fill in User Details**
   - **Username**: Unique username (required)
   - **Password**: Secure password (required for new users)
   - **Role**: Choose between Admin or Moderator
   
3. **Configure Permissions**
   - **Content Permissions**: For each content type (news, events, posts, library), select:
     - Create: Can create new items
     - Edit: Can edit existing items
     - Delete: Can delete items
     - Publish: Can publish items directly (bypass pending)
   
   - **Special Permissions**:
     - Approve Changes: Can approve pending changes from other moderators
     - Manage Users: Automatically granted to admins

4. **Save User**
   - Click "Save User" to create the account
   - The password will be securely hashed
   - User will be created with "active" status

### User Management Features
- **Edit Users**: Modify user permissions and roles
- **View Permissions**: Quick view of all user permissions
- **Suspend/Activate**: Toggle user account status
- **Last Login Tracking**: See when users last accessed the system

### API Endpoint
```
POST /api/admin/users
PUT /api/admin/users
DELETE /api/admin/users
```

### Security
- Passwords are hashed using bcryptjs with 12 salt rounds
- CSRF token protection on all operations
- Only admins with `manageUsers` permission can access
- Session-based authentication required

## 2. Pending Changes - Detailed Table View

### New Table Features
The pending changes page now displays a comprehensive table with the following columns:

| Column | Description |
|--------|-------------|
| **Type** | Content type (news, events, posts, library) with color-coded badges |
| **Action** | Create (green), Update (yellow), or Delete (red) |
| **Changed By** | Username of the moderator who submitted the change |
| **Date & Time** | Full timestamp of when the change was submitted |
| **What Changed** | Summary of the changes with key details (title/name) |
| **Actions** | Approve/Reject buttons for quick action |

### Table View Benefits
- **Quick Scanning**: See all pending changes at a glance
- **Detailed Timestamps**: Both date and time displayed
- **Change Attribution**: Know exactly who made each change
- **Inline Summaries**: See key details without opening modals
- **Quick Actions**: Approve or reject directly from the table

### What Changed Column
Displays:
- **Title/Name**: The main identifier of the changed content
- **Reason**: Why the change was submitted (if provided)
- **View Details Link**: Click to see full JSON data in modal

### Color Coding
- **Type Badges**: Blue background for all content types
- **Action Badges**:
  - Green: Create (new content)
  - Yellow: Update (modifications)
  - Red: Delete (removal)

### Interaction Features
1. **View Full Details**: Click to see complete JSON data and metadata
2. **Approve**: One-click approval applies the change immediately
3. **Reject**: Opens modal to provide optional rejection reason
4. **Hover Effects**: Rows highlight on hover for better visibility

### Sample Data Structure
```json
{
  "id": "change-001",
  "type": "news",
  "action": "create",
  "data": {
    "id": "news-new-001",
    "title": "New Dhamma Talk Series Starting",
    "description": "Join us for a new series...",
    "date": "2025-12-01",
    "author": "Bhante Sujato"
  },
  "submittedBy": "moderator1",
  "submittedAt": "2025-11-18T10:30:00.000Z",
  "reason": "Announcing new series for December"
}
```

## 3. API Improvements

### Pending Changes API
```typescript
POST /api/admin/pending-changes
Body: {
  id: string,           // Change ID
  action: 'approve' | 'reject',
  reason?: string       // Optional rejection reason
}
```

**Approve Process**:
1. Reads the pending change
2. Applies change to actual data file based on action:
   - Create: Adds new item
   - Update: Modifies existing item
   - Delete: Removes item
3. Removes from pending changes
4. Returns success message

**Reject Process**:
1. Removes from pending changes
2. Records rejection reason (optional)
3. Does not modify actual data files

## 4. Testing the Features

### Test Adding a User
```bash
# 1. Login as admin
# 2. Go to /admin/users
# 3. Click "Add New User"
# 4. Fill in:
#    - Username: testmoderator
#    - Password: test123456
#    - Role: moderator
# 5. Set permissions as needed
# 6. Click "Save User"
# 7. Verify user appears in table
```

### Test Pending Changes View
```bash
# 1. Login as admin or user with approveChanges permission
# 2. Go to /admin/pending-changes
# 3. View the table with all columns
# 4. Click "View Full Details" on any row
# 5. Test Approve button
# 6. Test Reject button with reason
```

## 5. Permissions Required

### User Management
- **View**: Requires admin role + `manageUsers` permission
- **Add/Edit/Delete**: Requires admin role + `manageUsers` permission

### Pending Changes
- **View**: Requires `approveChanges` permission
- **Approve/Reject**: Requires `approveChanges` permission

## 6. Database Files

### users.json
Location: `src/data/users.json`
Stores: User accounts, roles, permissions, status

### pending-changes.json
Location: `src/data/pending-changes.json`
Stores: All pending changes awaiting approval

## 7. Future Enhancements

### User Management
- [ ] Bulk user import
- [ ] Password reset functionality
- [ ] User activity logs
- [ ] Email notifications for new accounts
- [ ] Two-factor authentication

### Pending Changes
- [ ] Filter by type/action/user
- [ ] Sort by date/type/submitter
- [ ] Bulk approve/reject
- [ ] Change history/audit log
- [ ] Email notifications for approvals/rejections
- [ ] Comment system for changes
- [ ] Comparison view (before/after)

## 8. Troubleshooting

### User Creation Fails
- Verify username is unique
- Check password meets minimum requirements
- Ensure admin has `manageUsers` permission
- Check CSRF token is valid

### Pending Changes Not Showing
- Verify user has `approveChanges` permission
- Check `pending-changes.json` has data
- Clear browser cache
- Check console for errors

### Changes Not Applying
- Verify data file permissions
- Check change ID exists in pending changes
- Verify data file structure matches expected format
- Check server logs for errors

## 9. Security Considerations

- All passwords are hashed with bcrypt (12 rounds)
- CSRF protection on all mutations
- Session-based authentication required
- Permission checks on every API call
- No sensitive data in client-side code
- Secure file operations with proper path handling

## 10. UI/UX Improvements

### Responsive Design
- Table scrolls horizontally on small screens
- Mobile-friendly button sizes
- Touch-friendly interaction targets

### Accessibility
- Proper heading hierarchy
- Color contrast meets WCAG standards
- Keyboard navigation support
- Screen reader friendly labels

### Visual Feedback
- Loading states during operations
- Success/error messages
- Hover effects for interactive elements
- Color-coded status badges
