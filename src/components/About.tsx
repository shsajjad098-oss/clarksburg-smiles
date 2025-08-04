import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Shield } from "lucide-react";
import dentistPortrait from "@/assets/dentist-portrait.jpg";
import dentalTeam from "@/assets/dental-team.jpg";

const About = () => {
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

  const features = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Decades of expertise in comprehensive dental care"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals dedicated to your oral health"
    },
    {
      icon: Heart,
      title: "Gentle Care",
      description: "Comfortable, stress-free dental experience"
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and modern techniques"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 dental-gradient">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Clarksburg Family Dentistry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Providing compassionate, comprehensive dental care to families in Clarksburg 
            and surrounding communities for over two decades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <h3 className="text-3xl font-bold text-foreground">
              Your Trusted Partner in Oral Health
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Clarksburg Family Dentistry, we believe that exceptional dental care 
              begins with genuine compassion and understanding. Our experienced team is 
              committed to creating a warm, welcoming environment where patients of all 
              ages feel comfortable and confident about their dental health.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine the latest dental technology with time-tested techniques to 
              provide comprehensive care that meets the unique needs of each patient. 
              From routine cleanings to complex restorative procedures, we're here to 
              help you achieve and maintain optimal oral health.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">Family Dentistry</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">Cosmetic Dentistry</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">Emergency Care</span>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className={`space-y-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={dentistPortrait}
                alt="Dr. Smith - Lead Dentist"
                className="rounded-lg dental-shadow hover-lift w-full h-48 object-cover"
              />
              <img
                src={dentalTeam}
                alt="Our dental team"
                className="rounded-lg dental-shadow hover-lift w-full h-48 object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Our experienced team is dedicated to providing exceptional care
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`hover-lift transition-all duration-1000 delay-${700 + index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;