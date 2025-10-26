import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceRange from "@/components/PriceRange";
import { getAllProducts, getProductsByCategory, Product } from "@/data/products";

const InfantFormula = () => {
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
      products = getProductsByCategory(selectedCategory, selectedSubcategory, 'infantFormula');
    } else {
      products = getAllProducts('infantFormula');
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
      <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Infant Formula
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
                <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center shadow-lg overflow-hidden">
                  {/* Beautiful anime mother with baby - soft watercolor style with pink flowers */}
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center relative overflow-hidden">
                    {/* Anime mother and baby illustration - tender feeding moment */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center relative">
                        {/* Mother's silhouette */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                          <div className="w-16 h-20 bg-gradient-to-b from-amber-200 to-amber-300 rounded-t-full relative">
                            {/* Hair */}
                            <div className="absolute -top-2 -left-2 w-20 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full opacity-80"></div>
                            {/* Face */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-14 bg-gradient-to-b from-peach-200 to-peach-300 rounded-full">
                              {/* Eyes */}
                              <div className="absolute top-4 left-2 w-1 h-1 bg-gray-700 rounded-full"></div>
                              <div className="absolute top-4 right-2 w-1 h-1 bg-gray-700 rounded-full"></div>
                              {/* Smile */}
                              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-pink-400 rounded-full"></div>
                            </div>
                          </div>
                          {/* Baby in arms */}
                          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-peach-100 to-peach-200 rounded-full">
                            {/* Baby's head */}
                            <div className="w-6 h-6 bg-gradient-to-b from-peach-200 to-peach-300 rounded-full mx-auto">
                              <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
                              <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Floating pink flowers and sparkles */}
                    <div className="absolute top-4 left-4 text-pink-400 text-2xl opacity-70 animate-pulse">🌸</div>
                    <div className="absolute top-6 right-6 text-pink-300 text-lg opacity-60 animate-bounce">✨</div>
                    <div className="absolute bottom-6 left-6 text-rose-400 text-xl opacity-75">🌺</div>
                    <div className="absolute bottom-4 right-4 text-pink-500 text-2xl opacity-80">💕</div>
                    <div className="absolute top-12 right-12 text-pink-200 text-sm opacity-50">🌸</div>
                    <div className="absolute bottom-12 left-12 text-rose-300 text-sm opacity-60">✨</div>
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
                
                {/* By Age */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Age</h4>
                  <div className="space-y-1.5">
                    {["Newborn (0-3 months)", "Infant (0-6 months)", "Follow on (6-12 months)", "Toddler (12+ months)"].map((age) => (
                      <div key={age} className="flex items-center space-x-2">
                        <Checkbox 
                          id={age}
                          checked={selectedCategory === 'age' && selectedSubcategory === age}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('age', age);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={age} className="text-xs text-gray-600 cursor-pointer leading-tight">{age}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* By Base Ingredient */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Base Ingredient</h4>
                  <div className="space-y-1.5">
                    {["Cow's milk based", "Goat's milk based", "Soy based", "Plant based / Vegan", "Speciality Hydrolyzed"].map((ingredient) => (
                      <div key={ingredient} className="flex items-center space-x-2">
                        <Checkbox 
                          id={ingredient}
                          checked={selectedCategory === 'baseIngredient' && selectedSubcategory === ingredient}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('baseIngredient', ingredient);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={ingredient} className="text-xs text-gray-600 cursor-pointer leading-tight">{ingredient}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* By Specialty Needs */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Specialty Needs</h4>
                  <div className="space-y-1.5">
                    {["Easy to Digest", "Lactose Free", "Hypoallergenic", "Anti-Reflux / Spit up", "Pre-mature medical needs"].map((need) => (
                      <div key={need} className="flex items-center space-x-2">
                        <Checkbox 
                          id={need}
                          checked={selectedCategory === 'specialtyNeeds' && selectedSubcategory === need}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('specialtyNeeds', need);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={need} className="text-xs text-gray-600 cursor-pointer leading-tight">{need}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* By Brand */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Brand</h4>
                  <div className="space-y-1.5">
                    {["Enfamil", "Similac", "Gerber", "Kendamil", "Holie"].map((brand) => (
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

                {/* By Format */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">By Format</h4>
                  <div className="space-y-1.5">
                    {["Powder", "Ready to Feed Liquid", "Concentrated Liquid", "Bulk / Value Pack", "On the Go Pack"].map((format) => (
                      <div key={format} className="flex items-center space-x-2">
                        <Checkbox 
                          id={format}
                          checked={selectedCategory === 'format' && selectedSubcategory === format}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange('format', format);
                            } else {
                              setSelectedCategory('');
                              setSelectedSubcategory('');
                            }
                          }}
                          className="w-3 h-3"
                        />
                        <label htmlFor={format} className="text-xs text-gray-600 cursor-pointer leading-tight">{format}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Essentials */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">Essentials</h4>
                  <div className="space-y-1.5">
                    {["Bottles and Nipples", "Sterilizers"].map((essential) => (
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
                  Infant Formulas
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

export default InfantFormula;