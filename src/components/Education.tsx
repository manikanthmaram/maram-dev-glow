import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Vasavi College of Engineering",
      degree: "Bachelor of Technology - Computer Science Engineering",
      duration: "2023 - 2027",
      cgpa: "7.52",
      status: "Current",
      description: "Pursuing comprehensive education in computer science fundamentals, software engineering, and emerging technologies with focus on practical application.",
      highlights: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Machine Learning Basics",
        "Web Development",
        "Operating Systems"
      ]
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate Education (12th Grade)",
      duration: "2021 - 2023",
      cgpa: "83.4%",
      status: "Completed",
      description: "Completed intermediate education with strong foundation in Mathematics, Physics, and Chemistry, preparing for engineering entrance examinations.",
      highlights: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "English",
        "Engineering Preparation"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="hero-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Academic journey building strong foundations in computer science and engineering principles.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="project-card group">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left side - Icon and Status */}
                <div className="flex-shrink-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="lg:hidden">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-secondary/20 text-secondary' 
                          : 'bg-accent/20 text-accent'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{edu.degree}</p>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="hidden lg:block">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-secondary/20 text-secondary' 
                            : 'bg-accent/20 text-accent'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-primary">
                        <Award className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Subjects/Highlights */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-foreground/80">Key Subjects & Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((subject, subjectIndex) => (
                        <span
                          key={subjectIndex}
                          className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Goals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-4">Academic Goals</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Continuously expanding knowledge in emerging technologies while maintaining strong academic performance. 
              Focus on practical application of theoretical concepts through projects and hands-on learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;