const Button = ({ text, disabled, handler }) => {
  return (
    <button
      className='rounded-full w-[150px] px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500'
      disabled={disabled}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
