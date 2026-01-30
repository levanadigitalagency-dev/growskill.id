import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import Testimoni from "@/components/testimoni";
import FasilitasSection from "@/components/FasilitasSection";
import ModulSection from "@/components/ModulSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Growskill - Platform Pembelajaran Online Terbaik | Kursus Skills & Content Creation",
  description: "Belajar skills, content creation, public speaking & editing untuk hasilkan income. Bergabung dengan ribuan member VIP Growskill sekarang juga.",
  openGraph: {
    title: "Growskill - Platform Pembelajaran Online Terbaik",
    description: "Belajar skills, content creation, public speaking & editing untuk hasilkan income.",
    url: "https://growskill.id",
    type: "website",
    images: [
      {
        url: "https://growskill.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growskill",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="pt-20 bg-black">
      <Hero 
        title="Tempat Kamu Belajar Banyak Skills, Content Creation, Public Speaking & Editing. Sampe bisa Hasilin Income"
        highlightedWords={[
          { text: 'Skills', color: 'blue' },
          { text: 'Public', color: 'blue' },
          { text: 'Speaking', color: 'blue' },
          { text: 'Hasilin', color: 'green' },
          { text: 'Income', color: 'green' }
        ]}
        buttonText="Join Sekarang!!"
      />
      <AboutSection />
      <AboutSection2 />
      <Testimoni />
      <ModulSection />
      <FasilitasSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
