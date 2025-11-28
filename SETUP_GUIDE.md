# Setup Guide - Adding Real Screenshots

## Quick Start

Your presentation is currently using image placeholders. Follow these steps to add real LINE OA screenshots.

## Step 1: Prepare Your Screenshots

You need these 12 screenshots from your LINE OA system:

### Employee LINE OA Screenshots
- `IMG_5229.PNG` - Main LINE interface showing menu/chat
- `IMG_5218.PNG` - Employee registration form
- `IMG_5237.PNG` - Check-out success message
- `IMG_5238.PNG` - Check-in success notification
- `IMG_5216.PNG` - Leave request form
- `IMG_5219.PNG` - Personal OT hours viewer

### HR LINE OA Screenshots
- `IMG_5239.PNG` - HR LINE interface/menu
- `IMG_5225.PNG` - Admin registration with password
- `IMG_5223.PNG` - Employee management system (4 panels)
- `IMG_5221.PNG` - Leave approval card/interface
- `IMG_5224.PNG` - OT hours monitoring dashboard
- `IMG_5240.PNG` - AI-powered analytics dashboard
- `IMG_5226.PNG` - Employee meeting scheduler/search
- `IMG_5227.PNG` - AI assistant capabilities screen
- `IMG_5222.PNG` - AI chatbot conversation example

## Step 2: Add Images to Project

1. **Copy your screenshots** to the `/public/images/` folder:
   ```bash
   # From your project root
   cp /path/to/your/screenshots/*.PNG public/images/
   ```

2. **Verify images are in place**:
   ```bash
   ls public/images/
   ```
   
   You should see all 12 PNG files listed.

## Step 3: Update the Code

Open `/app/page.tsx` and replace all `<ImagePlaceholder>` components with real `<Image>` components.

### Find and Replace Pattern

**OLD (Placeholder):**
```tsx
<ImagePlaceholder alt="Employee LINE OA Interface" src="IMG_5229.PNG" />
```

**NEW (Real Image):**
```tsx
<Image 
  src="/images/IMG_5229.PNG" 
  alt="Employee LINE OA Interface" 
  width={400} 
  height={800}
  className="w-full h-auto"
/>
```

### All Replacements Needed

1. **Employee LINE Interface** (around line 180):
```tsx
<Image 
  src="/images/IMG_5229.PNG" 
  alt="Employee LINE OA Interface" 
  width={400} 
  height={800}
  className="w-full h-auto"
/>
```

2. **Employee Registration** (around line 215):
```tsx
<Image 
  src="/images/IMG_5218.PNG" 
  alt="Employee Registration" 
  width={400} 
  height={800}
  className="w-full h-auto"
/>
```

3. **Check-out Success** (around line 250):
```tsx
<Image 
  src="/images/IMG_5237.PNG" 
  alt="Check-out Success" 
  width={400} 
  height={800}
  className="w-full h-auto"
/>
```

4. **Check-in Success** (around line 255):
```tsx
<Image 
  src="/images/IMG_5238.PNG" 
  alt="Check-in Success" 
  width={400} 
  height={800}
  className="w-full h-auto"
/>
```

5. **Continue for all other images...**

## Step 4: Test Locally

```bash
# Run development server
npm run dev

# Open browser
http://localhost:3000

# Verify all images load correctly
```

## Step 5: Build and Deploy

```bash
# Build for production
npm run build

# Test production build
npm start

# If everything works, deploy to Vercel or your hosting
vercel
```

## Alternative: Bulk Update Script

If you want to update all images at once, you can use this approach:

1. **Save this as `update-images.sh`**:
```bash
#!/bin/bash

# Replace all ImagePlaceholder with real Image components
sed -i '' 's|<ImagePlaceholder alt="\(.*\)" src="\(.*\)" />|<Image src="/images/\2" alt="\1" width={400} height={800} className="w-full h-auto" />|g' app/page.tsx

echo "✅ All image placeholders replaced!"
```

2. **Run the script**:
```bash
chmod +x update-images.sh
./update-images.sh
```

## Troubleshooting

### Images Not Showing

**Check 1**: Verify image paths
```bash
ls -la public/images/
```

**Check 2**: Image file names must match exactly (case-sensitive)
- Correct: `IMG_5229.PNG`
- Wrong: `img_5229.png`

**Check 3**: Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

### Build Errors

**Error**: "Module not found"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Error**: "Image optimization failed"
- Check `next.config.js` has `images: { unoptimized: true }`

### Image Quality Issues

If images appear blurry or pixelated:

1. **Use higher resolution screenshots** (at least 400x800px)
2. **Adjust quality in next.config.js**:
```js
images: {
  unoptimized: false,
  formats: ['image/webp'],
  quality: 90,
}
```

## Image Optimization Tips

### For Best Results

1. **Screenshot at highest resolution** possible from your phone
2. **Crop unnecessary parts** (status bar, navigation if needed)
3. **Keep aspect ratio** consistent (9:16 for phone screenshots)
4. **Optimize file size** before adding:
   ```bash
   # Using ImageMagick
   convert input.PNG -quality 85 output.PNG
   ```

### Recommended Dimensions
- Phone screenshots: 400x800px or 800x1600px
- Horizontal images: 1200x600px
- Icons/logos: 512x512px

## Need Help?

If you encounter issues:
1. Check the browser console for errors (F12)
2. Review Next.js Image documentation: https://nextjs.org/docs/app/api-reference/components/image
3. Verify all file paths are correct
4. Ensure images are in PNG format

## Next Steps

Once images are added:
1. ✅ Test on mobile devices
2. ✅ Check loading performance
3. ✅ Review all sections for completeness
4. ✅ Deploy to production
5. ✅ Share presentation link with clients

---

**Tip**: Keep original high-quality screenshots backed up in case you need to update or replace them later.

