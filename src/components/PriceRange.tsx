import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign, Minus } from "lucide-react";

interface PriceRangeProps {
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  title?: string;
}

const PriceRange = ({ 
  value, 
  onValueChange, 
  min = 10, 
  max = 500, 
  step = 10,
  title = "Price Range"
}: PriceRangeProps) => {
  const [minInput, setMinInput] = useState(value[0].toString());
  const [maxInput, setMaxInput] = useState(value[1].toString());

  const handleSliderChange = (newValue: number[]) => {
    if (newValue.length >= 2) {
      const [newMin, newMax] = [newValue[0], newValue[1]];
      onValueChange([newMin, newMax]);
      setMinInput(newMin.toString());
      setMaxInput(newMax.toString());
    }
  };

  const handleInputChange = (type: 'min' | 'max', inputValue: string) => {
    const numValue = parseInt(inputValue) || min;
    const clampedValue = Math.max(min, Math.min(max, numValue));
    
    if (type === 'min') {
      setMinInput(inputValue);
      if (clampedValue <= value[1]) {
        onValueChange([clampedValue, value[1]]);
      }
    } else {
      setMaxInput(inputValue);
      if (clampedValue >= value[0]) {
        onValueChange([value[0], clampedValue]);
      }
    }
  };

  const handleInputBlur = (type: 'min' | 'max') => {
    const numValue = parseInt(type === 'min' ? minInput : maxInput) || min;
    const clampedValue = Math.max(min, Math.min(max, numValue));
    
    if (type === 'min') {
      setMinInput(clampedValue.toString());
      if (clampedValue <= value[1]) {
        onValueChange([clampedValue, value[1]]);
      } else {
        onValueChange([value[1], value[1]]);
        setMinInput(value[1].toString());
      }
    } else {
      setMaxInput(clampedValue.toString());
      if (clampedValue >= value[0]) {
        onValueChange([value[0], clampedValue]);
      } else {
        onValueChange([value[0], value[0]]);
        setMaxInput(value[0].toString());
      }
    }
  };

  const resetRange = () => {
    onValueChange([min, max]);
    setMinInput(min.toString());
    setMaxInput(max.toString());
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-pink-500" />
          {title}
        </h4>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetRange}
          className="text-xs text-gray-500 hover:text-pink-500 px-2 py-1 h-auto"
        >
          Reset
        </Button>
      </div>
      
      {/* Price Input Fields */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">Min Price</label>
          <div className="relative">
            <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
            <Input
              type="number"
              value={minInput}
              onChange={(e) => handleInputChange('min', e.target.value)}
              onBlur={() => handleInputBlur('min')}
              className="pl-6 h-8 text-sm border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              min={min}
              max={max}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-6">
          <Minus className="h-4 w-4 text-gray-400" />
        </div>
        
        <div className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">Max Price</label>
          <div className="relative">
            <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
            <Input
              type="number"
              value={maxInput}
              onChange={(e) => handleInputChange('max', e.target.value)}
              onBlur={() => handleInputBlur('max')}
              className="pl-6 h-8 text-sm border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              min={min}
              max={max}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Slider */}
      <div className="px-2">
        <Slider
          value={value}
          onValueChange={handleSliderChange}
          max={max}
          min={min}
          step={step}
          className="w-full [&_.slider-track]:bg-gray-200 [&_.slider-range]:bg-pink-500 [&_.slider-thumb]:bg-pink-500 [&_.slider-thumb]:border-pink-500 [&_.slider-thumb]:shadow-lg"
        />
        
        {/* Price Labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span className="bg-gray-100 px-2 py-1 rounded-full">${min}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">${max}+</span>
        </div>
        
        {/* Current Range Display */}
        <div className="mt-3 text-center">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
            <DollarSign className="h-3 w-3" />
            {value[0]} - {value[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
