const Button = ({ label, iconURL }) => {
  return (
    <button
      className=" rounded-full text-white  bg-[#ff6452] flex justify-center items-center gap-2 px-7 py-4 border border-coral-red font-montserrat text-lg leading-none
    "
    >
      {label}
      <img src={iconURL} className="h-5 w-5 ml-2 rounded-full " />
    </button>
  );
};

export default Button;
