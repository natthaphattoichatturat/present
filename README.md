# Smart HR System Presentation

A professional Next.js presentation website showcasing the Smart HR Management System powered by LINE Official Account integration.

## 🚀 Features

### Presentation Highlights
- **Dual LINE OA Architecture** - Employee and HR management channels
- **Employee Features** - Check-in/out, leave requests, OT tracking
- **HR Management** - Employee CRUD, approval workflows, analytics
- **AI Integration** - Chatbot assistant and intelligent insights
- **Technology Stack** - Modern web technologies showcase

### Design Features
- Smooth scrolling animations
- Gradient backgrounds and glass-morphism effects
- Fully responsive layout (mobile to desktop)
- Professional color scheme (Blue, Green, Teal)
- Modern typography and spacing

## 📦 Installation

```bash
# Navigate to project directory
cd /Users/piw/Downloads/smart-hr-presentation

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🖼️ Adding Screenshots

The presentation uses image placeholders by default. To add actual screenshots:

1. **Place your images** in the `/public/images/` folder:
   ```
   public/
   └── images/
       ├── IMG_5229.PNG  # Employee LINE interface
       ├── IMG_5218.PNG  # Registration form
       ├── IMG_5237.PNG  # Check-out success
       ├── IMG_5238.PNG  # Check-in success
       ├── IMG_5216.PNG  # Leave request
       ├── IMG_5219.PNG  # Personal OT viewer
       ├── IMG_5239.PNG  # HR LINE interface
       ├── IMG_5225.PNG  # Admin registration
       ├── IMG_5223.PNG  # Employee management
       ├── IMG_5221.PNG  # Leave approval
       ├── IMG_5224.PNG  # OT monitoring
       ├── IMG_5240.PNG  # AI dashboard
       ├── IMG_5226.PNG  # Meeting scheduler
       ├── IMG_5227.PNG  # AI assistant
       └── IMG_5222.PNG  # Chatbot conversation
   ```

2. **Update the code** in `/app/page.tsx`:
   
   Replace placeholder components:
   ```tsx
   <ImagePlaceholder alt="Employee LINE OA Interface" src="IMG_5229.PNG" />
   ```
   
   With actual Image components:
   ```tsx
   <Image 
     src="/images/IMG_5229.PNG" 
     alt="Employee LINE OA Interface" 
     width={400} 
     height={800}
     className="w-full h-auto"
   />
   ```

## 🎨 Customization

### Colors
The presentation uses a cohesive color palette defined in Tailwind CSS classes:

- **Primary Blue Gradient**: `from-blue-900 via-blue-700 to-teal-600`
- **Green Gradient**: `from-green-500 to-teal-500`
- **Dark Sections**: `bg-gray-900`, `bg-blue-900`
- **Accent Colors**: Green, Teal, Indigo, Purple

### Content
Edit `/app/page.tsx` to customize:
- Hero section text and statistics
- Feature descriptions
- Technology stack information
- Benefits and key points
- Contact information
- Footer details

### Layout
- All sections are wrapped in `<section>` tags
- Grid layouts use Tailwind's responsive classes
- Adjust spacing with `py-24`, `px-6`, etc.
- Modify breakpoints: `md:`, `lg:`, `xl:`

## 📱 Responsive Design

The presentation is fully responsive:
- **Mobile** (< 768px): Single column layout
- **Tablet** (768px - 1024px): 2-column grid
- **Desktop** (> 1024px): 3-column grid
- **Large screens**: Centered with max-width container

## 🎯 Presentation Guide

### Recommended Flow (15-20 minutes)

1. **Introduction (2 min)** - Hero section, system overview
2. **Architecture (2 min)** - Dual LINE OA explanation
3. **Employee Features (5 min)** - Walk through employee capabilities
4. **HR Features (7 min)** - Detailed HR management tools
5. **Technology (2 min)** - Tech stack and integrations
6. **Benefits (2 min)** - Key advantages summary

### Tips for Presenting

- Open in full-screen mode (F11) for best experience
- Scroll smoothly through each section
- Pause at screenshots to explain functionality
- Emphasize automation and AI features
- Highlight security measures
- Address Q&A at the end

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended) or any Node.js hosting

## 📊 Project Structure

```
smart-hr-presentation/
├── app/
│   ├── page.tsx          # Main presentation page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/
│   └── images/          # Screenshot images (add your own)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Build the application
npm run build

# The output will be in .next/ folder
# Deploy this folder to any Node.js hosting service
```

## 🔧 Troubleshooting

### Images not loading
- Ensure images are in `/public/images/` folder
- Check image file names match exactly (case-sensitive)
- Verify Next.js Image component import

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Styling issues
```bash
# Regenerate Tailwind
npx tailwindcss -i ./app/globals.css -o ./output.css --watch
```

## 📄 License

2025 E-Cloud Technology. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: info@smarthr.com
- Website: www.smarthr.com

---

**Note**: This is a presentation website designed to showcase the Smart HR System to potential clients. Customize the content, add real screenshots, and adjust branding as needed for your specific use case.
