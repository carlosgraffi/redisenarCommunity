
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-thunder mb-4">404</h1>
        <h2 className="text-2xl mb-6">Project Not Found</h2>
        <p className="text-gray-400 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/projects"
          className="inline-flex items-center text-sm text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
