# Mama's Compass - Project Structure

## 📁 Project Overview
Mama's Compass is a React-based e-commerce platform for baby products, built with modern web technologies including Vite, TypeScript, React, shadcn/ui, and Tailwind CSS.

## 🏗️ Directory Structure

```
mama's-compass/
├── 📁 public/                          # Static assets
│   ├── favicon.ico                     # Site favicon
│   ├── placeholder.svg                 # Placeholder image
│   └── robots.txt                      # SEO robots file
│
├── 📁 src/                             # Source code
│   ├── 📁 assets/                      # Static images and media
│   │   ├── guide-1.jpg                 # Guide images (1-3)
│   │   ├── guide-2.jpg
│   │   ├── guide-3.jpg
│   │   ├── hero-bg.jpg                 # Hero background
│   │   ├── product-1.jpg               # Product images (1-6)
│   │   ├── product-2.jpg
│   │   ├── product-3.jpg
│   │   ├── product-4.jpg
│   │   ├── product-5.jpg
│   │   ├── product-6.jpg
│   │   ├── signin-reference.png        # Auth page references
│   │   └── signup-reference.png
│   │
│   ├── 📁 components/                  # React components
│   │   ├── 📁 ui/                      # shadcn/ui components
│   │   │   ├── accordion.tsx           # UI primitives
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── use-toast.ts
│   │   │
│   │   ├── Footer.tsx                  # Site footer component
│   │   ├── GuideCard.tsx               # Guide/blog card component
│   │   ├── Header.tsx                  # Site header with navigation
│   │   ├── InfantFormulaDropdown.tsx   # Category dropdown menu
│   │   ├── PriceRange.tsx              # Price filter component
│   │   └── ProductCard.tsx             # Product display card
│   │
│   ├── 📁 data/                        # Data layer
│   │   └── products.ts                 # Product database and utilities
│   │
│   ├── 📁 hooks/                       # Custom React hooks
│   │   ├── use-mobile.tsx              # Mobile detection hook
│   │   └── use-toast.ts                # Toast notification hook
│   │
│   ├── 📁 lib/                         # Utility libraries
│   │   └── utils.ts                    # Common utility functions
│   │
│   ├── 📁 pages/                       # Page components (routes)
│   │   ├── BabyGear.tsx                # Baby gear category page
│   │   ├── BlogPost.tsx                # Individual blog post page
│   │   ├── Diapers.tsx                 # Diapers category page
│   │   ├── FeedingNursery.tsx          # Feeding & nursery category page
│   │   ├── Home.tsx                    # Homepage
│   │   ├── InfantFormula.tsx           # Infant formula category page
│   │   ├── NotFound.tsx                # 404 error page
│   │   ├── ProductDetail.tsx           # Individual product page
│   │   ├── SignIn.tsx                  # Sign in page
│   │   └── SignUp.tsx                  # Sign up page
│   │
│   ├── App.css                         # App-specific styles
│   ├── App.tsx                         # Main app component with routing
│   ├── index.css                       # Global styles and Tailwind imports
│   ├── main.tsx                        # App entry point
│   └── vite-env.d.ts                   # Vite environment types
│
├── 📁 dist/                            # Build output (generated)
├── 📁 node_modules/                    # Dependencies (generated)
├── 📁 .vscode/                         # VS Code settings
│
├── .gitignore                          # Git ignore rules
├── bun.lockb                           # Bun lock file
├── components.json                     # shadcn/ui configuration
├── eslint.config.js                   # ESLint configuration
├── index.html                          # HTML entry point
├── package-lock.json                   # NPM lock file
├── package.json                        # Project dependencies and scripts
├── postcss.config.js                  # PostCSS configuration
├── PROJECT_STRUCTURE.md               # This file
├── README.md                           # Project documentation
├── tailwind.config.ts                 # Tailwind CSS configuration
├── tsconfig.app.json                  # TypeScript app configuration
├── tsconfig.json                      # TypeScript base configuration
├── tsconfig.node.json                 # TypeScript Node configuration
└── vite.config.ts                     # Vite build configuration
```

## 🎯 Key Features Implemented

### 🏠 Core Pages
- **Authentication**: Sign in/Sign up pages with modern UI
- **Homepage**: Hero section, featured products, expert advice
- **Category Pages**: Infant Formula, Diapers, Feeding & Nursery, Baby Gear
- **Product Details**: Individual product pages with retailer comparison
- **Blog System**: Expert advice articles with detailed content

### 🛍️ E-commerce Features
- **Product Catalog**: 1000+ unique products across all categories
- **Advanced Filtering**: Category, subcategory, and price filters
- **Product Search**: Functional filtering system
- **Retailer Integration**: Price comparison across multiple retailers
- **Product Reviews**: Customer feedback and ratings

### 🎨 Design System
- **Anime/Cartoon Aesthetic**: Custom illustrated hero images
- **Typography**: Playfair Display for headings, modern sans-serif for body
- **Color Scheme**: Pink primary (#EC4899), soft pastels for categories
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: shadcn/ui for consistent UI components

### 🔧 Technical Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM for navigation
- **State Management**: React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library

## 📋 Development Guidelines

### 🗂️ File Organization
- **Components**: Reusable UI components in `/components`
- **Pages**: Route-based page components in `/pages`
- **Data**: Business logic and data models in `/data`
- **Utilities**: Helper functions in `/lib`
- **Hooks**: Custom React hooks in `/hooks`
- **Assets**: Static images and media in `/assets`

### 🎨 Styling Conventions
- Use Tailwind CSS utility classes
- Follow shadcn/ui component patterns
- Maintain consistent spacing (4px grid system)
- Use semantic color names from the design system
- Implement responsive design with mobile-first approach

### 📝 Code Standards
- TypeScript for type safety
- ESLint for code quality
- Consistent naming conventions (camelCase for variables, PascalCase for components)
- Functional components with hooks
- Proper error handling and loading states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd mamas-compass

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 Future Enhancements
- User authentication and profiles
- Shopping cart and checkout
- Order management system
- Advanced search and recommendations
- Mobile app development
- Payment gateway integration
- Inventory management
- Admin dashboard

---

**Project Status**: ✅ Complete MVP with all core features implemented
**Last Updated**: October 2025
**Maintainer**: Development Team