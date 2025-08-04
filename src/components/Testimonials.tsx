import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Clarksburg, WV",
      rating: 5,
      text: "Dr. Smith and her team are absolutely wonderful! They made my dental anxiety a thing of the past. The office is modern and clean, and the staff is incredibly friendly and professional.",
      treatment: "Teeth Whitening & Cleaning"
    },
    {
      name: "Michael Davis",
      location: "Bridgeport, WV",
      rating: 5,
      text: "I've been bringing my whole family here for years. They're great with kids and adults alike. The quality of care is exceptional, and they always explain everything clearly.",
      treatment: "Family Dentistry"
    },
    {
      name: "Emily Rodriguez",
      location: "Fairmont, WV",
      rating: 5,
      text: "Had an emergency situation on a weekend, and they got me in right away. The pain relief was immediate, and they followed up to make sure I was doing well. Truly caring professionals.",
      treatment: "Emergency Care"
    },
    {
      name: "Robert Thompson",
      location: "Morgantown, WV",
      rating: 5,
      text: "The dental implant procedure was much easier than I expected. Dr. Smith walked me through every step, and the results are fantastic. I can smile confidently again!",
      treatment: "Dental Implants"
    },
    {
      name: "Jennifer Lee",
      location: "Clarksburg, WV",
      rating: 5,
      text: "As someone who was terrified of dentists, I can't believe how comfortable I feel here. The sedation options and gentle approach made all the difference. Highly recommend!"
      ,treatment: "Cosmetic Dentistry"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 dental-gradient">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families who trust us 
            with their dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`hover-lift dental-shadow transition-all duration-1000 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 rounded-full inline-block">
                    <span className="text-xs text-primary font-medium">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-card rounded-xl p-8 max-w-md mx-auto dental-shadow">
            <div className="flex items-center justify-center gap-2 mb-4">
              {renderStars(5)}
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">4.9/5.0</h3>
            <p className="text-muted-foreground">
              Based on 200+ patient reviews
            </p>
            <p className="text-sm text-primary font-medium mt-2">
              Trusted by families across West Virginia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;