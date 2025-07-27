import { Download, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a simple resume download - in real app this would be an actual PDF
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Maram Manikanth Resume - Full Stack Developer';
    link.download = 'Maram_Manikanth_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactMe = () => {
    window.location.href = 'mailto:manikanthmaram@gmail.com';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block">Maram</span>
            <span className="block hero-text">Manikanth</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-in-left">
            Full Stack Developer | AI Learner | Problem Solver
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Computer Science Engineering student passionate about turning ideas into impactful tech solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={downloadResume}
              className="btn-hero px-8 py-3 text-lg"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              onClick={contactMe}
              variant="outline"
              className="btn-ghost px-8 py-3 text-lg"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-accent/10 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;