import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SocialProof from './components/SocialProof/SocialProof';
import Services from './components/Services/Services';
import ServicesGringos from './components/ServicesGringos/ServicesGringos';
import Maintenance from './components/Maintenance/Maintenance';
import Benefits from './components/Benefits/Benefits';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import { SERVICES } from './data/content';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services
          id="servicos"
          eyebrow="Serviços"
          title={
            <>
              Técnicas para <em>cada estilo de olhar</em>
            </>
          }
          description="Do clássico ao mais intenso — cada técnica é escolhida para valorizar a sua beleza natural."
          services={SERVICES}
        />
        <ServicesGringos />
        <Maintenance />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;