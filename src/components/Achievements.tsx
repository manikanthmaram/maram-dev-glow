import { Trophy, Award, FileCheck, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "2nd Place - Intra-College Mathematics Competition",
      description: "Secured second position in the college-wide mathematics competition, demonstrating strong analytical and problem-solving skills.",
      category: "Academic Excellence",
      color: "primary",
      year: "2024"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "MSME Hackathon 4.0 - Round 2 Qualifier",
      description: "Selected for the second round of MSME Hackathon 4.0, showcasing innovative problem-solving and technical capabilities.",
      category: "Competition",
      color: "secondary",
      year: "2024"
    }
  ];

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Cisco Networking Academy",
      description: "Comprehensive certification covering Python fundamentals, data structures, and programming best practices.",
      icon: <FileCheck className="h-5 w-5" />,
      skills: ["Python Fundamentals", "Data Structures", "Object-oriented Programming", "Problem Solving"]
    },
    {
      title: "Database Management Systems",
      issuer: "NPTEL IIT Kharagpur",
      description: "Advanced certification in database design, SQL, normalization, and database administration concepts.",
      icon: <FileCheck className="h-5 w-5" />,
      skills: ["SQL", "Database Design", "Normalization", "Query Optimization"]
    },
    {
      title: "Data Analyst",
      issuer: "IBM",
      description: "Professional certification covering data analysis, visualization, and insights generation using modern tools.",
      icon: <FileCheck className="h-5 w-5" />,
      skills: ["Data Analysis", "Data Visualization", "Statistical Analysis", "Business Intelligence"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/50 hover:border-primary bg-primary/5';
      case 'secondary':
        return 'border-secondary/50 hover:border-secondary bg-secondary/5';
      case 'accent':
        return 'border-accent/50 hover:border-accent bg-accent/5';
      default:
        return 'border-primary/50 hover:border-primary bg-primary/5';
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
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Achievements & <span className="hero-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Recognition and certifications that showcase my commitment to continuous learning and excellence.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Award className="h-6 w-6 text-primary mr-3" />
            Achievements & Recognition
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${getColorClasses(achievement.color)}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${getIconColorClasses(achievement.color)}`}>
                    {achievement.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">{achievement.year}</span>
                    <div className="text-xs font-medium text-primary mt-1">{achievement.category}</div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-3">{achievement.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <FileCheck className="h-6 w-6 text-secondary mr-3" />
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="project-card group">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-lg text-secondary">
                    {cert.icon}
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-70 hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="text-xs font-medium text-foreground/80">Skills Covered:</h5>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8">
            <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              I believe in continuous learning and staying updated with the latest technologies. 
              Always open to new challenges and opportunities to grow my skill set.
            </p>
            <Button 
              className="btn-hero"
              onClick={() => window.location.href = 'mailto:manikanthmaram@gmail.com'}
            >
              Let's Connect & Learn Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;