import { CheckCircle, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full">
      <CardHeader className="pb-2 md:pb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-3 md:space-y-4 pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <ul className="space-y-1.5 md:space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
