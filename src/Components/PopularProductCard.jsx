import { star } from "../assets/icons";
import Button from "./Button";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full border-gray-300 border-2 rounded-3xl">
      <img src={imgURL} alt={name} className="w-full h-full" />
      <div className="mt-8 gap-2.5">
        <div className="flex gap-2 pl-3">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-green-950">
            (4.5)
          </p>
        </div>
        <div className="pl-3">
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            {name}
          </h3>
          <p className="mt-2 font-montserrat font-bold leading-normal text-2xl">
            {price}
          </p>
        </div>
      </div>
      <div className="mb-3 ml-3">
        <Button label="Add to Cart + " />
      </div>
    </div>
  );
};

export default PopularProductCard;
