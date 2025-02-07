import { NextResponse } from 'next/server';
import { getSubstackPosts } from '@/utils/substack';

export async function GET() {
  const posts = await getSubstackPosts('https://redisenar.substack.com/feed/');
  return NextResponse.json(posts);
}