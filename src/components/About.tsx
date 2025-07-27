import { GraduationCap, Code, Brain, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Computer Science Engineering at Vasavi College"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Development",
      description: "Full Stack Web Development & DBMS Applications"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & ML",
      description: "Data Analytics & Artificial Intelligence"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Algorithms & Data Structures Expertise"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="hero-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Computer Science Engineering student at <span className="text-primary font-semibold">Vasavi College of Engineering</span>. 
              My interests lie in full stack development, data analytics, and artificial intelligence.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I love turning ideas into impactful tech solutions and have experience building everything from 
              database management systems to memory allocation visualizers. Currently exploring the fascinating 
              world of AI and machine learning while strengthening my foundation in algorithms and data structures.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Innovation Focused'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="project-card text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;