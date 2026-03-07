import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Standard",
    price: "299",
    description: "Lorem ipsum dolor sit amet",
    features: [
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Incididunt ut labore",
      "Et dolore magna aliqua"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "599",
    description: "Lorem ipsum dolor sit amet",
    features: [
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Incididunt ut labore",
      "Et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation",
      "Ullamco laboris nisi"
    ],
    popular: true
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Popular
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
