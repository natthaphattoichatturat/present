# Quick Start Guide

Get your presentation up and running in 5 minutes!

## 🚀 Installation

```bash
# Navigate to project
cd /Users/piw/Downloads/smart-hr-presentation

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📸 Adding Screenshots (Optional but Recommended)

### Quick Method

1. **Copy your LINE OA screenshots** to `public/images/` folder
2. **Run the presentation** - it will show placeholders for now
3. **Update later** when you have all screenshots ready

### Complete Setup

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed instructions on adding real screenshots.

## 🎯 Using the Presentation

### Development Mode
```bash
npm run dev
# Visit: http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
# Visit: http://localhost:3000
```

### For Client Presentation
```bash
# Option 1: Local presentation
npm run build && npm start

# Option 2: Deploy to Vercel
npm i -g vercel
vercel

# You'll get a public URL like: https://your-app.vercel.app
```

## 📱 Presenting

1. **Open in full-screen** (F11 or Fn+F11)
2. **Scroll smoothly** through sections
3. **Pause at key points** to explain
4. **Follow the flow**: Hero → Architecture → Employee → HR → Tech → Benefits → CTA

## 🎨 Quick Customization

### Update Company Info

Edit `/app/page.tsx` - search for these sections:

**Footer** (around line 480):
```tsx
<div>
  <h4 className="text-white font-semibold mb-4">Contact</h4>
  <ul className="space-y-2 text-sm">
    <li>Email: your-email@company.com</li>
    <li>Phone: +66 XX XXX XXXX</li>
    <li>Website: www.yourcompany.com</li>
  </ul>
</div>
```

**CTA Buttons** (around line 465):
```tsx
<button>Schedule a Demo</button>
<button>Contact Sales</button>
```

### Change Colors

All colors use Tailwind classes. Main color schemes:

- **Blue gradient**: `from-blue-900 via-blue-700 to-teal-600`
- **Green gradient**: `from-green-500 to-teal-500`
- **Dark sections**: `bg-gray-900`, `bg-blue-900`

## 📂 Project Structure

```
smart-hr-presentation/
├── app/
│   ├── page.tsx              # Main presentation (EDIT THIS)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/
│   └── images/              # Put your screenshots here
├── README.md                 # Full documentation
├── SETUP_GUIDE.md           # Screenshot setup guide
├── PRESENTATION_TIPS.md     # Presentation best practices
└── QUICK_START.md           # This file
```

## 🔧 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Images not loading
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build errors
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

## 🌐 Deployment Options

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next folder
```

### Docker
```bash
# Build image
docker build -t hr-presentation .

# Run container
docker run -p 3000:3000 hr-presentation
```

### Traditional Hosting
```bash
# Build
npm run build

# Copy these files to server:
# - .next/
# - public/
# - package.json
# - next.config.js

# On server:
npm install --production
npm start
```

## 📚 Learn More

- [README.md](README.md) - Complete documentation
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Add screenshots guide
- [PRESENTATION_TIPS.md](PRESENTATION_TIPS.md) - Presentation best practices
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation

## 🎯 Checklist Before Presenting

- [ ] Tested on actual display/projector
- [ ] All sections scroll smoothly
- [ ] Screenshots loaded (or placeholders acceptable)
- [ ] Custom company info updated
- [ ] Presentation flow rehearsed
- [ ] Backup plan ready (PDF or recording)
- [ ] Q&A preparation done

## 🆘 Need Help?

If you encounter issues:
1. Check [README.md](README.md) for detailed solutions
2. Review [SETUP_GUIDE.md](SETUP_GUIDE.md) for image issues
3. Clear cache and rebuild: `rm -rf .next && npm run build`
4. Check browser console (F12) for errors

## 🚀 You're Ready!

Your presentation is ready to impress clients. Remember:
- Scroll smoothly
- Emphasize automation and AI
- Focus on benefits, not just features
- Be enthusiastic about the solution

**Good luck with your presentation!** 🎉

---

**Quick Commands Cheat Sheet:**
```bash
npm run dev          # Start development
npm run build        # Build for production
npm start            # Run production server
vercel               # Deploy to Vercel
```

