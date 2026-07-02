// Cloudflare Pages Function — replaces the old Next.js route at src/app/api/substack/route.ts
const SUBSTACK_URL = 'https://redisenar.substack.com';

export const onRequestGet: PagesFunction = async () => {
  try {
    const response = await fetch(`${SUBSTACK_URL}/feed`, {
      headers: {
        'Accept': 'application/rss+xml',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      cf: { cacheTtl: 3600, cacheEverything: true },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Substack: ${response.statusText}`);
    }

    const text = await response.text();
    let posts = parseRSSFeed(text);

    if (posts.length === 0) {
      // If no posts found, try fetching from the API
      const apiResponse = await fetch(`${SUBSTACK_URL}/api/v1/archive`);
      if (apiResponse.ok) {
        type PostType = {
          title: string;
          description?: string;
          subtitle?: string;
          slug: string;
          author?: string;
        };
        const apiPosts = (await apiResponse.json()) as PostType[];
        posts = apiPosts.slice(0, 3).map((post) => ({
          title: post.title,
          description: post.description || post.subtitle || '',
          link: `${SUBSTACK_URL}/p/${post.slug}`,
          author: post.author || 'Carlos Octavio Graffi'
        }));
      }
    }

    return new Response(JSON.stringify(posts), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

function parseRSSFeed(xml: string) {
  const posts = [];
  try {
    // Updated regex to better handle CDATA sections and HTML
    const regex = /<item>[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>[\s\S]*?<description>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/description>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<\/item>/g;
    let match;

    while ((match = regex.exec(xml)) !== null) {
      posts.push({
        title: decodeEntities(match[1].trim()),
        description: cleanDescription(decodeEntities(match[2].trim())),
        link: match[3].trim(),
        author: 'Rediseñar'
      });
    }
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
  }

  return posts.slice(0, 3); // Return only first 3 posts
}

function cleanDescription(html: string) {
  // Remove HTML tags and decode entities
  return html
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim(); // Trim extra spaces
}

function decodeEntities(text: string) {
  const entities: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&apos;': "'",
    '&#39;': "'",
    '&#x2F;': '/',
    '&#x2f;': '/',
    '&#47;': '/',
    '&#xa0;': ' ',
    '&nbsp;': ' ',
    '&#241;': 'ñ',
    '&#225;': 'á',
    '&#233;': 'é',
    '&#237;': 'í',
    '&#243;': 'ó',
    '&#250;': 'ú',
    '&#191;': '¿',
    '&#161;': '¡'
  };

  return text.replace(/&[^;]+;/g, match => entities[match] || match);
}
