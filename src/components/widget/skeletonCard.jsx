const SkeletonCard = () => {
  return (
    <div className="relative bg-gray-300 rounded-lg shadow-md h-64 flex flex-col justify-end overflow-hidden animate-pulse">
      <div className="absolute inset-0 bg-gray-300 opacity-50"></div>
      <div className="relative p-4 z-10 text-white flex flex-col justify-end h-full">
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-400 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-400 rounded w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
