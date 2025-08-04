import { Phone, MapPin, Mail, Clock, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">CF</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Clarksburg Family</h3>
                <p className="text-sm opacity-90">Dentistry</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Providing compassionate, comprehensive dental care to families 
              in Clarksburg and surrounding communities for over two decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Patient Reviews
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>General Cleanings</li>
              <li>Pediatric Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Dental Implants</li>
              <li>Emergency Care</li>
              <li>Restorative Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">(304) 622-3042</p>
                  <p className="text-sm text-primary-foreground/80">Call for appointments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">123 Main Street</p>
                  <p className="text-sm text-primary-foreground/80">Clarksburg, WV 26301</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">Mon-Fri: 8AM-5PM</p>
                  <p className="text-sm text-primary-foreground/80">Saturday by appointment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">info@clarksburgdental.com</p>
                  <p className="text-sm text-primary-foreground/80">Send us a message</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>© 2024 Clarksburg Family Dentistry. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                HIPAA Notice
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-primary-foreground/60">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-red-300" />
            <span className="text-sm">for healthier smiles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;