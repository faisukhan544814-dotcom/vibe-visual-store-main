import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface GuideCardProps {
  image: string;
  title: string;
  description: string;
}

const GuideCard = ({ image, title, description }: GuideCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-0">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex items-center text-primary text-sm font-medium pt-2">
            <span>Read More</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuideCard;
