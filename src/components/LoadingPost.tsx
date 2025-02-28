export default function LoadingPost() {
  return (
    <div 
      className="animate-pulse flex flex-col gap-4"
      role="status"
      aria-label="Cargando artículo"
    >
      <div 
        className="h-12 bg-gray-700 rounded w-3/4"
        aria-hidden="true"
      />
      <div className="space-y-2">
        <div 
          className="h-6 bg-gray-700 rounded w-1/4"
          aria-hidden="true"
        />
        <div 
          className="h-4 bg-gray-700 rounded w-full"
          aria-hidden="true"
        />
        <div 
          className="h-4 bg-gray-700 rounded w-2/3"
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">Cargando el contenido del artículo...</span>
    </div>
  );
}