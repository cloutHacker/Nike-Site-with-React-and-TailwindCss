import { services } from "../constants/index";
import ServiceCard from "../Components/ServiceCard";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, key) => (
        <ServiceCard key={key} {...service} />
      ))}
    </section>
  );
};

export default Services;
