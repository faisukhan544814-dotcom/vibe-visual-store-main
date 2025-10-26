import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
}

const ProductCard = ({ image, title, price, originalPrice }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 space-y-3">
        <h3 className="text-sm font-medium text-foreground line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
