const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        <p className="text-sm font-medium text-gray-600">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;