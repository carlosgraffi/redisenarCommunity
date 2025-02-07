type SubstackPost = {
  title: string;
  author: string;
  description: string;
  link: string;
  pubDate: string;
};

export async function getSubstackPosts(substackUrl: string): Promise<SubstackPost[]> {
  try {
    // Fetch the RSS feed
    const response = await fetch(`${substackUrl}/feed`);
    const text = await response.text();

    // Parse the XML
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');

    // Extract posts
    const items = xml.querySelectorAll('item');

    return Array.from(items).map(item => ({
      title: item.querySelector('title')?.textContent || '',
      author: item.querySelector('dc:creator')?.textContent || '',
      description: item.querySelector('description')?.textContent || '',
      link: item.querySelector('link')?.textContent || '',
      pubDate: item.querySelector('pubDate')?.textContent || '',
    }));
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return [];
  }
}