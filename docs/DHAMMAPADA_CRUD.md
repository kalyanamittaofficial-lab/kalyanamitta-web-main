# Dhammapada CRUD Operations - Admin Dashboard

## Overview
Added complete CRUD (Create, Read, Update, Delete) operations for managing Dhammapada quotes in the admin dashboard. This feature is **admin-only** and provides a user-friendly interface for managing the Buddhist wisdom quotes displayed on the website.

## Files Created/Modified

### New Files Created:
1. **`src/pages/api/admin/dhammapada.ts`** - API endpoint for CRUD operations
   - GET: Fetch all Dhammapada quotes
   - POST: Create new quote
   - PUT: Update existing quote
   - DELETE: Delete quote

2. **`src/pages/admin/dhammapada.astro`** - Admin management page
   - Full-featured UI for managing quotes
   - Modal dialogs for add/edit operations
   - Confirmation dialog for delete operations
   - Real-time updates and feedback

### Modified Files:
1. **`src/pages/admin/dashboard.astro`**
   - Added Dhammapada statistics card (admin only)
   - Added navigation link to Dhammapada management
   - Imported Dhammapada data for count display

## Features

### Security
- **Admin-only access**: Only users with `role: 'admin'` can access Dhammapada management
- All API endpoints verify admin role before allowing operations
- Protected routes redirect non-admin users to dashboard

### CRUD Operations

#### Create
- Add new Dhammapada quotes with Sinhala and English translations
- Required fields validation
- Automatic ID generation

#### Read
- View all quotes in a clean, organized list
- Display quote ID, Sinhala text, and English translation
- Real-time count display

#### Update
- Edit existing quotes via modal dialog
- Pre-populated form with current values
- Instant updates after saving

#### Delete
- Delete quotes with confirmation dialog
- Prevents accidental deletions
- Immediate UI update after deletion

### User Interface
- **Clean Design**: Consistent with existing admin pages
- **Responsive**: Works on all screen sizes
- **Alerts**: Success/error messages for all operations
- **Loading States**: Shows loading indicators while fetching data
- **Empty State**: Displays helpful message when no quotes exist
- **Modal Dialogs**: Professional add/edit interface
- **Confirmation**: Delete confirmation to prevent accidents

## Usage

### Accessing Dhammapada Management
1. Login as admin user
2. Navigate to Admin Dashboard
3. Click on "Dhammapada Management" card
   - Only visible to admin users
   - Located in the content management section

### Adding a New Quote
1. Click "Add New Quote" button
2. Enter Sinhala translation
3. Enter English translation
4. Click "Save Quote"

### Editing a Quote
1. Click the edit icon (pencil) on any quote
2. Modify the Sinhala or English text
3. Click "Save Quote"

### Deleting a Quote
1. Click the delete icon (trash) on any quote
2. Confirm deletion in the dialog
3. Quote is permanently removed

## API Endpoints

### GET `/api/admin/dhammapada`
- Fetches all Dhammapada quotes
- Returns: Array of quote objects

### POST `/api/admin/dhammapada`
- Creates a new quote
- Body: `{ sinhala: string, english: string }`
- Returns: Success message and created quote

### PUT `/api/admin/dhammapada`
- Updates existing quote
- Body: `{ id: number, sinhala: string, english: string }`
- Returns: Success message and updated quote

### DELETE `/api/admin/dhammapada`
- Deletes a quote
- Body: `{ id: number }`
- Returns: Success message and deleted quote

## Data Structure

```json
{
  "id": 1,
  "sinhala": "Sinhala text of the quote",
  "english": "English translation of the quote"
}
```

## Dashboard Integration

### Statistics Card (Admin Only)
- Displays total count of Dhammapada quotes
- Shows monk-themed icon (lotus/dharma wheel)
- Updates automatically when quotes are added/removed

### Navigation Link
- Prominent card in content management section
- Clear description: "Manage Dhammapada quotes and verses"
- Consistent styling with other admin sections

## Notes
- Only admin users (with `role: 'admin'`) can access this feature
- Moderators cannot access or manage Dhammapada quotes
- All changes are immediately reflected in the main website
- The data is stored in `src/data/dhammapada.json`

## Future Enhancements (Optional)
- Search/filter functionality for large quote collections
- Bulk import/export functionality
- Quote categories or tags
- Verse numbering from original Dhammapada chapters
- Preview of how quote appears on website
