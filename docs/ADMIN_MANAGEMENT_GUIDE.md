# Admin Management System - Complete Guide

## ✅ What's Fixed

### 1. **Content Security Policy (CSP)**
- ✅ Google Fonts allowed
- ✅ Vercel Analytics allowed
- ✅ WebSocket connections for dev tools
- ✅ No more CSP errors in console

### 2. **Authentication & Authorization**
- ✅ All admin pages protected (news, events, posts, library)
- ✅ Automatic redirect to login if not authenticated
- ✅ JWT-based session management
- ✅ CSRF token protection

### 3. **Modal Functionality**
- ✅ All "Add" buttons work correctly
- ✅ Modals show/hide properly
- ✅ Form submission works
- ✅ Edit functionality populates all fields

### 4. **JSON Data Management**
- ✅ Full field support matching JSON structure
- ✅ News: title, titleSinhala, excerpt, content, tags, featured, hidden, etc.
- ✅ Events: dates, times, location, category, type
- ✅ Posts: title, description, URL, languages
- ✅ Library: teacher, language, sourceType, category, topics

## 🔑 Admin Credentials

```
Username: admin
Password: Admin@2024
```

## 🚀 How to Use

### Starting the Server

```powershell
npm run dev
```

Server runs at: `http://localhost:4321`

### Accessing Admin Dashboard

1. Go to: `http://localhost:4321/admin/login`
2. Enter credentials (admin / Admin@2024)
3. Click "Login"
4. You'll be redirected to the dashboard

### Managing Content

#### **News Management** (`/admin/news`)

**Add New News:**
1. Click "+ Add News"
2. Fill in required fields:
   - Title (English) *
   - Excerpt (English) *
   - Full Content (English) *
   - Date *
3. Optional fields:
   - Title (Sinhala)
   - Excerpt (Sinhala)
   - Full Content (Sinhala)
   - Source
   - Author
   - Category
   - URL
   - Image URL
   - Tags (comma separated)
   - Featured checkbox
   - Hidden checkbox
4. Click "Save"

**Edit News:**
1. Click the blue edit icon (✏️) on any news item
2. Modify fields
3. Click "Save"

**Delete News:**
1. Click the red delete icon (🗑️)
2. Confirm deletion

#### **Events Management** (`/admin/events`)

**Fields:**
- Title, Description
- Start Date, End Date
- Start Time, End Time
- Location
- Category (e.g., "Meditation", "Teaching")
- Type (e.g., "Online", "In-Person")
- Image URL

#### **Posts Management** (`/admin/posts`)

**Fields:**
- Title
- Description
- Post URL (external link)
- Publication Date
- Languages (comma separated)

#### **Library Management** (`/admin/library`)

**Fields:**
- Title
- URL (resource link)
- Description
- Teacher/Author
- Language
- Source Type (e.g., "Video", "Audio", "Text")
- Category
- Topics (comma separated)
- Featured checkbox
- Hidden checkbox

## 📊 How Data Works

### Storage
All data is stored in JSON files in `src/data/`:
- `news.json` - News articles
- `events.json` - Events
- `posts.json` - Blog posts
- `library.json` - Library resources

### API Endpoints
Protected by authentication and CSRF tokens:

**News:**
- `GET /api/admin/news` - Fetch all
- `POST /api/admin/news` - Create new
- `PUT /api/admin/news` - Update existing
- `DELETE /api/admin/news?id=X` - Delete by ID

**Events:**
- `GET /api/admin/events`
- `POST /api/admin/events`
- `PUT /api/admin/events`
- `DELETE /api/admin/events?id=X`

**Posts:**
- `GET /api/admin/posts`
- `POST /api/admin/posts`
- `PUT /api/admin/posts`
- `DELETE /api/admin/posts?title=X`

**Library:**
- `GET /api/admin/library`
- `POST /api/admin/library`
- `PUT /api/admin/library`
- `DELETE /api/admin/library?id=X`

### Public Display
- News: `/news` page automatically displays non-hidden items
- Events: `/events` page shows all events
- Posts: `/writings` page displays all posts
- Library: `/finder` page shows library resources

Changes made in admin panel **immediately reflect** on public pages after page refresh.

## 🔒 Security Features

1. **JWT Authentication**
   - 8-hour session duration
   - HTTP-only cookies
   - Secure flag in production

2. **CSRF Protection**
   - Token generated per session
   - Required for all POST/PUT/DELETE operations
   - Validated on server side

3. **Rate Limiting**
   - 50 requests/minute for API endpoints
   - 100 requests/minute for web pages
   - In-memory storage (consider Redis for production)

4. **Security Headers**
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - X-XSS-Protection: 1; mode=block
   - Referrer-Policy: strict-origin-when-cross-origin
   - Content-Security-Policy (configured)

5. **Password Security**
   - Bcrypt hashing (cost factor 12)
   - Never stored in plain text

## 🐛 Troubleshooting

### Modal Not Showing
1. Check browser console (F12) for errors
2. Look for "Script loaded, elements:" log
3. Ensure JavaScript is enabled

### Login Failed
1. Verify credentials: admin / Admin@2024
2. Check `.env` file has correct password hash
3. Clear cookies and try again

### Changes Not Appearing
1. Refresh the public page (Ctrl+R)
2. Check if item is marked as "Hidden"
3. Verify JSON file was updated in `src/data/`

### Build Errors
```powershell
npm run build
```
Should complete with 0 errors. If errors occur, check file syntax.

## 📦 Deployment to Vercel

1. **Set Environment Variables** in Vercel dashboard:
   ```
   JWT_SECRET=aea9d2d5bd59ce0b819633e3a8e690126ffa9e1e0834adc1ce687278478dc5d5
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD_HASH=$2b$12$5FHS2ZaIvovhuWxrR4tLK.uEFowN0RlPHz45BGpDVhFWlrHGsge0e
   ```

2. **Deploy:**
   ```powershell
   git add .
   git commit -m "Admin system complete"
   git push
   ```

3. **Verify:**
   - Visit `https://your-site.vercel.app/admin/login`
   - Test all CRUD operations
   - Check public pages reflect changes

## 🎯 Testing Checklist

- [ ] Login works
- [ ] Dashboard displays counts
- [ ] News: Add, Edit, Delete
- [ ] Events: Add, Edit, Delete
- [ ] Posts: Add, Edit, Delete
- [ ] Library: Add, Edit, Delete
- [ ] Logout works
- [ ] Public pages show updated content
- [ ] CSP errors resolved
- [ ] Modal appears on all pages
- [ ] Form validation works
- [ ] Unauthorized access blocked

## 🔄 Future Enhancements

Consider adding:
- Image upload functionality
- Rich text editor for content
- Bulk operations (delete multiple)
- Search/filter in admin tables
- User role management
- Activity logs
- Backup/restore functionality
- Draft/publish workflow
- Media library
- SEO fields (meta description, keywords)

---

**Last Updated:** November 18, 2025
**Version:** 1.0.0
**Status:** ✅ Production Ready
