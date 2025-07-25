const Error = ({ title, message }) => {
  return (
    <div className='flex justify-center absolute top-55 left-80 '>
      <div className='py-1'>
        <svg
          className='fill-current h-10 w-10 text-red-600 mr-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
        </svg>
      </div>
      <div>
        <p className='text-xl font-bold text-red-600'>{title}</p>
        <p className='text-sm text-gray-600'>{message}</p>
      </div>
    </div>
  );
};

export default Error;
