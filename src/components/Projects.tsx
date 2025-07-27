import { Database, TrendingUp, HardDrive, Gamepad2, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Pharmacy DBMS Application",
      description: "A comprehensive desktop application featuring secure login system built with SQL and JDBC. Includes inventory management, prescription tracking, and customer data management with robust database operations.",
      icon: <Database className="h-6 w-6" />,
      technologies: ["Java", "SQL", "JDBC", "MySQL"],
      features: ["Secure Authentication", "Inventory Management", "Prescription Tracking", "Customer Database"],
      color: "primary"
    },
    {
      title: "Financial System with Algorithms",
      description: "An intelligent budget tracking system implementing Greedy algorithms and Dynamic Programming for optimal financial planning and expense categorization.",
      icon: <TrendingUp className="h-6 w-6" />,
      technologies: ["Python", "Dynamic Programming", "Greedy Algorithms", "Data Visualization"],
      features: ["Smart Budget Planning", "Expense Optimization", "Financial Analytics", "Automated Categorization"],
      color: "secondary"
    },
    {
      title: "Memory Allocation Visualizer",
      description: "Educational tool that simulates and visualizes different memory allocation algorithms including First Fit, Best Fit, and Worst Fit with interactive demonstrations.",
      icon: <HardDrive className="h-6 w-6" />,
      technologies: ["C++", "Algorithm Visualization", "Data Structures", "UI Design"],
      features: ["Algorithm Simulation", "Visual Representation", "Performance Comparison", "Educational Interface"],
      color: "accent"
    },
    {
      title: "Stack & Queue Math Game",
      description: "Interactive educational game implementing stack and queue data structures with multiple levels, scoring system, and progressive difficulty to make learning data structures engaging.",
      icon: <Gamepad2 className="h-6 w-6" />,
      technologies: ["Java", "Data Structures", "Game Logic", "UI/UX"],
      features: ["Multi-level Gameplay", "Scoring System", "Data Structure Learning", "Interactive UI"],
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/50 hover:border-primary hover:shadow-primary/20';
      case 'secondary':
        return 'border-secondary/50 hover:border-secondary hover:shadow-secondary/20';
      case 'accent':
        return 'border-accent/50 hover:border-accent hover:shadow-accent/20';
      default:
        return 'border-primary/50 hover:border-primary hover:shadow-primary/20';
    }
  };

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10';
      case 'secondary':
        return 'text-secondary bg-secondary/10';
      case 'accent':
        return 'text-accent bg-accent/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="hero-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my development projects demonstrating practical application of algorithms, 
            database management, and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${getColorClasses(project.color)}`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${getIconColorClasses(project.color)}`}>
                  {project.icon}
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="opacity-70 hover:opacity-100">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="opacity-70 hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2 text-foreground/80">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            className="btn-hero px-8 py-3"
            onClick={() => window.location.href = 'mailto:manikanthmaram@gmail.com'}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;