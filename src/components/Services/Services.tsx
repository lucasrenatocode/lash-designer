import type { ReactNode } from 'react';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from './ServiceCard';
import type { LashService } from '../../data/types';
import styles from './Services.module.css';

interface ServicesProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  services: LashService[];
}

const Services = ({ id, eyebrow, title, description, services }: ServicesProps) => {
  if (services.length === 0) return null;

  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;