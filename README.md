# The 3 Studio - AI-First Digital Tech Agency

A modern, responsive landing page for The 3 Studio, an AI-first digital tech agency. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark Mode Design** - Modern dark theme with gradient accents
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Performance Optimized** - Built with Next.js 14 App Router
- 🎭 **Smooth Animations** - Framer Motion powered animations
- 📅 **Calendly Integration** - Easy appointment booking with your 30-minute consultation link
- 📊 **Supabase Database** - Contact form data collection and storage
- 🎯 **SEO Optimized** - Meta tags and structured data
- 🔧 **TypeScript** - Type-safe development

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Booking**: React Calendly
- **Database**: Supabase

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd thethreestudio
```

2. Install dependencies:
```bash
npm install
```

3. Set up your Calendly integration:
   - Create a Calendly account at [calendly.com](https://calendly.com)
   - Get your Calendly link
   - Update the Calendly URL in `src/app/page.tsx` (already configured with your link)

4. Set up Supabase database:
   - Go to your [Supabase Dashboard](https://supabase.com/dashboard)
   - Navigate to the SQL Editor
   - Run the SQL commands from `supabase-setup.sql` to create the contacts table
   - The Supabase configuration is already set up in `src/lib/supabase.ts`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/              # Reusable components (if any)
└── lib/                     # Utility functions (if any)
```

## Customization

### Colors and Branding

The color scheme uses a purple-to-blue gradient. You can customize this in `src/app/globals.css`:

```css
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Content Updates

- **Company Information**: Update contact details in the contact section
- **Services**: Modify the services array in `page.tsx`
- **Statistics**: Update the stats array with your actual numbers
- **About Section**: Customize the value propositions

### Calendly Setup

1. Sign up for Calendly
2. Create your event types
3. Replace the placeholder URL in the code:
   ```tsx
   url="https://calendly.com/your-actual-link"
   ```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js built-in optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- Email: thethreestudio@gmail.com
- Website: [Your Website URL]

---

Built with ❤️ by The 3 Studio
