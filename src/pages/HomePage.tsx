import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import PricingCenteredCards from '@/components/sections/pricing/PricingCenteredCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="Home Maintenance"
      title="Help With Your Home, Yard, and Property."
      description="Explore home maintenance and yard services in Modesto. Contact At_UR_Service to discuss your next project."
      primaryButton={{
        text: "Call to Discuss Your Project",
        href: "tel:+12094966164",
      }}
      secondaryButton={{
        text: "Explore Services",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "https://images.pexels.com/photos/18078684/pexels-photo-18078684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/31583249/pexels-photo-31583249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/5644256/pexels-photo-5644256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/17326319/pexels-photo-17326319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/8481705/pexels-photo-8481705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/8487764/pexels-photo-8487764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCarousel
      tag="What We Do"
      title="Our Services"
      description="Comprehensive maintenance solutions for your property in Modesto."
      items={[
        {
          title: "Yard Care",
          description: "Lawn maintenance and gardening tasks.",
          buttonIcon: "Sprout",
          imageSrc: "https://images.pexels.com/photos/6835181/pexels-photo-6835181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Pressure Washing",
          description: "Deep cleaning for exterior surfaces.",
          buttonIcon: "Waves",
          imageSrc: "https://images.pexels.com/photos/14675103/pexels-photo-14675103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Gutters & Windows",
          description: "Thorough cleaning for better home health.",
          buttonIcon: "Sparkles",
          imageSrc: "https://images.pexels.com/photos/17517438/pexels-photo-17517438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Sprinkler Services",
          description: "Installation and repair for irrigation.",
          buttonIcon: "Droplets",
          imageSrc: "https://images.pexels.com/photos/23092798/pexels-photo-23092798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Drywall & Painting",
          description: "Professional repairs and interior finishes.",
          buttonIcon: "Paintbrush",
          imageSrc: "https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Handyman Services",
          description: "General repairs and home maintenance tasks.",
          buttonIcon: "Wrench",
          imageSrc: "https://images.pexels.com/photos/4981812/pexels-photo-4981812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="gallery" data-section="gallery">
    <SectionErrorBoundary name="gallery">
          <FeaturesRevealCardsBento
      tag="Results"
      title="See the Difference"
      description="Real projects handled with care for our local Modesto clients."
      items={[
        {
          title: "Project 1",
          description: "Your project photo here.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/4567378/pexels-photo-4567378.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Project 2",
          description: "Your project photo here.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/14023349/pexels-photo-14023349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Project 3",
          description: "Your project photo here.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Project 4",
          description: "Your project photo here.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/38561969/pexels-photo-38561969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Ready for more",
          description: "Let's work together.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Cleanliness",
          description: "Restoring property value.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Quality",
          description: "Attention to detail.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/5163429/pexels-photo-5163429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="getting-started" data-section="getting-started">
    <SectionErrorBoundary name="getting-started">
          <PricingCenteredCards
      tag="How to Start"
      title="Working With Us"
      description="Simple steps to get your project moving."
      plans={[
        {
          tag: "1",
          price: "Get In Touch",
          description: "Reach out to describe your needs.",
          features: [
            "Phone call",
            "Email message",
            "Brief description",
          ],
          primaryButton: {
            text: "Contact",
            href: "#contact",
          },
        },
        {
          tag: "2",
          price: "Discuss",
          description: "Review scope and availability.",
          features: [
            "Project scope",
            "Estimated cost",
            "Timeline confirmation",
          ],
          primaryButton: {
            text: "Contact",
            href: "#contact",
          },
        },
        {
          tag: "3",
          price: "Agree",
          description: "Schedule your maintenance work.",
          features: [
            "Work agreement",
            "Date confirmed",
            "Project start",
          ],
          primaryButton: {
            text: "Contact",
            href: "#contact",
          },
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="About Us"
      quote="At_UR_Service offers a range of home, yard, and property maintenance services in Modesto. Get in touch to ask about your project and current availability."
      author="At_UR_Service Team"
      role="Modesto Property Maintenance"
      imageSrc="https://images.pexels.com/photos/39767700/pexels-photo-39767700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contact"
      text="What Can We Help You With? Phone: (209) 496-6164 | Email: Esequielhr06@gmail.com"
      primaryButton={{
        text: "Call Now",
        href: "tel:+12094966164",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:Esequielhr06@gmail.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
