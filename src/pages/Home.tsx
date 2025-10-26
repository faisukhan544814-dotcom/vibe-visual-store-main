import { Heart, Shield, Tag, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import GuideCard from "@/components/GuideCard";
import heroImage from "@/assets/hero-bg.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import guide1 from "@/assets/guide-1.jpg";
import guide2 from "@/assets/guide-2.jpg";
import guide3 from "@/assets/guide-3.jpg";

const Home = () => {
  const categories = [
    { name: "Infant Formula", active: true },
    { name: "Diapers", active: false },
    { name: "Feeding & Nursery", active: false },
    { name: "Baby Gear", active: false },
  ];

  const products = [
    { id: "organic-baby-formula", image: product1, title: "Organic Baby Formula - Gentle Care", price: 29.99 },
    { id: "baby-body-cream", image: product2, title: "BABY Body Cream", price: 24.99 },
    { id: "maternity-pillow", image: product3, title: "Maternity Pillow", price: 49.99 },
    { id: "smart-baby-monitor", image: product4, title: "Smart Baby Monitor", price: 89.99 },
    { id: "newborn-essentials", image: product5, title: "Essentials items for new born baby", price: 34.99 },
    { id: "baby-carrier", image: product6, title: "Baby Carrier", price: 59.99 },
  ];

  const guides = [
    {
      id: "whispered-world-motherhood",
      image: guide1,
      title: "The Whispered World: Inside the Raw Sanctuary of New Motherhood",
      description: "Where exhaustion collides with boundless love, and every breath reshapes a young woman's universe.",
    },
    {
      id: "first-time-parent-guide",
      image: guide2,
      title: "First Time Parent's Complete Guide",
      description: "Everything you need to know about caring for your newborn in the first four weeks.",
    },
    {
      id: "essential-moves-mom",
      image: guide3,
      title: "Essential Moves Every Mom Needs",
      description: "Learn about safe and effective exercises to maintain health during pregnancy.",
    },
    {
      id: "whispered-world-motherhood",
      image: guide1,
      title: "Baby Sleep Training Methods",
      description: "Gentle and effective approaches to help your baby develop healthy sleep habits.",
    },
    {
      id: "first-time-parent-guide",
      image: guide2,
      title: "Postnatal Care for Baby & Mother",
      description: "Expert advice on establishing and maintaining a successful breastfeeding routine.",
    },
    {
      id: "essential-moves-mom",
      image: guide3,
      title: "Postpartum Recovery Guide",
      description: "Understanding your body's recovery process and caring for yourself after birth.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Your Personalized Guide To{" "}
                <span className="text-pink-500">Motherhood</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Get AI-powered recommendations, compare prices, and make confident decisions for your baby's needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-pink-500 hover:bg-pink-600 text-white hover:text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-lg w-full sm:w-auto"
                >
                  Try Our AI Companion
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50 hover:text-pink-500 text-sm sm:text-base px-6 sm:px-8 py-3 rounded-lg w-full sm:w-auto"
                >
                  Browse Products
                </Button>
              </div>
            </div>
            <div className="flex justify-center mt-8 lg:mt-0">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center shadow-lg overflow-hidden">
                  {/* Beautiful anime mother with baby - watercolor style */}
                  <img 
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop&auto=format&q=80" 
                    alt="Beautiful anime mother with baby"
                    className="w-full h-full object-cover rounded-full"
                    style={{
                      filter: 'sepia(30%) saturate(150%) hue-rotate(320deg) brightness(110%) contrast(105%)'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-300/30 to-transparent rounded-full"></div>
                  {/* Beautiful overlay with floral elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white drop-shadow-lg">
                      <div className="text-6xl mb-2 opacity-90">🌸</div>
                      <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        Motherhood Journey
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-pink-100 flex items-center justify-center mb-3 sm:mb-4">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500 fill-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Personalized Picks</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-pink-100 flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Trusted Reviews</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-pink-100 flex items-center justify-center mb-3 sm:mb-4">
                <Tag className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Price Comparison</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-pink-100 flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">24/7 AI Assistant</h3>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
            Everything you need to make the best choices for your little one
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Explore Categories</h2>
            <p className="text-gray-600 text-sm sm:text-base">Handpicked essentials for you and your baby</p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {categories.map((category) => (
              category.name === "Infant Formula" ? (
                <Link key={category.name} to="/infant-formula">
                  <Button
                    variant={category.active ? "default" : "outline"}
                    className={`${
                      category.active 
                        ? "bg-pink-500 hover:bg-pink-600 text-white hover:text-white" 
                        : "border-gray-300 text-gray-700 hover:bg-pink-50 hover:text-gray-700"
                    } px-6 py-3 rounded-lg`}
                  >
                    {category.name}
                  </Button>
                </Link>
              ) : category.name === "Diapers" ? (
                <Link key={category.name} to="/diapers">
                  <Button
                    variant={category.active ? "default" : "outline"}
                    className={`${
                      category.active 
                        ? "bg-pink-500 hover:bg-pink-600 text-white hover:text-white" 
                        : "border-gray-300 text-gray-700 hover:bg-pink-50 hover:text-gray-700"
                    } px-6 py-3 rounded-lg`}
                  >
                    {category.name}
                  </Button>
                </Link>
              ) : category.name === "Feeding & Nursery" ? (
                <Link key={category.name} to="/feeding-nursery">
                  <Button
                    variant={category.active ? "default" : "outline"}
                    className={`${
                      category.active 
                        ? "bg-pink-500 hover:bg-pink-600 text-white hover:text-white" 
                        : "border-gray-300 text-gray-700 hover:bg-pink-50 hover:text-gray-700"
                    } px-6 py-3 rounded-lg`}
                  >
                    {category.name}
                  </Button>
                </Link>
              ) : category.name === "Baby Gear" ? (
                <Link key={category.name} to="/baby-gear">
                  <Button
                    variant={category.active ? "default" : "outline"}
                    className={`${
                      category.active 
                        ? "bg-pink-500 hover:bg-pink-600 text-white hover:text-white" 
                        : "border-gray-300 text-gray-700 hover:bg-pink-50 hover:text-gray-700"
                    } px-6 py-3 rounded-lg`}
                  >
                    {category.name}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  className={`${
                    category.active 
                      ? "bg-pink-500 hover:bg-pink-600 text-white" 
                      : "border-gray-300 text-gray-700 hover:bg-pink-50"
                  } px-6 py-3 rounded-lg`}
                >
                  {category.name}
                </Button>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4">
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Featured Products</h2>
              <p className="text-gray-600 text-sm sm:text-base">Handpicked essentials for you and your baby</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-pink-500 hover:bg-pink-100 hover:text-pink-500">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-pink-500 hover:bg-pink-100 hover:text-pink-500">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-2xl font-bold text-gray-800 mb-4">${product.price}</p>
                  <Link to={`/product/${product.id}`}>
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white hover:text-white rounded-lg">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Guides Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Expert Advice & Guides</h2>
            <p className="text-gray-600 text-sm sm:text-base">Explore expert-backed articles to guide your motherhood journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {guides.map((guide, index) => (
              <Link 
                key={index} 
                to={`/blog/${guide.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <span className="text-pink-500 font-medium text-sm hover:text-pink-600 inline-flex items-center gap-1">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
