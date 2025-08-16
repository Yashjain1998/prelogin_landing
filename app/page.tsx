import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingCalculator from "@/components/PricingCalculator";
import FeaturesOverview from "@/components/FeaturesOverview";
import FeaturedMentions from "@/components/FeaturedMentions";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main
      className="min-h-screen w-screen"
      style={{
        backgroundImage: "url('/images/Bg.svg')",
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="px-11">
      <Hero />
      <Features />
      <PricingCalculator />
      <FeaturesOverview />
      <FeaturedMentions />
      <CaseStudies />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      </div>
    </main>
  );
}
