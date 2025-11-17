# Finder Page - Setup Instructions

## Background Video Setup

The Finder page uses a separate background video from the homepage. To add the video:

1. **Place your video file** at: `public/video/finder-bg.mp4`
2. The video should be optimized for web:
   - Format: MP4 (H.264 codec recommended)
   - Resolution: 1920x1080 or higher
   - File size: Keep under 10MB for best performance
   - Duration: Can be looped (the video will loop automatically)

## Theme Integration

The Finder page now matches your website's design:
- ✅ Uses the monk-900 (#b91c1c) red color scheme
- ✅ White/cream backgrounds with transparency
- ✅ Matches the overall aesthetic of Kalyanamitta
- ✅ Integrated into the navigation bar

## Features

- **Trust & Transparency Banner** - Ethical disclaimer at the top
- **Advanced Search** - Real-time full-text search
- **Multiple Filters** - Topic, Teacher, Language, Source Type
- **Resource Cards** - Beautiful cards with all resource details
- **External Links** - Opens original sources in new tabs (ethical design)
- **Responsive Design** - Works perfectly on mobile and desktop

## Navigation

The Finder link has been added to:
- Desktop navigation (between Home and Writings)
- Mobile sidebar menu

## Maintaining Resources

To add or update Buddhist teaching resources, edit:
`src/data/library.json`

Each resource should have:
- `id`: Unique identifier
- `title`: Resource name
- `url`: External link
- `description`: Brief description
- `teacher`: Teacher name
- `language`: Language(s)
- `sourceType`: "website" or "youtube"
- `topics`: Array of topic tags
- `verifiedDate`: Date reviewed
- `featured`: true/false for highlighting

## Page Access

Visit the Finder page at: `/finder`
