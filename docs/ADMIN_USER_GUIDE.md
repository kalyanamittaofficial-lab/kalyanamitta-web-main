# Quick Reference: Adding Users & Managing Pending Changes

## For Admins: Adding a New User

### Step-by-Step Guide

1. **Login** to the admin panel at `/admin/login`

2. **Navigate to Users**
   - Click "User Management" from the dashboard
   - Or go directly to `/admin/users`

3. **Click "Add New User"** button (blue button at top)

4. **Fill in the Form**:
   
   **Basic Information**
   - Username: Choose a unique username (e.g., `moderator_john`)
   - Password: Create a secure password (min 8 characters)
   - Role: Select `Moderator` or `Admin`

   **Content Permissions** (check boxes as needed):
   
   | Content Type | Create | Edit | Delete | Publish |
   |--------------|--------|------|--------|---------|
   | News | ☐ | ☐ | ☐ | ☐ |
   | Events | ☐ | ☐ | ☐ | ☐ |
   | Posts | ☐ | ☐ | ☐ | ☐ |
   | Library | ☐ | ☐ | ☐ | ☐ |

   **Special Permissions**:
   - ☐ Can approve pending changes (for senior moderators)

5. **Click "Save User"**

6. **Share Credentials** securely with the new user

### Example Permission Sets

**Basic Moderator** (Can submit but needs approval):
- News: Create, Edit
- Events: Create, Edit
- Posts: Create, Edit
- Library: Create, Edit
- Approve Changes: ❌ NO

**Senior Moderator** (Can approve others' changes):
- News: Create, Edit, Delete, Publish
- Events: Create, Edit, Delete, Publish
- Posts: Create, Edit, Delete, Publish
- Library: Create, Edit, Delete, Publish
- Approve Changes: ✅ YES

**Admin** (Full access):
- All permissions enabled
- Can manage users
- Can approve changes
- Can publish directly

---

## For Admins/Senior Moderators: Reviewing Pending Changes

### Understanding the Table

When you visit `/admin/pending-changes`, you'll see a table with these columns:

| Column | What It Means |
|--------|---------------|
| **Type** | What kind of content (news, events, posts, library) |
| **Action** | What they want to do (create, update, delete) |
| **Changed By** | Who submitted this change |
| **Date & Time** | When it was submitted |
| **What Changed** | Quick summary of the changes |
| **Actions** | Buttons to approve or reject |

### Color Guide

**Type Badges** (all blue):
- 🔵 News
- 🔵 Events  
- 🔵 Posts
- 🔵 Library

**Action Badges**:
- 🟢 Create (green) - New content being added
- 🟡 Update (yellow) - Existing content being modified
- 🔴 Delete (red) - Content being removed

### How to Review Changes

1. **Scan the table** to see all pending changes

2. **Check the details**:
   - Who submitted it?
   - When was it submitted?
   - What are they changing?
   - Why are they making this change? (check Reason field)

3. **View full details** if needed:
   - Click "View Full Details →" link
   - See complete JSON data
   - Review all fields

4. **Make a decision**:

   **To Approve**:
   - Click the green "Approve" button
   - Confirm when prompted
   - Change is applied immediately

   **To Reject**:
   - Click the red "Reject" button
   - Enter a reason for rejection (optional but recommended)
   - Click "Confirm Rejection"
   - Change is discarded

### Example: Reviewing a News Post

```
Type: News
Action: Create (🟢)
Changed By: moderator_sarah
Date & Time: Nov 18, 2025, 10:30 AM
What Changed:
  Title: New Dhamma Talk Series Starting
  Reason: Announcing new series for December
[View Full Details →]  [Approve] [Reject]
```

**Review checklist**:
- ✅ Title is clear and appropriate
- ✅ Content is accurate
- ✅ No spelling/grammar errors
- ✅ Follows community guidelines
- ✅ Reason makes sense

**Action**: Click "Approve" ✅

---

## Common Scenarios

### Scenario 1: New Event Submission
```
A moderator submits a new meditation session event.
→ Review date, time, location
→ Verify details are correct
→ If good: Approve
→ If needs changes: Reject with feedback
```

### Scenario 2: Update to Existing Post
```
A moderator corrects a typo in a published post.
→ Click "View Full Details"
→ Check the changes make sense
→ If minor correction: Approve quickly
→ If major changes: Review carefully
```

### Scenario 3: Delete Request
```
A moderator wants to delete outdated news.
→ Verify the content is indeed outdated
→ Check if it should be archived instead
→ If appropriate: Approve deletion
→ If should keep: Reject with reason
```

---

## Best Practices

### For Adding Users
1. ✅ Use clear, professional usernames
2. ✅ Create strong passwords
3. ✅ Start with minimal permissions
4. ✅ Grant more permissions as trust builds
5. ✅ Document who has what permissions

### For Reviewing Changes
1. ✅ Review changes promptly (within 24 hours)
2. ✅ Always provide a reason when rejecting
3. ✅ Check for accuracy and appropriateness
4. ✅ Verify content follows guidelines
5. ✅ Communicate with moderators about rejections

### For Communication
1. ✅ Be clear and constructive in rejection reasons
2. ✅ Thank moderators for good submissions
3. ✅ Provide guidance for improvement
4. ✅ Create a feedback channel
5. ✅ Regular check-ins with moderator team

---

## Keyboard Shortcuts (Coming Soon)

- `N` - New user (from users page)
- `A` - Approve selected change
- `R` - Reject selected change
- `V` - View details
- `Esc` - Close modal

---

## Need Help?

### Common Issues

**Can't add user?**
- Check you're logged in as admin
- Verify you have "Manage Users" permission
- Try a different username if taken

**Changes not showing?**
- Refresh the page
- Check you have "Approve Changes" permission
- Verify there are actually pending changes

**Approval failed?**
- Check your internet connection
- Try again
- Contact technical support if persists

### Contact
- Technical Issues: [admin email]
- Permission Questions: [admin email]
- Training: [training resources]

---

## Quick Links

- **Admin Dashboard**: `/admin/dashboard`
- **User Management**: `/admin/users`
- **Pending Changes**: `/admin/pending-changes`
- **News Management**: `/admin/news`
- **Events Management**: `/admin/events`
- **Posts Management**: `/admin/posts`
- **Library Management**: `/admin/library`

---

*Last Updated: November 18, 2025*
