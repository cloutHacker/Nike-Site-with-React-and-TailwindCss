import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../Components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We provide you
          </span>
          <br />
          <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Explore the latest Nike arrivals, combining stylish design, advanced
          comfort, and innovative features crafted to elevate your active
          lifestyle. Each piece is tailored for those who seek both fashion and
          functionality in their everyday wear, ensuring you stay comfortable
          and on-trend.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nike’s commitment to quality and creativity shines through, offering
          you versatile options for all your athletic needs and casual outings
          alike.
        </p>
        <div className="mt-11">
          <Button
            label="View Details"
            iconURL={arrowRight}
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1 flex-justify-center items-center">
        <img src={shoe8} alt="shoe 8" />
      </div>
    </section>
  );
};

export default SuperQuality;
