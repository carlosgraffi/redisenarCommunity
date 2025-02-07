export default function LoadingPost() {
  return (
    <div className="animate-pulse flex flex-col gap-4">
      <div className="h-12 bg-gray-700 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-6 bg-gray-700 rounded w-1/4"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3"></div>
      </div>
    </div>
  );
}