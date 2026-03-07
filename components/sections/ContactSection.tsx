import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const contactMethods = [
  {
    icon: Phone,
    title: "Telefono",
    detail: "+39 XXX XXX XXXX",
    subddetail: "Lun-Dom 8:00-20:00",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@nextfundadvisory.com",
    subddetail: "Risposta entro 12h",
  },
  {
    icon: MapPin,
    title: "Sede",
    detail: "Via [Indirizzo], [Città]",
    subddetail: "Su appuntamento",
  },
];

export function ContactSection() {
  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contattaci
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Siamo qui per supportare la crescita della tua azienda
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="text-center p-6 border-2 border-gray-100 hover:border-nextfund-blue/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-nextfund-blue/10 flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-7 h-7 text-nextfund-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-sm font-medium text-gray-900 mb-1">{method.detail}</p>
              <p className="text-xs text-gray-600">{method.subddetail}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}
