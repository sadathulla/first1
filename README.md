# Valentine's Day Proposal Page 💕

A romantic and interactive Valentine's Day proposal page with a playful twist!

## Features

- **Beautiful Design**: Gradient background with animated heart effects
- **Interactive "No" Button**: Moves away when you try to click it!
- **Celebration Animation**: Clicking "Yes" triggers balloons and crackers
- **Responsive Design**: Works perfectly on mobile and desktop
- **Sound Effects**: Plays celebration notes when accepted

## How to Use

1. Click the link to open the proposal page
2. Try to click "No" - it will run away from your cursor! 😄
3. Click "Yes" to see the celebration with balloons and crackers 🎉

## Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a new GitHub repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `valentine-proposal`
   - Make it public (so you can share the link)
   - Don't initialize with README (we already have one)

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/valentine-proposal.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Build and deployment", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Get your link**:
   - Wait a few minutes for deployment
   - Your site will be available at: `https://YOUR_USERNAME.github.io/valentine-proposal/`

### Option 2: Netlify/Vercel

You can also deploy to Netlify or Vercel by dragging and dropping the project folder.

## Customization

### Change the Text
Edit `index.html` to modify the proposal message:
```html
<h1 class="proposal-text">Will You Be My Valentine?</h1>
```

### Change Colors
Edit `style.css` to customize the color scheme:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add Your Own Message
Edit the celebration message in `script.js`:
```javascript
message h2.textContent = "Your custom message here!";
```

## Technical Details

- **HTML5**: Semantic structure
- **CSS3**: Animations and responsive design
- **Vanilla JavaScript**: No dependencies required
- **Web Audio API**: For celebration sounds

## Sharing

Once deployed, you can share the link with your Valentine! The page works on all modern browsers and mobile devices.

Made with ❤️ for a special someone!
