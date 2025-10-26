import { useParams, Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, Shield, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  ingredients?: string[];
  directions?: string;
  retailers: {
    name: string;
    price: number;
    logo: string;
    inStock: boolean;
  }[];
}

const productData: { [key: string]: ProductData } = {
  "organic-baby-formula": {
    id: "organic-baby-formula",
    title: "The Gentle Formula Feed",
    subtitle: "Navigating Organic Nutrition for your Baby.",
    price: 29.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviewCount: 1247,
    images: [product1, product1, product1],
    description: "Our premium organic baby formula is specially crafted to provide complete nutrition for your little one. Made with carefully selected organic ingredients and fortified with essential vitamins and minerals, this gentle formula supports healthy growth and development. The easy-to-digest formula is designed to be gentle on sensitive tummies while providing all the nutrients your baby needs.",
    features: [
      "100% Organic ingredients",
      "DHA & ARA for brain development",
      "Iron fortified for healthy growth",
      "Easy to digest proteins",
      "No artificial colors or flavors",
      "Prebiotics for digestive health"
    ],
    specifications: {
      "Age Range": "0-12 months",
      "Size": "800g",
      "Servings": "Approximately 26 servings",
      "Preparation": "Mix with warm water",
      "Storage": "Store in cool, dry place"
    },
    ingredients: [
      "Organic lactose",
      "Organic vegetable oils",
      "Organic whey protein concentrate",
      "Organic skim milk powder",
      "DHA from algae oil",
      "ARA from fungal oil",
      "Vitamins and minerals"
    ],
    directions: "Mix 1 scoop (4.6g) with 30ml of warm water. Stir until completely dissolved. Always prepare fresh for each feeding.",
    retailers: [
      { name: "Amazon", price: 29.99, logo: "🛒", inStock: true },
      { name: "Walmart", price: 31.49, logo: "🏪", inStock: true },
      { name: "Target", price: 30.99, logo: "🎯", inStock: false },
      { name: "CVS", price: 32.99, logo: "💊", inStock: true }
    ]
  },
  "baby-body-cream": {
    id: "baby-body-cream",
    title: "BABY Body Cream",
    subtitle: "Gentle Moisturizing Care for Delicate Skin.",
    price: 24.99,
    rating: 4.6,
    reviewCount: 892,
    images: [product2, product2, product2],
    description: "Our gentle baby body cream is formulated with natural ingredients to keep your baby's delicate skin soft, smooth, and protected. This hypoallergenic cream provides long-lasting moisture without irritation, making it perfect for daily use on sensitive skin.",
    features: [
      "Hypoallergenic formula",
      "Natural moisturizing ingredients",
      "Fragrance-free",
      "Dermatologist tested",
      "Quick absorbing",
      "24-hour moisture protection"
    ],
    specifications: {
      "Size": "200ml",
      "Skin Type": "All skin types, especially sensitive",
      "Age": "0+ months",
      "Application": "Daily use",
      "Texture": "Smooth cream"
    },
    retailers: [
      { name: "Amazon", price: 24.99, logo: "🛒", inStock: true },
      { name: "Walmart", price: 23.49, logo: "🏪", inStock: true },
      { name: "Target", price: 25.99, logo: "🎯", inStock: true },
      { name: "CVS", price: 26.99, logo: "💊", inStock: true }
    ]
  },
  "maternity-pillow": {
    id: "maternity-pillow",
    title: "Maternity Pillow",
    subtitle: "Ultimate Comfort and Support During Pregnancy.",
    price: 49.99,
    rating: 4.7,
    reviewCount: 1156,
    images: [product3, product3, product3],
    description: "This premium maternity pillow is designed to provide optimal support and comfort throughout your pregnancy journey. The ergonomic design supports your growing belly, back, and legs, helping you get the restful sleep you need.",
    features: [
      "Full body support",
      "Ergonomic C-shape design",
      "Hypoallergenic filling",
      "Removable washable cover",
      "Reduces back and hip pain",
      "Versatile positioning"
    ],
    specifications: {
      "Dimensions": "60 x 28 x 7 inches",
      "Weight": "4.5 lbs",
      "Fill": "Polyester fiberfill",
      "Cover": "100% cotton",
      "Care": "Machine washable cover"
    },
    retailers: [
      { name: "Amazon", price: 49.99, logo: "🛒", inStock: true },
      { name: "Walmart", price: 47.99, logo: "🏪", inStock: true },
      { name: "Target", price: 52.99, logo: "🎯", inStock: true },
      { name: "CVS", price: 54.99, logo: "💊", inStock: false }
    ]
  },
  "smart-baby-monitor": {
    id: "smart-baby-monitor",
    title: "Smart Baby Monitor",
    subtitle: "Advanced Monitoring Technology for Peace of Mind.",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.9,
    reviewCount: 2341,
    images: [product4, product4, product4],
    description: "Our state-of-the-art smart baby monitor provides crystal-clear video and audio monitoring with advanced features like sleep tracking, temperature monitoring, and smartphone connectivity. Keep an eye on your little one from anywhere with this reliable monitoring system.",
    features: [
      "HD video quality",
      "Two-way audio communication",
      "Night vision capability",
      "Temperature monitoring",
      "Sleep tracking",
      "Smartphone app connectivity",
      "Motion and sound alerts",
      "Secure encrypted connection"
    ],
    specifications: {
      "Video Quality": "1080p HD",
      "Night Vision": "Up to 15 feet",
      "Audio": "Two-way communication",
      "Connectivity": "WiFi 2.4GHz",
      "App": "iOS and Android compatible",
      "Power": "AC adapter included"
    },
    retailers: [
      { name: "Amazon", price: 89.99, logo: "🛒", inStock: true },
      { name: "Walmart", price: 92.99, logo: "🏪", inStock: true },
      { name: "Target", price: 94.99, logo: "🎯", inStock: true },
      { name: "CVS", price: 99.99, logo: "💊", inStock: true }
    ]
  },
  "newborn-essentials": {
    id: "newborn-essentials",
    title: "Essentials Items for New Born Baby",
    subtitle: "Complete Starter Kit for Your Little One.",
    price: 34.99,
    rating: 4.5,
    reviewCount: 756,
    images: [product5, product5, product5],
    description: "This comprehensive newborn essentials kit includes everything you need to welcome your baby home. Carefully curated with high-quality items that are safe, gentle, and practical for everyday baby care.",
    features: [
      "Complete starter kit",
      "Hospital-grade quality",
      "Hypoallergenic materials",
      "Easy-to-use items",
      "Travel-friendly sizes",
      "Dermatologist approved"
    ],
    specifications: {
      "Kit Includes": "Multiple essential items",
      "Age Range": "0-6 months",
      "Materials": "BPA-free, non-toxic",
      "Packaging": "Reusable storage bag",
      "Weight": "2.3 lbs"
    },
    retailers: [
      { name: "Amazon", price: 34.99, logo: "🛒", inStock: true },
      { name: "Walmart", price: 33.49, logo: "🏪", inStock: true },
      { name: "Target", price: 36.99, logo: "🎯", inStock: true },
      { name: "CVS", price: 37.99, logo: "💊", inStock: false }
    ]
  },
  "baby-carrier": {
    id: "baby-carrier",
    title: "Baby Carrier",
    subtitle: "Ergonomic Design for Comfortable Baby Wearing.",
    price: 59.99,
    rating: 4.8,
    reviewCount: 1834,
    images: [product6, product6, product6],
    description: "Our ergonomic baby carrier provides optimal comfort and support for both parent and baby. Designed with adjustable straps and breathable materials, this carrier promotes healthy hip development while keeping your hands free.",
    features: [
      "Ergonomic hip-healthy design",
      "Adjustable for all body types",
      "Breathable mesh panels",
      "Multiple carrying positions",
      "Padded shoulder straps",
      "Machine washable",
      "Weight distribution system"
    ],
    specifications: {
      "Weight Capacity": "8-33 lbs",
      "Age Range": "3 months - 3 years",
      "Positions": "Front, back, and hip carry",
      "Materials": "100% cotton with mesh",
      "Adjustability": "Fits waist 27-52 inches"
    },
    retailers: [
      { name: "Amazon", price: 59.99, logo: "🛒", inStock: true },
      { name: "Walmart", price: 57.99, logo: "🏪", inStock: true },
      { name: "Target", price: 62.99, logo: "🎯", inStock: true },
      { name: "CVS", price: 64.99, logo: "💊", inStock: true }
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productData[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <Link to="/home">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/home" className="hover:text-pink-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{product.subtitle}</p>
            
            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images and Info */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Images */}
              <div className="space-y-3 sm:space-y-4">
                <div className="aspect-square bg-white rounded-lg overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-square bg-white rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${product.title} ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-gray-800">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    In Stock
                  </Badge>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Safe & Secure</p>
                  </div>
                  <div className="text-center">
                    <Truck className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Description</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {product.ingredients && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingredients</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.directions && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Directions for Use</h3>
                <p className="text-gray-600">{product.directions}</p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy From Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Buy From</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.retailers.map((retailer, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border">
                  <div className="text-3xl mb-3">{retailer.logo}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{retailer.name}</h3>
                  <p className="text-2xl font-bold text-gray-800 mb-3">${retailer.price}</p>
                  <Button 
                    className={`w-full ${retailer.inStock 
                      ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!retailer.inStock}
                  >
                    {retailer.inStock ? 'Buy Now' : 'Out of Stock'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {/* Sample Reviews */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium text-gray-800">Sarah M.</span>
                  <span className="text-sm text-gray-500">Verified Purchase</span>
                </div>
                <p className="text-gray-600">
                  "Excellent product! My baby loves it and I can see the difference in their development. 
                  Highly recommend to all new parents."
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="font-medium text-gray-800">Jennifer L.</span>
                  <span className="text-sm text-gray-500">Verified Purchase</span>
                </div>
                <p className="text-gray-600">
                  "Great quality and fast shipping. The product works exactly as described. 
                  Will definitely order again!"
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                View All Reviews
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;