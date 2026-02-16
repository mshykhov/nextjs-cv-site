import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-cv mx-auto px-6 md:px-8 py-12 md:py-16">
      <Header />
      <Summary />
      <TechStack />
      <Education />
      <Experience />
      <Footer />
    </main>
  );
}
