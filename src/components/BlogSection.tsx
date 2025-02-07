'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import BlogPost from '@/components/BlogPost';
import LoadingPost from '@/components/LoadingPost';

// Fallback posts for development
const FALLBACK_POSTS = [
  {
    title: 'Sample Blog Post',
    author: 'Author Name',
    description: 'This is a sample blog post while we connect to Substack.',
    link: '#'
  },
  {
    title: 'Another Blog Post',
    author: 'Author Name',
    description: 'This is another sample blog post.',
    link: '#'
  },
  {
    title: 'Third Blog Post',
    author: 'Author Name',
    description: 'This is a third sample blog post.',
    link: '#'
  }
];

async function fetchPosts() {
  try {
    const response = await fetch('/api/substack');
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch posts');
    }
    const data = await response.json();
    return data.length > 0 ? data : FALLBACK_POSTS;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return FALLBACK_POSTS; // Fallback to sample posts on error
  }
}

export default function BlogSection() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    retry: 2,
    retryDelay: 1000,
  });

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl mb-24 text-center"
      >
        Artículos de la comunidad
      </motion.h2>
      <div className="space-y-24 max-w-2xl mx-auto">
        {isLoading ? (
          <>
            <LoadingPost />
            <LoadingPost />
            <LoadingPost />
          </>
        ) : isError ? (
          <div className="text-center space-y-4">
            <div className="text-red-400">
              Error loading posts. Using sample content.
            </div>
            {FALLBACK_POSTS.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        ) : (
          posts?.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))
        )}
      </div>
    </section>
  );
}