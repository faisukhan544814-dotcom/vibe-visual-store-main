import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface DropdownItem {
  label: string;
  value: string;
  subcategories?: DropdownItem[];
}

interface InfantFormulaDropdownProps {
  categories: DropdownItem[];
  onCategorySelect: (category: string, subcategory?: string) => void;
}

const InfantFormulaDropdown = ({ categories, onCategorySelect }: InfantFormulaDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHoveredCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category: string, subcategory?: string) => {
    onCategorySelect(category, subcategory);
    setIsOpen(false);
    setHoveredCategory(null);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium text-white hover:text-pink-100 transition-colors"
      >
        <span>Infant Formula</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Category</h3>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.value} className="space-y-2">
                  <div
                    className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 cursor-pointer"
                    onMouseEnter={() => setHoveredCategory(category.value)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onClick={() => handleCategoryClick(category.value)}
                  >
                    <span className="font-medium text-gray-700">{category.label}</span>
                    {category.subcategories && category.subcategories.length > 0 && (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  
                  {hoveredCategory === category.value && category.subcategories && (
                    <div className="ml-4 space-y-1">
                      {category.subcategories.map((subcategory) => (
                        <div
                          key={subcategory.value}
                          className="p-2 rounded-md hover:bg-gray-50 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryClick(category.value, subcategory.value);
                          }}
                        >
                          <span className="text-sm text-gray-600">{subcategory.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfantFormulaDropdown;

