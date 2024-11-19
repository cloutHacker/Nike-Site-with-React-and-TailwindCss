import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="transition-colors duration-500 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:bg-[#c02c27]">
      <p className="whitespace-nowrap">{label}</p>
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
