import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Baby, 
  Smile, 
  Wrench, 
  AlertTriangle,
  Shield,
  Zap,
  Heart
} from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Sparkles,
      title: "General Cleanings",
      description: "Professional teeth cleaning and oral hygiene maintenance",
      features: ["Plaque & tartar removal", "Fluoride treatments", "Oral health screening"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Specialized dental care designed just for children",
      features: ["Child-friendly environment", "Preventive care", "Early orthodontic evaluation"],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our aesthetic dental solutions",
      features: ["Teeth whitening", "Veneers", "Smile makeovers"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Wrench,
      title: "Restorative Care",
      description: "Repair and restore your teeth to optimal function",
      features: ["Fillings & crowns", "Bridges", "Root canal therapy"],
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Shield,
      title: "Dental Implants",
      description: "Permanent solution for missing teeth",
      features: ["Single tooth replacement", "Multiple implants", "Full mouth reconstruction"],
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Care",
      description: "Prompt treatment for dental emergencies",
      features: ["Same-day appointments", "Pain relief", "Urgent dental repairs"],
      color: "bg-red-50 text-red-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine cleanings to complex procedures, we offer a full range of 
            dental services to meet all your oral health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`hover-lift dental-shadow transition-all duration-1000 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${service.color}`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Heart className="h-3 w-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="dental-gradient rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Schedule Your Visit?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us today to book your appointment and take the first step 
              toward optimal oral health.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-dark text-primary-foreground dental-shadow"
            >
              <Zap className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;