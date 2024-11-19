import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">
            Special
          </span>
          <span className="text-coral-red"> Offer</span>
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
    </section>
  );
};

export default SpecialOffers;
