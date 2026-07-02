'use client';

import { useEffect, useState } from 'react';
import BlogPost from '@/components/BlogPost';
import LoadingPost from '@/components/LoadingPost';

interface PostType {
  title: string;
  author: string;
  description: string;
  link: string;
}

const FALLBACK_POSTS: PostType[] = [
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
] as const;

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
    return FALLBACK_POSTS;
  }
}

export default function BlogSection() {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const isLoading = posts === null;

  useEffect(() => {
    let cancelled = false;
    fetchPosts().then((data) => {
      if (!cancelled) setPosts(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section 
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="blog-section-title"
    >
      <h2
        id="blog-section-title"
        className="text-xl mb-24 text-center fade-in-mount"
      >
        Artículos
      </h2>
      <div 
        className="space-y-24 max-w-2xl mx-auto"
        role="feed"
        aria-busy={isLoading}
        aria-label="Lista de artículos del blog"
      >
        {isLoading ? (
          <>
            <LoadingPost />
            <LoadingPost />
            <LoadingPost />
          </>
        ) : (
          posts?.map((post: PostType, index: number) => (
            <BlogPost key={index} {...post} />
          ))
        )}
      </div>
    </section>
  );
}