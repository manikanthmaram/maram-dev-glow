import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "ML & Data Tools",
      skills: [
        { name: "Scikit-learn", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 75 },
        { name: "Google Colab", level: 90 },
        { name: "Jupyter", level: 85 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript ES6+", level: 80 },
        { name: "React.js", level: 70 }
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Oracle", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Algorithms & DS",
      skills: [
        { name: "Arrays & Strings", level: 90 },
        { name: "Linked Lists", level: 85 },
        { name: "Trees & Graphs", level: 80 },
        { name: "Dynamic Programming", level: 75 },
        { name: "Greedy Algorithms", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Prompt Engineering", level: 80 },
        { name: "Linux", level: 70 },
        { name: "Windows", level: 95 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="hero-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="project-card">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Skills Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Full Stack Development",
              "Database Design",
              "Algorithm Design",
              "Machine Learning",
              "Data Analysis",
              "Problem Solving",
              "System Design",
              "API Development"
            ].map((competency) => (
              <span
                key={competency}
                className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;