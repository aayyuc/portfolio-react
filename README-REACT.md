# Portfolio with Framer Motion - React Version

A beautiful, modern portfolio website built with React and Framer Motion, featuring a stunning flower field → pond → dive animation sequence.

## ✨ Features

- 🌸 **Animated Flower Field**: Canvas-based flower field with wind effects
- 🌊 **Pond Transition**: Smooth zoom into a beautiful pond
- 🏊 **Dive Animation**: Scroll-triggered dive into underwater world
- 🎨 **Framer Motion**: Smooth, performant animations throughout
- 📱 **Fully Responsive**: Works on all devices
- ⚡ **Vite**: Fast development and build

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── FlowerField.jsx      # Canvas flower field animation
│   │   ├── IntroSection.jsx      # Flower field → pond intro
│   │   ├── UnderwaterSection.jsx # Underwater content area
│   │   ├── Navigation.jsx       # Navbar component
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── styles/
│   │   ├── index.css          # Base styles
│   │   └── App.css            # Component styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── package.json
├── vite.config.js
└── README-REACT.md
```

## 🎯 Key Technologies

- **React 18**: Modern React with hooks
- **Framer Motion**: Animation library for React
- **Vite**: Fast build tool
- **Canvas API**: Flower field rendering

## 🎨 Animation Flow

1. **Initial View**: Flower field with intro text
2. **Scroll Down**: Field zooms in (scale 1 → 3)
3. **Pond Appears**: Pond fades in at center
4. **Continue Scrolling**: Pond scales up (dive effect)
5. **Underwater**: Content appears in underwater environment

## 🛠️ Customization

### Change Flower Colors

Edit `src/components/FlowerField.jsx`:
```javascript
const colors = [
  '#ff6b9d', '#c44569', '#f8b500', '#ffd700',
  // Add your colors here
]
```

### Adjust Animation Speed

Edit `src/components/IntroSection.jsx`:
```javascript
const scale = useTransform(scrollYProgress, [0, 0.5], [1, 3])
// Change [0, 0.5] to adjust scroll range
```

### Modify Pond Size

Edit `src/styles/App.css`:
```css
.pond-container {
  width: 500px !important;  /* Change size */
  height: 500px !important;
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 📄 License

Feel free to use this template for your personal or commercial projects!

---

**Enjoy building your portfolio! 🚀**

