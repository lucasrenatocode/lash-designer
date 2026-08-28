import Services from '../Services/Services';
import { GRINGO_SERVICES } from '../../data/content';

const ServicesGringos = () => {
  return (
    <Services
      id="servicos-gringos"
      eyebrow="Volumes Internacionais"
      title={
        <>
          Técnicas <em>importadas</em> para um efeito único
        </>
      }
      description="Volumes inspirados em tendências internacionais, para quem busca um olhar diferenciado."
      services={GRINGO_SERVICES}
    />
  );
};

export default ServicesGringos;