import Image from "next/image";

const socialLinks = [
  {
    icon: "instagram.svg",
    text: "Instagram",
    url: "https://www.instagram.com/rediseñ.ar",
    ariaLabel: "Síguenos en Instagram",
  },
  {
    icon: "substack.svg",
    text: "Substack",
    url: "https://redisenar.substack.com",
    ariaLabel: "Lee nuestro blog en Substack",
  },
  {
    icon: "message.svg",
    text: "Email",
    url: "mailto:carlos.graffi@gmail.com",
    ariaLabel: "Envíanos un correo electrónico",
  },
] as const;

export default function Footer() {
  return (
    <footer 
      className="py-16"
      role="contentinfo"
      aria-label="Información de contacto y redes sociales"
    >
      <h2 className="text-xl font-rethink text-center mb-16">Contacto</h2>
      <div className="max-w-xl mx-auto">
        <nav aria-label="Redes sociales">
          <ul className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.url}
                  className="flex items-center space-x-2 hover:opacity-75 transition-opacity
                           focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={link.ariaLabel}
                >
                  <Image
                    width={24}
                    height={24}
                    src={`/${link.icon}`}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6"
                    priority
                  />
                  <span>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}