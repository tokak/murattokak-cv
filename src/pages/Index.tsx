import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ReferencesSection from '@/components/ReferencesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
