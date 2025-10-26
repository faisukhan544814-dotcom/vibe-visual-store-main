# Mama's Compass - Development Guide

## 🚀 Quick Start

### Environment Setup
```bash
# 1. Clone the repository
git clone <repository-url>
cd mamas-compass

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:5173
```

## 🏗️ Architecture Overview

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast HMR and optimized builds)
- **UI Library**: shadcn/ui (Radix UI primitives + Tailwind)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React

### Project Structure Philosophy
```
src/
├── components/     # Reusable UI components
├── pages/         # Route-based page components
├── data/          # Business logic and data models
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Static resources
```

## 📁 Component Organization

### UI Components (`src/components/ui/`)
These are shadcn/ui components - **DO NOT MODIFY** directly. Use the shadcn CLI to add/update:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
```

### Custom Components (`src/components/`)
- **Header.tsx**: Main navigation with category dropdowns
- **Footer.tsx**: Site footer with links and info
- **ProductCard.tsx**: Product display component
- **GuideCard.tsx**: Blog/guide preview card
- **PriceRange.tsx**: Price filter slider component
- **InfantFormulaDropdown.tsx**: Category navigation dropdown

### Page Components (`src/pages/`)
Each page represents a route in the application:
- **Home.tsx**: Landing page with hero, featured products, guides
- **InfantFormula.tsx**: Category page with filters and product grid
- **Diapers.tsx**: Diaper category with specialized filters
- **FeedingNursery.tsx**: Feeding & nursery products
- **BabyGear.tsx**: Baby gear and accessories
- **ProductDetail.tsx**: Individual product page
- **BlogPost.tsx**: Blog article page
- **SignIn.tsx / SignUp.tsx**: Authentication pages

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices
```tsx
// ✅ Good: Use semantic spacing
<div className="p-4 mb-6 rounded-lg">

// ✅ Good: Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ✅ Good: Use design system colors
<button className="bg-pink-500 hover:bg-pink-600">

// ❌ Avoid: Arbitrary values unless necessary
<div className="p-[13px]">
```

### Color Palette
```css
/* Primary Colors */
--pink-500: #EC4899;     /* Primary brand color */
--pink-600: #DB2777;     /* Hover states */

/* Category Colors */
--pink-100: #FCE7F3;     /* Infant Formula */
--green-100: #DCFCE7;    /* Diapers */
--purple-100: #F3E8FF;   /* Feeding & Nursery */
--blue-100: #DBEAFE;     /* Baby Gear */
```

### Typography
```tsx
// Headings: Playfair Display
<h1 className="font-bold text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>

// Body text: Default system fonts
<p className="text-gray-600 text-base">
```

## 📊 Data Management

### Product Data Structure
```typescript
interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'infantFormula' | 'diapers' | 'feedingNursery' | 'babyGear';
  subcategory: string;
  features: string[];
  description: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  retailerPrices: RetailerPrice[];
}
```

### Adding New Products
```typescript
// In src/data/products.ts
export const products: Product[] = [
  {
    id: 'unique-product-id',
    title: 'Product Name',
    price: 29.99,
    image: 'https://example.com/image.jpg',
    category: 'infantFormula',
    subcategory: 'Newborn (0-3 months)',
    features: ['Feature 1', 'Feature 2'],
    description: 'Detailed description...',
    rating: 4.5,
    reviewCount: 123,
    inStock: true,
    retailerPrices: [
      { retailer: 'Amazon', price: 29.99, url: 'https://amazon.com/...' },
      { retailer: 'Target', price: 31.99, url: 'https://target.com/...' }
    ]
  }
];
```

## 🛣️ Routing Structure

### Route Configuration
```typescript
// In src/App.tsx
<Routes>
  <Route path="/" element={<Navigate to="/signin" replace />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/home" element={<Home />} />
  <Route path="/infant-formula" element={<InfantFormula />} />
  <Route path="/diapers" element={<Diapers />} />
  <Route path="/feeding-nursery" element={<FeedingNursery />} />
  <Route path="/baby-gear" element={<BabyGear />} />
  <Route path="/product/:productId" element={<ProductDetail />} />
  <Route path="/blog/:blogId" element={<BlogPost />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Navigation Patterns
```tsx
// Link to category pages
<Link to="/infant-formula">Infant Formula</Link>

// Link to product details
<Link to={`/product/${product.id}`}>View Product</Link>

// Link to blog posts
<Link to={`/blog/${blogPost.id}`}>Read Article</Link>
```

## 🔧 Development Workflow

### Adding New Features

1. **Create Component**
```bash
# Create new component file
touch src/components/NewComponent.tsx
```

2. **Component Template**
```tsx
import React from 'react';

interface NewComponentProps {
  // Define props here
}

const NewComponent: React.FC<NewComponentProps> = ({ }) => {
  return (
    <div className="p-4">
      {/* Component content */}
    </div>
  );
};

export default NewComponent;
```

3. **Add to Parent Component**
```tsx
import NewComponent from '@/components/NewComponent';

// Use in JSX
<NewComponent />
```

### Adding New Pages

1. **Create Page Component**
```bash
touch src/pages/NewPage.tsx
```

2. **Page Template**
```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Page content */}
      </main>
      
      <Footer />
    </div>
  );
};

export default NewPage;
```

3. **Add Route**
```tsx
// In src/App.tsx
<Route path="/new-page" element={<NewPage />} />
```

### State Management Patterns

```tsx
// Local state for UI
const [isOpen, setIsOpen] = useState(false);

// Form state with React Hook Form
const { register, handleSubmit, formState: { errors } } = useForm();

// Server state with React Query
const { data: products, isLoading, error } = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts
});
```

## 🧪 Testing Guidelines

### Component Testing
```tsx
// Example test structure
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

test('renders product card with title', () => {
  const mockProduct = {
    id: '1',
    title: 'Test Product',
    price: 29.99,
    // ... other required fields
  };
  
  renderWithRouter(<ProductCard product={mockProduct} />);
  expect(screen.getByText('Test Product')).toBeInTheDocument();
});
```

## 🚀 Build and Deployment

### Development Build
```bash
npm run dev          # Start dev server
npm run build:dev    # Build in development mode
```

### Production Build
```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Build Output
```
dist/
├── assets/          # Bundled CSS and JS files
├── index.html       # Main HTML file
└── ...             # Other static assets
```

## 🔍 Debugging Tips

### Common Issues

1. **Import Path Errors**
```tsx
// ✅ Use absolute imports with @/ alias
import Header from '@/components/Header';

// ❌ Avoid relative imports for shared components
import Header from '../../../components/Header';
```

2. **TypeScript Errors**
```tsx
// ✅ Define proper interfaces
interface ProductProps {
  product: Product;
}

// ❌ Avoid 'any' type
const product: any = {};
```

3. **Styling Issues**
```tsx
// ✅ Use Tailwind classes consistently
<div className="flex items-center justify-between">

// ❌ Mix Tailwind with inline styles
<div className="flex" style={{ alignItems: 'center' }}>
```

### Development Tools
- **React Developer Tools**: Browser extension for React debugging
- **Tailwind CSS IntelliSense**: VS Code extension for class suggestions
- **TypeScript**: Built-in type checking and IntelliSense
- **ESLint**: Code quality and consistency checking

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)

### Design Resources
- [Figma Design System](https://figma.com) - Original design reference
- [Playfair Display Font](https://fonts.google.com/specimen/Playfair+Display)
- [Lucide Icons](https://lucide.dev/)

---

**Happy Coding! 🎉**