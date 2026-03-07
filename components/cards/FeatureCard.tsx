import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function FeatureCard({ icon: Icon, title, description, features }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="bg-card border border-border p-8 h-full hover:shadow-elegant-lg transition-shadow duration-300">
        {/* Icon */}
        <div className="w-14 h-14 bg-nextfund-blue/10 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-nextfund-blue" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-display text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-base mb-6 leading-relaxed">{description}</p>

        {/* Features List */}
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-base text-foreground">
              <span className="text-nextfund-blue mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
