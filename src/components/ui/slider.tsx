import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
  value: number[]
  onValueChange: (value: number[]) => void
  max?: number
  min?: number
  step?: number
  className?: string
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ className, value, onValueChange, max = 100, min = 0, step = 1, ...props }, ref) => {
    const [isDragging, setIsDragging] = React.useState(false)
    const sliderRef = React.useRef<HTMLDivElement>(null)

    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true)
      updateValue(e)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateValue(e)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const updateValue = (e: MouseEvent | React.MouseEvent) => {
      if (!sliderRef.current) return

      const rect = sliderRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(1, x / rect.width))
      const newValue = Math.round(min + percentage * (max - min))
      
      // For simplicity, we'll just update the first value
      onValueChange([newValue, value[1] || max])
    }

    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        return () => {
          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', handleMouseUp)
        }
      }
    }, [isDragging])

    const leftPercentage = ((value[0] - min) / (max - min)) * 100
    const rightPercentage = ((value[1] - min) / (max - min)) * 100

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center h-6",
          className
        )}
        {...props}
      >
        <div
          ref={sliderRef}
          className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200 cursor-pointer"
          onMouseDown={handleMouseDown}
        >
          <div
            className="absolute h-full bg-pink-500 rounded-full"
            style={{
              left: `${leftPercentage}%`,
              width: `${rightPercentage - leftPercentage}%`
            }}
          />
          <div
            className="absolute h-5 w-5 rounded-full border-2 border-pink-500 bg-white shadow-md cursor-pointer transform -translate-y-1.5"
            style={{ left: `calc(${leftPercentage}% - 10px)` }}
          />
          <div
            className="absolute h-5 w-5 rounded-full border-2 border-pink-500 bg-white shadow-md cursor-pointer transform -translate-y-1.5"
            style={{ left: `calc(${rightPercentage}% - 10px)` }}
          />
        </div>
      </div>
    )
  }
)

Slider.displayName = "Slider"

export { Slider }