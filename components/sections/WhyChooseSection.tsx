import { WhyChooseCard } from "@/components/WhyChooseCard";

const reasons = [
  {
    title: "Expertise Specializzata",
    description: "Conoscenza specialistica di bandi nazionali, regionali e europei.",
    color: "blue" as const,
  },
  {
    title: "Approccio Personalizzato",
    description: "Soluzioni su misura per ogni realtà imprenditoriale.",
    color: "gold" as const,
  },
  {
    title: "Risultati Concreti",
    description: "Track record comprovato di successo.",
    color: "blue" as const,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perché Scegliere{" "}
            <span className="text-nextfund-gold">NextFund Advisory</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Siamo il partner strategico che trasforma le tue ambizioni in successi concreti,
            con un approccio innovativo e risultati misurabili.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <WhyChooseCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
