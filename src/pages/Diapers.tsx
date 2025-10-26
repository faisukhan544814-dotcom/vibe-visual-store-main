import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceRange from "@/components/PriceRange";
import { getAllProducts, getProductsByCategory, Product } from "@/data/products";

const Diapers = () => {
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
      products = getProductsByCategory(selectedCategory, selectedSubcategory, 'diapers');
    } else {
      products = getAllProducts('diapers');
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
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Diapers
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
                <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center shadow-lg overflow-hidden">
                  {/* Beautiful anime baby with soft toy - cute and innocent */}
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center relative overflow-hidden">
                    {/* Anime baby illustration - happy and playful */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white to-green-50 flex items-center justify-center relative">
                        {/* Baby character */}
                        <div className="relative">
                          {/* Baby's head */}
                          <div className="w-20 h-20 bg-gradient-to-b from-peach-200 to-peach-300 rounded-full relative">
                            {/* Hair */}
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-br from-amber-300 to-amber-400 rounded-t-full opacity-90"></div>
                            {/* Eyes - big anime style */}
                            <div className="absolute top-6 left-4 w-3 h-3 bg-gray-800 rounded-full">
                              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
                            </div>
                            <div className="absolute top-6 right-4 w-3 h-3 bg-gray-800 rounded-full">
                              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
                            </div>
                            {/* Rosy cheeks */}
                            <div className="absolute top-8 left-2 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
                            <div className="absolute top-8 right-2 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
                            {/* Happy smile */}
                            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-pink-400 rounded-full"></div>
                          </div>
                          {/* Baby's body */}
                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg">
                            {/* Arms */}
                            <div className="absolute -left-2 top-2 w-4 h-8 bg-peach-200 rounded-full"></div>
                            <div className="absolute -right-2 top-2 w-4 h-8 bg-peach-200 rounded-full"></div>
                          </div>
                          {/* Cute white puppy */}
                          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white rounded-full">
                            {/* Puppy ears */}
                            <div className="absolute -top-1 left-1 w-2 h-3 bg-gray-200 rounded-full"></div>
                            <div className="absolute -top-1 right-1 w-2 h-3 bg-gray-200 rounded-full"></div>
                            {/* Puppy eyes */}
                            <div className="absolute top-1 left-2 w-1 h-1 bg-black rounded-full"></div>
                            <div className="absolute top-1 right-2 w-1 h-1 bg-black rounded-full"></div>
                            {/* Pink bow */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Floating nature elements */}
                    <div className="absolute top-4 left-4 text-green-400 text-2xl opacity-70 animate-pulse">🌿</div>
                    <div className="absolute top-6 right-6 text-emerald-300 text-lg opacity-60 animate-bounce">🍃</div>
                    <div className="absolute bottom-6 left-6 text-green-500 text-xl opacity-75">🌱</div>
                    <div className="absolute bottom-4 right-4 text-emerald-400 text-2xl opacity-80">💚</div>
                    <div className="absolute top-12 right-12 text-green-200 text-sm opacity-50">✨</div>
                    <div className="absolute bottom-12 left-12 text-emerald-300 text-sm opacity-60">🌿</div>
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
                
                {/* By Baby's Age / Size */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Baby's Age / Size</h4>
                  <div className="space-y-1.5">
                    {["Newborn (up to 10 lbs / 4.5 kg)", "Infant (size 1-2)", "Crawler (size 3-4)", "Toddler (size 5-6)", "Youth"].map((ageSize) => (
                      <div key={ageSize} className="flex items-center space-x-2">
                        <Checkbox 
                          id={ageSize}
                          checked={selectedCategory === 'ageSize' && selectedSubcategory === ageSize}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('ageSize', ageSize);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={ageSize} className="text-xs text-gray-600 cursor-pointer leading-tight">{ageSize}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* By Type */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Type</h4>
                  <div className="space-y-1.5">
                    {["Disposable", "Overnight", "Pull ups", "Swim", "Cloth & Reusable"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox 
                          id={type}
                          checked={selectedCategory === 'type' && selectedSubcategory === type}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('type', type);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={type} className="text-xs text-gray-600 cursor-pointer leading-tight">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* By Brand */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Brand</h4>
                  <div className="space-y-1.5">
                    {["Pampers", "Huggies", "Luvs", "Honest Company", "Seventh Generation"].map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox 
                          id={brand}
                          checked={selectedCategory === 'brand' && selectedSubcategory === brand}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('brand', brand);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={brand} className="text-xs text-gray-600 cursor-pointer leading-tight">{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* By Features */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Features</h4>
                  <div className="space-y-1.5">
                    {["Hypo allergenic", "Sensitive skin", "Extra Absorbency", "Fragrance free", "Eco-certified"].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox 
                          id={feature}
                          checked={selectedCategory === 'features' && selectedSubcategory === feature}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('features', feature);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={feature} className="text-xs text-gray-600 cursor-pointer leading-tight">{feature}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Essentials */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">Essentials</h4>
                  <div className="space-y-1.5">
                    {["Baby Wipes", "Diaper Rash", "Changing Pads", "Accessories", "On the Go Pack"].map((essential) => (
                      <div key={essential} className="flex items-center space-x-2">
                        <Checkbox 
                          id={essential}
                          checked={selectedCategory === 'essentials' && selectedSubcategory === essential}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('essentials', essential);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={essential} className="text-xs text-gray-600 cursor-pointer leading-tight">{essential}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filter by Price */}
                <PriceRange
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={10}
                  max={100}
                  step={5}
                  title="Filter by Price"
                />
              </div>
            </div>

            {/* Right Content Area - Product Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Diapers
                </h2>
                <p className="text-sm text-gray-600">
                  {filteredProducts.length} products found
                  {selectedCategory && selectedSubcategory && ` in ${selectedSubcategory}`}
                  {priceRange[0] > 10 || priceRange[1] < 100 ? ` ($${priceRange[0]} - $${priceRange[1]})` : ''}
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
                        <Link to={`/product/organic-baby-formula`}>
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

export default Diapers;
