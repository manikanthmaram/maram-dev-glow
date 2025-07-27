import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "manikanthmaram@gmail.com",
      action: () => window.location.href = 'mailto:manikanthmaram@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 79891 86598",
      action: () => window.location.href = 'tel:+917989186598'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Hyderabad, India",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "https://github.com",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      url: "https://linkedin.com",
      color: "text-foreground hover:text-primary"
    }
  ];

  const quickActions = [
    {
      title: "Send Email",
      description: "Drop me a line for collaboration opportunities",
      action: () => window.location.href = 'mailto:manikanthmaram@gmail.com',
      icon: <Mail className="h-6 w-6" />,
      buttonText: "Email Me",
      variant: "primary" as const
    },
    {
      title: "Schedule Call",
      description: "Let's discuss your project requirements",
      action: () => window.location.href = 'tel:+917989186598',
      icon: <Phone className="h-6 w-6" />,
      buttonText: "Call Now",
      variant: "secondary" as const
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="hero-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate or have a question? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-xl border border-border bg-card/50 transition-all duration-300 ${
                      info.action ? 'hover:border-primary/50 cursor-pointer hover:bg-card' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                      <p className="text-lg font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-1 ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="text-xl font-semibold mb-2">Availability</h3>
              <p className="opacity-90">
                Currently available for internships, part-time projects, and collaboration opportunities. 
                Always excited to work on innovative projects!
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
            
            {quickActions.map((action, index) => (
              <div key={index} className="project-card group">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    action.variant === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{action.title}</h4>
                    <p className="text-muted-foreground mb-4">{action.description}</p>
                    <Button
                      onClick={action.action}
                      className={action.variant === 'primary' ? 'btn-hero' : 'btn-ghost'}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {action.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Download Resume */}
            <div className="project-card bg-accent/10 border-accent/20">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Download My Resume</h4>
                <p className="text-muted-foreground mb-4">
                  Get a comprehensive overview of my skills, experience, and projects.
                </p>
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => {
                    // Email request for resume
                    const subject = encodeURIComponent('Resume Request - Maram Manikanth');
                    const body = encodeURIComponent('Hi Maram,\n\nI would like to request your resume. Please send it at your earliest convenience.\n\nThank you!');
                    window.location.href = `mailto:manikanthmaram@gmail.com?subject=${subject}&body=${body}`;
                  }}
                >
                  Request Resume
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thank you for taking the time to review my portfolio. I'm excited about the possibility 
              of contributing to innovative projects and continuing to grow as a developer. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;