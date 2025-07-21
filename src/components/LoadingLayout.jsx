const LoadingLayout = () => {
  return (
    <div className='flex flex-col animate-pulse'>
      <div className='mx-auto mr-2 bg-gray-200 bg-border-2 rounded-md border-gray-200 w-[800px] h-[382px]'></div>
      <div className='flex justify-between items-center mt-8'>
        <div className='mt-4 rounded-full px-4 py-2 bg-gray-200 text-white w-[150px] h-[42px]'></div>
        <div className='mt-4 rounded-full px-4 py-2 bg-gray-200 text-white w-[150px] h-[42px]'></div>
      </div>
    </div>
  );
};

export default LoadingLayout;
