import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { icon: 'instagram.svg', text: 'Instagram', url: '#' },
    { icon: 'substack.svg', text: 'Substack', url: '#' },
    { icon: 'message.svg', text: 'Email', url: 'mailto:your@email.com' },
  ];

  return (
    <footer className="py-16">
      <h2 className="text-2xl font-rethink text-center mb-16">Contacto</h2>
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.text}
              href={link.url}
              className="flex items-center space-x-2 hover:opacity-75 transition-opacity"
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            >
              <Image
                width={24}
                height={24}
                src={`/${link.icon}`}
                alt={link.text}
                className="h-6 w-6"
              />
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}