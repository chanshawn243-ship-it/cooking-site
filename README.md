# 🍳 Culinary Canvas - Interactive Cooking Website

A premium, visually stunning responsive website designed to teach people how to cook with professional guidance and interactive lessons.

## ✨ Features

### 1. **Hero Landing Page**
- Captivating headline and call-to-action buttons
- Gradient backgrounds with animated elements
- Deep forest green and warm terracotta color scheme
- Smooth scroll navigation

### 2. **Recipe Index**
- Searchable recipe grid with beautiful card designs
- 4 featured recipes with mock data:
  - The Perfect French Omelette
  - Artisan Sourdough Bread
  - Creamy Carbonara
  - Pan-Seared Salmon
- Real-time search filtering
- Responsive grid layout

### 3. **Interactive Cooking Mode**
- Step-by-step recipe guidance
- Clickable progress checkboxes
- Real-time progress tracking with animated progress bar
- Completion celebration message
- Detailed ingredients and cooking instructions

### 4. **Kitchen Essentials Hub**
- **Knife Skills Section**: Grip techniques, claw hand method, rocking motion
- **Heat Control Mastery**: High heat searing, medium heat cooking, low heat techniques
- Professional tips and best practices

## 🎨 Design Highlights

- **Color Palette**: Deep forest greens (#065f46), warm terracottas (#f97316), clean off-whites
- **Typography**: Elegant Playfair Display for headlines, Lora serif for body text
- **Effects**: Smooth hover animations, ripple buttons, card elevation on hover
- **Responsive**: Fully mobile-responsive design
- **Performance**: Instant load with no build process required

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styling
├── script.js           # Interactive JavaScript
├── package.json        # Project metadata
└── README.md           # This file
```

## 🚀 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Tailwind CSS + Custom CSS
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: Google Fonts (Playfair Display, Lora, Inter)

## 🛠️ Local Development

### Option 1: Python HTTP Server
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### Option 2: Using Node.js http-server
```bash
npm install -g http-server
http-server
```

## 🌐 Netlify Deployment

### Quick Start Guide

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```
This will open your browser to authenticate with GitHub.

3. **Deploy Your Site**
```bash
netlify deploy --prod --dir=.
```

4. **Or Interactive Deploy**
```bash
netlify deploy --dir=.
# Then use the preview URL to test
# When ready: netlify deploy --prod --dir=.
```

### First-Time Setup (If Not Linked)
```bash
# Navigate to your project folder
cd /path/to/cooking-site

# Initialize and deploy
netlify init
# Follow prompts to create a new site or link existing

# Deploy
netlify deploy --prod --dir=.
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Usage

1. **Browse Recipes**: Start at the Recipe Index and search for dishes
2. **Interactive Cooking**: Click any recipe to load the step-by-step guide
3. **Track Progress**: Check off each step as you complete them
4. **Learn Techniques**: Visit Kitchen Essentials Hub for professional tips

## 📝 Recipe Data Structure

Each recipe includes:
- Title and emoji identifier
- Difficulty level (Easy, Intermediate, Advanced)
- Estimated cooking time
- Ingredient list
- Detailed step-by-step instructions
- Description

## 🎨 Customization

### Changing Colors
Edit the `:root` variables in `styles.css`:
```css
:root {
  --primary-green: #065f46;
  --primary-orange: #f97316;
  --light-cream: #faf5f0;
  --stone-dark: #292524;
}
```

### Adding New Recipes
Edit the `recipes` array in `script.js`:
```javascript
const recipes = [
  {
    id: 5,
    title: "Your Recipe Title",
    emoji: "🍲",
    difficulty: "Easy",
    time: "30 mins",
    description: "Recipe description...",
    ingredients: [...],
    steps: [...]
  }
];
```

## 📄 License

MIT License - Feel free to use this for personal or commercial projects.

## 🙌 Credits

Built with ❤️ for cooking enthusiasts everywhere.

---

**Ready to cook? Deploy your site and start teaching the world! 🍳**