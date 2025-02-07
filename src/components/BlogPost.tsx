import { motion } from 'framer-motion';

interface BlogPostProps {
  title: string;
  author: string;
  description: string;
  link?: string;
}

export default function BlogPost({ title, author, description, link }: BlogPostProps) {
  const decodeHtml = (html: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const cleanDescription = decodeHtml(description);
  const cleanTitle = decodeHtml(title);

  const content = (
    <div className="flex flex-col gap-4 group">
      <h3 className="text-5xl font-tostada transition-transform duration-300 group-hover:-translate-x-2">
        {cleanTitle}
      </h3>
      <div className="space-y-2">
        <div className="text-xl font-bold transition-colors duration-300 group-hover:text-white/90">
          {author}
        </div>
        <div className="text-base text-gray-300 transition-colors duration-300 group-hover:text-white/80">
          {cleanDescription}
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block transition-all duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.a>
    );
  }

  return <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >{content}</motion.div>;
}