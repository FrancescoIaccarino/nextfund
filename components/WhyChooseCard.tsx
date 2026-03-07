import { CheckCircle } from "lucide-react";

interface WhyChooseCardProps {
  title: string;
  description: string;
  color: "blue" | "gold";
}

export function WhyChooseCard({ title, description, color }: WhyChooseCardProps) {
  const bgColor = color === "blue" ? "bg-nextfund-blue" : "bg-nextfund-gold";
  const bgLight = color === "blue" ? "bg-nextfund-blue/5" : "bg-nextfund-gold/5";

  return (
    <div className={`${bgLight} p-6 text-center hover:shadow-lg transition-shadow duration-300`}>
      <div className={`w-14 h-14 ${bgColor} flex items-center justify-center mx-auto mb-4`}>
        <CheckCircle className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
