# System Patterns: n3tz.io Architecture

## Technology Stack
- **Framework**: Astro 4.2.1 (Static Site Generation)
- **Styling**: Tailwind CSS with custom color scheme
- **Language**: TypeScript
- **Deployment**: Netlify (auto-deployment from main branch)
- **Analytics**: Google Analytics (G-MBLH60DTL5)

## Architecture Overview
```
src/
├── components/          # Reusable UI components
│   ├── widgets/        # Page section components (Hero, Features, etc.)
│   ├── ui/            # Basic UI elements (Button, Form, etc.)
│   └── common/        # Shared utilities (Analytics, Meta, etc.)
├── layouts/           # Page layout templates
├── pages/             # Route-based pages with i18n support
├── assets/            # Static assets (images, styles)
├── content/           # Blog content (Markdown)
├── i18n/             # Internationalization (en, fr, es, de)
└── utils/            # Helper functions
```

## Key Design Patterns

### Component Architecture
- **Widget-based**: Large page sections as reusable widgets
- **Composition**: Components composed through Astro slots
- **Responsive**: Mobile-first design with Tailwind breakpoints

### Content Management
- **Configuration-driven**: Main content in `src/config.yaml`
- **Markdown content**: Blog posts in `src/content/post/`
- **Multi-language**: i18n support for 4 languages

### Color Scheme (Current)
```css
primary: rgb(238, 11, 116)    # Hot pink
secondary: rgb(250, 86, 23)   # Orange
accent: rgb(250, 86, 23)      # Orange
light: rgb(255, 163, 253)     # Light pink
```

## Page Structure Patterns

### Homepage Components
1. **Hero2**: Main banner with CTA
2. **Content**: About section with image
3. **Features**: Service highlights grid
4. **Content2**: Portfolio showcase (3 projects)
5. **FAQs**: Common questions
6. **CallToAction**: Bottom conversion section
7. **BlogLatestPosts**: Recent blog entries

### Navigation Pattern
- **Header**: Logo + Navigation + Language picker
- **Footer**: Links + Contact info
- **Mobile**: Hamburger menu with toggle

## Content Patterns

### Current Messaging Structure
- **Hero**: Emotional appeal ("Building Innovative Web Projects Together")
- **About**: Community/collective focus
- **Services**: Technical capabilities
- **Portfolio**: Past project showcases
- **FAQ**: Technical and process questions

### SEO Patterns
- **Meta titles**: Template-based with site name
- **Descriptions**: Service-focused
- **OpenGraph**: Social sharing optimization
- **Structured data**: Blog post markup

## Deployment Patterns
- **Auto-deployment**: Git push triggers build
- **Environment**: Production on Netlify
- **Performance**: Lighthouse optimized
- **CDN**: Global content delivery

## Internationalization Pattern
- **Route-based**: `/de/`, `/fr/`, `/es/` prefixes
- **Content**: Translated pages for major routes
- **UI**: Translated navigation and common elements
- **Fallback**: English as default language
