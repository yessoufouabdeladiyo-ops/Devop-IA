import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyCustom from "./components/WhyCustom";
import Audience from "./components/Audience";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

/**
 * Portfolio — Abdel Sobou Adiyo Yessoufou
 * Header sticky · Hero (#accueil) · À propos (#a-propos) · Services (#services) ·
 * Pourquoi pas un template (#pourquoi-sur-mesure) · Pour qui ? (#pour-qui) ·
 * Méthode de travail (#methode) · FAQ (#faq) · Ils m'ont fait confiance
 * (#temoignages) · CTA final (#contact) · Footer.
 * i18n FR (défaut) / EN / AR — mise en page entièrement en miroir (RTL) pour l'arabe.
 */
export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-body text-ink">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyCustom />
          <Audience />
          <Process />
        <Faq />
        <Testimonials />
        <FinalCta />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
