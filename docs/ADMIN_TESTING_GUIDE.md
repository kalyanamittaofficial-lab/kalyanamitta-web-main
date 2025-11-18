# Admin Dashboard - Testing Guide

## Quick Test Checklist

### 1. Color Theme Verification ✅
**What to check**: All buttons use monk red (#8E050F)

**Pages to test**:
- `/admin/dashboard`
- `/admin/news`
- `/admin/events`
- `/admin/posts`
- `/admin/library`

**Expected Results**:
- ✅ "Add" buttons are monk red
- ✅ "Save" buttons in modals are monk red
- ✅ Active pagination number is monk red
- ✅ Hover effects show darker monk red (#991b1b)

---

### 2. No Website Navigation ✅
**What to check**: Admin pages don't show website navbar/footer

**How to test**:
1. Go to `/admin/dashboard`
2. Click on any management page (News, Events, Posts, Library)
3. Verify NO navbar at top
4. Verify NO footer at bottom
5. Should see "Go to Website" button in header

**Expected Results**:
- ✅ No "Kalyanamitta" navbar
- ✅ No website footer
- ✅ Only admin header with logout button
- ✅ "Go to Website" opens main site in new tab

---

### 3. Dashboard Charts ✅
**What to check**: Statistics charts display correctly

**How to test**:
1. Go to `/admin/dashboard`
2. Wait for charts to load
3. Verify two charts appear

**Expected Results**:
- ✅ Bar chart shows "Content Overview"
- ✅ Doughnut chart shows "Content Distribution"
- ✅ Both charts use monk red color scheme
- ✅ Charts display actual data counts
- ✅ Charts are responsive on mobile

---

### 4. Modal Form Display ✅
**What to check**: Forms open properly with white background

**How to test**:
1. Go to any management page
2. Click "+ Add [Item]" button
3. Observe modal appearance

**Expected Results**:
- ✅ Modal appears centered on screen
- ✅ White background
- ✅ Can scroll if content is long
- ✅ Modal doesn't overlap with anything
- ✅ Close button works
- ✅ Backdrop is dark with blur effect

---

### 5. Mobile Responsiveness ✅
**What to check**: Everything works on mobile

**How to test**:
1. Open browser DevTools
2. Switch to mobile view (iPhone/Android)
3. Test all admin pages

**Expected Results**:
- ✅ Buttons are touch-friendly
- ✅ Modal fits screen width
- ✅ Forms are scrollable
- ✅ Charts resize properly
- ✅ Pagination works on mobile
- ✅ No horizontal scrolling

---

### 6. Data Loading ✅
**What to check**: Data loads without refresh

**How to test**:
1. Go to `/admin/news` (or any page)
2. Check if news items display immediately
3. Try refreshing the page

**Expected Results**:
- ✅ Data appears instantly (no blank screen)
- ✅ Loading spinner shows briefly
- ✅ Empty state shows if no data
- ✅ No need to refresh to see content

---

### 7. CRUD Operations ✅
**What to check**: Create, Read, Update, Delete work

**How to test**:

**Create**:
1. Click "+ Add News" (or other item)
2. Fill in form
3. Click "Save"
4. Verify item appears in list

**Edit**:
1. Click "Edit" on existing item
2. Modify fields
3. Click "Save"
4. Verify changes applied

**Delete**:
1. Click "Delete" on item
2. Confirm deletion
3. Verify item removed from list

**Expected Results**:
- ✅ All operations work smoothly
- ✅ UI updates immediately
- ✅ No errors in browser console

---

### 8. Pagination ✅
**What to check**: Page navigation works correctly

**How to test**:
1. Add 7+ items to any section (News, Events, etc.)
2. Check pagination appears
3. Click page numbers
4. Try Previous/Next buttons

**Expected Results**:
- ✅ Shows 6 items per page
- ✅ Active page is highlighted in monk red
- ✅ Max 6 page number buttons visible
- ✅ Previous/Next work correctly
- ✅ Page changes update list

---

## Browser Testing

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari (latest)

### Mobile Browsers
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Samsung Internet

---

## Common Issues & Solutions

### Issue: Charts don't appear
**Solution**: Check browser console for Chart.js errors. Ensure internet connection for CDN.

### Issue: Modal overlaps with content
**Solution**: Verify modal is outside `<main>` tag and has `z-[9999]` class.

### Issue: Colors not matching
**Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R).

### Issue: Data doesn't load
**Solution**: Check API endpoints are working. Verify authentication token is valid.

### Issue: Mobile layout broken
**Solution**: Check viewport meta tag is present. Test in actual mobile device, not just DevTools.

---

## Performance Checks

### Load Time
- [ ] Dashboard loads in < 2 seconds
- [ ] Charts render in < 1 second
- [ ] Data fetches complete in < 1 second

### Network
- [ ] Chart.js loads from CDN (check Network tab)
- [ ] API calls return 200 status
- [ ] No failed requests

### Memory
- [ ] No memory leaks when switching pages
- [ ] Charts don't slow down browser

---

## Security Verification

- [ ] CSRF token present in requests
- [ ] JWT token required for API calls
- [ ] Logout works correctly
- [ ] Cannot access admin without login
- [ ] Cannot bypass authentication

---

## Accessibility

- [ ] Buttons have proper focus states
- [ ] Forms are keyboard navigable
- [ ] Color contrast is sufficient
- [ ] Screen reader compatible (test with NVDA/VoiceOver)

---

## Final Checklist

Before considering testing complete:

- [ ] All color theme changes verified
- [ ] No website navbar/footer in admin
- [ ] Dashboard charts display correctly
- [ ] Modals open and close properly
- [ ] Mobile responsiveness confirmed
- [ ] All CRUD operations work
- [ ] Pagination functions correctly
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Security measures in place

---

**Testing Date**: _____________  
**Tested By**: _____________  
**Browser**: _____________  
**Result**: Pass / Fail  
**Notes**: _____________

