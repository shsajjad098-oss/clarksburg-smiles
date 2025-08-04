import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { ZoomIn } from "lucide-react";
import clinicReception from "@/assets/clinic-reception.jpg";
import dentistPatient from "@/assets/dentist-patient.jpg";
import happyFamily from "@/assets/happy-family.jpg";
import examinationRoom from "@/assets/examination-room.jpg";
import clinicHallway from "@/assets/clinic-hallway.jpg";
import dentalEquipment from "@/assets/dental-equipment.jpg";
import pediatricCare from "@/assets/pediatric-care.jpg";
import perfectSmile from "@/assets/perfect-smile.jpg";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const galleryImages = [
    {
      src: clinicReception,
      alt: "Modern reception area with comfortable seating",
      title: "Welcoming Reception"
    },
    {
      src: examinationRoom,
      alt: "State-of-the-art examination room",
      title: "Modern Examination Room"
    },
    {
      src: dentalEquipment,
      alt: "Advanced dental equipment and technology",
      title: "Advanced Technology"
    },
    {
      src: dentistPatient,
      alt: "Dentist providing gentle care to patient",
      title: "Gentle Patient Care"
    },
    {
      src: pediatricCare,
      alt: "Child-friendly dental care environment",
      title: "Pediatric Care"
    },
    {
      src: happyFamily,
      alt: "Happy family after dental visit",
      title: "Happy Patients"
    },
    {
      src: clinicHallway,
      alt: "Clean and modern clinic hallway",
      title: "Clean Environment"
    },
    {
      src: perfectSmile,
      alt: "Perfect smile after dental treatment",
      title: "Beautiful Results"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="gallery" ref={sectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Modern Facility
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art dental facility designed 
              for comfort, safety, and exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className={`group cursor-pointer overflow-hidden hover-lift transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                onClick={() => openLightbox(image.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-medium">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">Happy Patients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;