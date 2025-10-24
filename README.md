# Developer Portfolio

A clean, modern portfolio website built with Vite, React, TypeScript, and Tailwind CSS to showcase your projects.

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Getting Started

### Prerequisites

- Node.js 16+ installed

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

Edit `src/App.tsx` to customize:

1. **Your Information**: Update your name, GitHub, and LinkedIn links
2. **Projects**: Modify the `projects` array with your actual projects
3. **Colors**: Adjust Tailwind classes for different color schemes
4. **Layout**: Modify the component structure as needed

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── App.tsx          # Main portfolio component
│   ├── App.css          # Custom styles (if needed)
│   ├── index.css        # Tailwind imports
│   └── main.tsx         # App entry point
├── public/              # Static assets
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies
```

## 🚢 Deployment

This static site can be deployed to:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag & drop the `dist` folder or connect to GitHub
- **GitHub Pages**: Use GitHub Actions to deploy

### Quick Deploy to Vercel

```bash
npm install -g vercel
npm run build
vercel --prod
```

## 📝 License

MIT - Feel free to use this template for your own portfolio!
