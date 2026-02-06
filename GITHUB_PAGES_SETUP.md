# 📦 GitHub Pages Setup - Step by Step

## ✅ Files Ready for GitHub!

Your portfolio folder contains all necessary files:
- ✅ `index.html` - Main website file
- ✅ `styles.css` - All styling
- ✅ `script.js` - JavaScript functionality
- ✅ `profile-image.jpg` - Your profile photo
- ✅ `README.md` - Documentation
- ✅ `DEPLOYMENT_GUIDE.md` - Full deployment guide

---

## 🚀 Quick Setup Steps

### Step 1: Create GitHub Repository

1. Go to: https://github.com
2. Click the **"+" icon** (top right) → **"New repository"**
3. **Repository name:** `portfolio` (or `amankhan-portfolio`)
4. **Description:** "Personal Portfolio Website - Applied LLM Engineer & AI/ML Specialist"
5. Select **"Public"** (required for free GitHub Pages)
6. **DO NOT** check "Add a README file" (we already have files)
7. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**
1. After creating the repo, you'll see "uploading an existing file" link
2. Click it OR drag and drop all files from your `portfolio` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `profile-image.jpg`
   - `README.md` (optional)
   - `DEPLOYMENT_GUIDE.md` (optional)
3. Scroll to bottom → Type commit message: **"Initial portfolio deployment"**
4. Click **"Commit changes"**

**Option B: Using GitHub Desktop (If Installed)**
1. Download GitHub Desktop: https://desktop.github.com
2. File → Add Local Repository → Select your `portfolio` folder
3. Write commit message: "Initial portfolio deployment"
4. Click "Commit to main"
5. Click "Publish repository"

**Option C: Using Git Command Line**
```bash
cd /Users/amankhan/Downloads/portfolio
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
*(Replace YOUR_USERNAME with your GitHub username)*

### Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** tab (top right)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select: **"Deploy from a branch"**
4. **Branch:** Select `main` (or `master`)
5. **Folder:** Select `/ (root)`
6. Click **"Save"**

### Step 4: Get Your URL

1. Wait 1-2 minutes for GitHub to build your site
2. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/portfolio
   ```
   *(Replace YOUR_USERNAME with your GitHub username)*

3. To find your exact URL:
   - Go back to **Settings** → **Pages**
   - You'll see: **"Your site is published at: https://..."**

### Step 5: Add to LinkedIn

1. Copy your GitHub Pages URL (from Step 4)
2. Go to LinkedIn → Your Profile → **"Edit profile"**
3. Find **"Contact info"** section → Click **"Edit"**
4. Under **"Website"**, click **"Add website"**
5. **URL:** Paste your GitHub Pages URL
   - Example: `https://amankhan27.github.io/portfolio`
6. **Type:** Select "Portfolio" or "Personal Website"
7. Click **"Save"**

---

## 🎉 Done!

Your portfolio is now:
- ✅ Live on GitHub Pages (forever free)
- ✅ Accessible via permanent URL
- ✅ Linked on your LinkedIn profile
- ✅ Professional and ready to share!

---

## 🔄 Updating Your Portfolio Later

### Using GitHub Web Interface:
1. Go to your repository on GitHub
2. Click on any file (e.g., `index.html`)
3. Click **"Edit"** (pencil icon)
4. Make your changes
5. Scroll down → Commit message: "Update portfolio content"
6. Click **"Commit changes"**
7. Changes go live in 1-2 minutes automatically!

### Using Git Command Line:
```bash
cd /Users/amankhan/Downloads/portfolio
# Make your changes to files
git add .
git commit -m "Update portfolio content"
git push
```

---

## ❓ Troubleshooting

**"404 - Page not found" after deployment?**
- Wait 2-3 minutes (GitHub needs time to build)
- Make sure `index.html` is in the root folder
- Check Settings → Pages to ensure it's enabled

**Image not showing?**
- Verify `profile-image.jpg` is uploaded to the repository
- Check that file name matches exactly (case-sensitive)

**URL not working?**
- Make sure repository is set to **"Public"** (Settings → General → Change visibility)
- Verify GitHub Pages is enabled (Settings → Pages)

---

## 📝 Your Portfolio URL Format

Once deployed, your URL will be:
```
https://YOUR_USERNAME.github.io/REPOSITORY_NAME
```

**Example:**
- Username: `amankhan27`
- Repository: `portfolio`
- URL: `https://amankhan27.github.io/portfolio`

---

**Need help? Let me know if you run into any issues!** 🚀

