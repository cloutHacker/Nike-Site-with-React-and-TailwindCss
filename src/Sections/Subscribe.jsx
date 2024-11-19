import Button from "../Components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign up
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <input
        type="text"
        placeholder="Subscribe@nike.com"
        className="border-2 border-gray-900 shadow-sm p-4 w-full rounded-full"
      />
      <Button label="Sign Up" />
    </section>
  );
};

export default Subscribe;
