# Aman Khan - Portfolio Website

A professional, modern portfolio website showcasing skills, experience, and projects.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, professional aesthetic
- ✅ Offline-capable (static HTML/CSS/JavaScript)
- ✅ Smooth scrolling and animations
- ✅ Optimized for LinkedIn sharing

## Setup Instructions

### 1. Add Your Profile Image

1. Save your profile photo as `profile-image.jpg` in the root directory (same folder as `index.html`)
2. The image should be square (recommended: 800x800px or higher)
3. Ensure the image is well-lit with a clean background (as described)

**Alternative:** If you prefer a different filename or format:
- Rename your image file
- Update line 35 in `index.html`: change `src="profile-image.jpg"` to your filename

### 2. View Locally

Simply open `index.html` in your web browser. The site works completely offline!

**Option 1 - Direct Open:**
- Double-click `index.html`
- Or right-click → Open With → Your Browser

**Option 2 - Local Server (Recommended for Testing):**
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then visit: http://localhost:8000
```

## Deployment Options

To make your portfolio accessible via a URL for LinkedIn:

### Option 1: GitHub Pages (Free & Easy)
1. Create a GitHub account if you don't have one
2. Create a new repository (e.g., `portfolio`)
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select `main` branch and `/root` folder
6. Your site will be live at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Free & Fast)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get instant URL: `https://random-name.netlify.app`
4. You can customize the domain name in settings

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project folder
3. Deploy instantly

### Option 4: Your Own Domain (Optional)
- Purchase a domain from Namecheap, Google Domains, etc.
- Connect it to any of the hosting services above

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript for interactivity
├── profile-image.jpg   # Your profile photo (add this!)
└── README.md           # This file
```

## Customization

### Update Contact Information
Edit the contact section in `index.html` (lines 347-371) or search for "Get In Touch"

### Change Colors
Edit CSS variables in `styles.css` at the top (lines 9-18):
- `--primary-color`: Main brand color (currently blue)
- `--secondary-color`: Accent color
- Adjust other colors as needed

### Modify Content
All content is in `index.html`. Each section is clearly marked with comments.

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The website is completely static and works offline
- No backend or database required
- All animations are CSS/JavaScript based (no external dependencies except Google Fonts)
- The site uses Google Fonts (Inter) - if you want it to work completely offline, download the font files

## Support

If you need help customizing or deploying, feel free to modify the code directly - it's well-commented and straightforward!

