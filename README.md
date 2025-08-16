# Content Whale Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS that exactly matches the Figma design specifications.

## 🎨 Design Features

- **Exact Figma Match**: Pixel-perfect implementation of the original design
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Built with SEO best practices and metadata
- **Performance Focused**: Optimized images and fast loading times

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Lato, Inter)
- **Icons**: Custom SVG icons from Figma design
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📁 Project Structure

```
prelogin_landing/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Home page component
├── components/             # React components
│   ├── Header.tsx         # Navigation header (matches Figma exactly)
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features showcase
│   ├── About.tsx          # About company section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer with links
├── public/                 # Static assets
│   ├── images/            # SVG icons and logos
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
│   └── manifest.json      # PWA manifest
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎯 Key Components

### Header Component
- **Exact Figma Match**: Logo, navigation menu, and CTA button
- **Responsive**: Mobile hamburger menu
- **Interactive**: Dropdown indicators and hover effects
- **Brand Colors**: Uses exact colors from design (#42175B, gradients)

### Navigation Elements
- Content Solutions (with dropdown)
- Resources (with dropdown)
- About Us
- Rank On AI (with icon)
- Let's Talk CTA button

## 🎨 Design Specifications

### Colors
- **Primary**: #42175B (Deep Purple)
- **Secondary**: #8C31C1 (Light Purple)
- **Accent**: #FFC107 (Yellow)
- **Gradients**: Multiple gradient combinations as per design

### Typography
- **Lato**: 400 (Regular), 600 (Semi-bold)
- **Inter**: 500 (Medium)
- **Font Sizes**: 16px base, responsive scaling

### Layout
- **Container**: max-w-7xl (1280px)
- **Padding**: px-15 (60px)
- **Spacing**: Consistent 8px grid system
- **Responsive**: Mobile-first with lg: breakpoints

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prelogin_landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔍 SEO Features

- **Meta Tags**: Comprehensive metadata for social sharing
- **Open Graph**: Facebook and Twitter card optimization
- **Structured Data**: Ready for schema markup
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Core Web Vitals optimization

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Font Loading**: Google Fonts with display=swap
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Deploy with zero configuration

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy with Netlify

### Other Platforms
- **AWS Amplify**: Supports Next.js out of the box
- **DigitalOcean App Platform**: Easy deployment
- **Traditional Hosting**: Export static files with `npm run export`

## 🛠️ Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: '#42175B',
  secondary: '#8C31C1',
  // Add your custom colors
}
```

### Content
Update content in component files:
- `components/Hero.tsx` - Hero section text
- `components/Features.tsx` - Feature descriptions
- `components/About.tsx` - Company information

### Images
Replace images in `public/images/` directory:
- Maintain aspect ratios
- Use SVG for logos and icons
- Optimize PNG/JPG for photos

## 📊 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- LinkedIn Insight Tag

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates

Stay updated with:
- Regular dependency updates
- Security patches
- New features and improvements
- Performance optimizations

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
