import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "https://github.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      url: "mailto:manikanthmaram@gmail.com"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold hero-text">MM</span>
              <div className="w-px h-6 bg-border"></div>
              <span className="text-lg font-medium">Maram Manikanth</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and learning cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:manikanthmaram@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  manikanthmaram@gmail.com
                </a>
              </div>
              <div className="text-muted-foreground">
                📍 Hyderabad, India
              </div>
              <div className="text-muted-foreground">
                📱 +91 79891 86598
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Maram Manikanth. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
            </div>
            
            <div className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;