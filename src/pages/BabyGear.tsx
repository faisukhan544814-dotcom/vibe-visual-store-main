import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceRange from "@/components/PriceRange";
import { getAllProducts, getProductsByCategory, Product } from "@/data/products";

const BabyGear = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([10, 500]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  const handleFilterChange = (category: string, value: string) => {
    // Clear any previous selection in other categories
    setSelectedCategory(category);
    setSelectedSubcategory(value);
  };

  // Get products based on selected category and subcategory
  const getFilteredProducts = (): Product[] => {
    let products: Product[] = [];
    
    if (selectedCategory && selectedSubcategory) {
      products = getProductsByCategory(selectedCategory, selectedSubcategory, 'babyGear');
    } else {
      products = getAllProducts('babyGear');
    }
    
    // Filter by price range
    return products.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section - Matching Figma Design */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Baby Gear
              </h1>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Discover curated products, expert advice, and support for every stage of your motherhood journey.
              </p>
              <div className="flex gap-3">
                <Button 
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium"
                >
                  Shop Products
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-full text-sm font-medium"
                >
                  Browse Guides
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center shadow-lg overflow-hidden">
                  {/* Beautiful anime boy with white puppy - playful and joyful */}
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center relative overflow-hidden">
                    {/* Anime boy illustration - happy with pet */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white to-blue-50 flex items-center justify-center relative">
                        {/* Boy character */}
                        <div className="relative">
                          {/* Boy's head */}
                          <div className="w-22 h-22 bg-gradient-to-b from-peach-200 to-peach-300 rounded-full relative">
                            {/* Hair - dark and messy */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-18 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-full opacity-90">
                              {/* Hair strands */}
                              <div className="absolute top-1 left-2 w-2 h-4 bg-gray-600 rounded-full transform rotate-12"></div>
                              <div className="absolute top-0 right-3 w-2 h-5 bg-gray-600 rounded-full transform -rotate-12"></div>
                            </div>
                            {/* Eyes - bright and cheerful */}
                            <div className="absolute top-6 left-4 w-3 h-3 bg-gray-800 rounded-full">
                              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
                            </div>
                            <div className="absolute top-6 right-4 w-3 h-3 bg-gray-800 rounded-full">
                              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
                            </div>
                            {/* Rosy cheeks */}
                            <div className="absolute top-8 left-2 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
                            <div className="absolute top-8 right-2 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
                            {/* Big smile */}
                            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-pink-400 rounded-full"></div>
                          </div>
                          {/* Boy's body */}
                          <div className="absolute top-18 left-1/2 transform -translate-x-1/2 w-14 h-18 bg-gradient-to-b from-white to-gray-100 rounded-lg">
                            {/* Overalls */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-14 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg">
                              {/* Straps */}
                              <div className="absolute top-0 left-2 w-1 h-8 bg-blue-600"></div>
                              <div className="absolute top-0 right-2 w-1 h-8 bg-blue-600"></div>
                              {/* Pocket */}
                              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-blue-600 rounded"></div>
                            </div>
                            {/* Arms */}
                            <div className="absolute -left-2 top-2 w-4 h-8 bg-peach-200 rounded-full"></div>
                            <div className="absolute -right-2 top-2 w-4 h-8 bg-peach-200 rounded-full"></div>
                          </div>
                          {/* Adorable white puppy */}
                          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-white rounded-full shadow-sm">
                            {/* Puppy ears */}
                            <div className="absolute -top-1 left-2 w-2 h-3 bg-gray-200 rounded-full"></div>
                            <div className="absolute -top-1 right-2 w-2 h-3 bg-gray-200 rounded-full"></div>
                            {/* Puppy eyes */}
                            <div className="absolute top-2 left-3 w-1 h-1 bg-black rounded-full"></div>
                            <div className="absolute top-2 right-3 w-1 h-1 bg-black rounded-full"></div>
                            {/* Nose */}
                            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full"></div>
                            {/* Red bow tie */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-red-500 rounded-full"></div>
                            {/* Tail */}
                            <div className="absolute -right-1 top-1 w-2 h-4 bg-white rounded-full transform rotate-45"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Floating playful elements */}
                    <div className="absolute top-4 left-4 text-blue-400 text-2xl opacity-70 animate-pulse">⭐</div>
                    <div className="absolute top-6 right-6 text-sky-300 text-lg opacity-60 animate-bounce">🎈</div>
                    <div className="absolute bottom-6 left-6 text-blue-500 text-xl opacity-75">🧸</div>
                    <div className="absolute bottom-4 right-4 text-sky-400 text-2xl opacity-80">💙</div>
                    <div className="absolute top-12 right-12 text-blue-200 text-sm opacity-50">✨</div>
                    <div className="absolute bottom-12 left-12 text-sky-300 text-sm opacity-60">🌟</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - Matching Figma Layout */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
            
            {/* Left Sidebar - Filter Categories */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Categories</h3>
                
                {/* On the Go */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">On the Go</h4>
                  <div className="space-y-1.5">
                    {["Strollers", "Car seats", "Carriers", "Travel systems", "Diaper bags"].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox 
                          id={item}
                          checked={selectedCategory === 'onTheGo' && selectedSubcategory === item}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('onTheGo', item);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={item} className="text-xs text-gray-600 cursor-pointer leading-tight">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stay home */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">Stay home</h4>
                  <div className="space-y-1.5">
                    {["Play pen", "High chairs", "Bouncers", "Swings", "Activity centers"].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox 
                          id={item}
                          checked={selectedCategory === 'stayHome' && selectedSubcategory === item}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('stayHome', item);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={item} className="text-xs text-gray-600 cursor-pointer leading-tight">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clothing */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">Clothing</h4>
                  <div className="space-y-1.5">
                    {["Onesies", "Sleepers", "Outfits", "Accessories", "Shoes"].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox 
                          id={item}
                          checked={selectedCategory === 'clothing' && selectedSubcategory === item}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('clothing', item);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={item} className="text-xs text-gray-600 cursor-pointer leading-tight">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bath Care */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">Bath Care</h4>
                  <div className="space-y-1.5">
                    {["Baby Lotion", "Bath wash", "Shampoo", "Towels", "Bath toys"].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox 
                          id={item}
                          checked={selectedCategory === 'bathCare' && selectedSubcategory === item}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('bathCare', item);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={item} className="text-xs text-gray-600 cursor-pointer leading-tight">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Essentials */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">Essentials</h4>
                  <div className="space-y-1.5">
                    {["Baby Monitor", "Thermometer", "Humidifier", "Night light", "Safety gates"].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox 
                          id={item}
                          checked={selectedCategory === 'essentials' && selectedSubcategory === item}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('essentials', item);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={item} className="text-xs text-gray-600 cursor-pointer leading-tight">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filter by Price */}
                <PriceRange
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={10}
                  max={500}
                  step={20}
                  title="Filter by Price"
                />
              </div>
            </div>

            {/* Right Content Area - Product Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Baby Gear
                </h2>
                <p className="text-sm text-gray-600">
                  {filteredProducts.length} products found
                  {selectedCategory && selectedSubcategory && ` in ${selectedSubcategory}`}
                  {priceRange[0] > 10 || priceRange[1] < 500 ? ` ($${priceRange[0]} - $${priceRange[1]})` : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-50 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-gray-800 mb-1 text-sm">{product.title}</h3>
                      <ul className="text-xs text-gray-500 mb-3 space-y-0.5">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-gray-300 rounded-full mr-1.5"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">${product.price}</p>
                        <Link to={`/product/baby-carrier`}>
                          <Button className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-3 py-1.5 rounded-md">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found for the selected category.</p>
                  <p className="text-gray-400 text-sm mt-2">Try selecting a different category or subcategory.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BabyGear;
