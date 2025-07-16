# Technical Context: n3tz.io

## Development Environment
- **Node.js**: >=18.14.1
- **Package Manager**: Yarn
- **Build Tool**: Astro CLI
- **Development Server**: `yarn dev` (hot reload enabled)

## Core Dependencies
```json
{
  "astro": "^4.2.1",
  "@astrojs/tailwind": "5.1.0",
  "@astrojs/netlify": "^5.0.0",
  "@astrojs/sitemap": "^3.0.5",
  "@astrojs/rss": "^4.0.2",
  "typescript": "^5.3.3"
}
```

## Styling System
- **Framework**: Tailwind CSS 3.4.1
- **Typography**: @tailwindcss/typography plugin
- **Fonts**: @fontsource-variable/inter
- **Icons**: @iconify-json/tabler, @iconify-json/flat-color-icons
- **Custom Colors**: Defined in config.yaml

## Content Management
- **Blog**: Markdown files in `src/content/post/`
- **Configuration**: YAML-based in `src/config.yaml`
- **Images**: Optimized with unpic library
- **SEO**: @astrolib/seo integration

## Internationalization
- **Languages**: English (default), French, Spanish, German
- **Implementation**: Custom i18n utilities in `src/i18n/`
- **Routing**: Language-prefixed routes (`/de/`, `/fr/`, `/es/`)
- **Content**: Separate page files per language

## Performance Optimizations
- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Automatic image processing
- **Code Splitting**: Component-based loading
- **CDN**: Netlify global distribution

## Development Workflow
```bash
# Development
yarn install
yarn dev          # Start dev server on localhost:4321

# Production
yarn build        # Generate static site
yarn preview      # Preview production build

# Code Quality
yarn format       # Prettier formatting
yarn lint:eslint  # ESLint checking
```

## Deployment Configuration
- **Platform**: Netlify
- **Build Command**: `yarn build`
- **Publish Directory**: `dist/`
- **Auto-deploy**: Triggered on main branch push
- **Environment**: Production optimized

## SEO & Analytics
- **Google Analytics**: G-MBLH60DTL5
- **Site Verification**: Google Search Console integrated
- **Sitemap**: Auto-generated XML sitemap
- **RSS**: Blog feed generation
- **Meta Tags**: Comprehensive OpenGraph and Twitter cards

## Security & Performance
- **Headers**: Custom security headers in `public/_headers`
- **SSL**: Automatic HTTPS via Netlify
- **Performance**: Lighthouse optimized
- **Accessibility**: WCAG compliant components

## File Structure Conventions
- **Components**: PascalCase naming
- **Pages**: kebab-case routing
- **Assets**: Organized by type (images, styles)
- **Utils**: Functional helpers and utilities
- **Types**: TypeScript definitions in `.d.ts` files

## Configuration Files
- **astro.config.mjs**: Astro framework configuration
- **tailwind.config.cjs**: Tailwind CSS customization
- **tsconfig.json**: TypeScript compiler options
- **netlify.toml**: Deployment configuration
- **.eslintrc.js**: Code linting rules
- **.prettierrc.js**: Code formatting rules
