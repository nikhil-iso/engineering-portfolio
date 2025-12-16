import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Lightbulb, Target, Image } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { personalProjects } from "@/data/projects";
import type { PersonalProject } from "@/data/projects";
import SkillBadge from "@/components/SkillBadge";

const PersonalProjects = () => {
  const navigate = useNavigate();

  const renderProjectCard = (project: PersonalProject) => {
    const baseClasses = "group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg";
    
    if (project.layout === "large") {
      return (
        <Card key={project.id} className={`${baseClasses} col-span-full cursor-pointer`} onClick={() => navigate(`/project/personal/${project.id}`)}>
          <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
            </div>
          </div>
          <CardContent className="space-y-6 pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Relevant Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} tone="blue" />
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Learning Experience
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {project.learningExperience}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-white mb-2">Future Plans</h4>
              <p className="text-gray-300">
                {project.futurePlansSummary}
              </p>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (project.layout === "medium") {
      return (
        <Card key={project.id} className={`${baseClasses} md:col-span-2 cursor-pointer`} onClick={() => navigate(`/project/personal/${project.id}`)}>
          <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">{project.name}</h3>
            </div>
          </div>
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Relevant Skills</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} tone="green" />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Learning Experience</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.learningExperience}
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 p-3 rounded-lg border-l-4 border-green-500">
              <h4 className="font-medium text-white mb-1 text-sm">Future Plans</h4>
              <p className="text-gray-300 text-sm">
                {project.futurePlansSummary}
              </p>
            </div>
          </CardContent>
        </Card>
      );
    }

    // Small format
    return (
      <Card key={project.id} className={`${baseClasses} cursor-pointer`} onClick={() => navigate(`/project/personal/${project.id}`)}>
        <div className="relative h-36 sm:h-40 overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          <div className="absolute bottom-3 left-2">
            <h3 className="text-base sm:text-lg font-bold text-white">{project.name}</h3>
          </div>
          {project.id === 3 && (
            <a 
              href="https://unsplash.com/photos/black-and-white-tripod-on-green-grass-field-during-daytime-zSrksQgp4W0"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 text-xs text-gray-300 hover:text-white transition-colors bg-black/50 px-2 py-1 rounded"
            >
              Valerie V. 2021, Aug 5th. Unsplash
            </a>
          )}
        </div>
        <CardContent className="space-y-3 pt-3">
          <div className="flex flex-wrap gap-1">
            {project.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} size="sm" tone="orange" />
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-gray-300 text-xs leading-relaxed">
              {project.learningExperience}
            </p>
            <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-2 rounded border-l-2 border-orange-400">
              <p className="text-gray-300 text-xs">
                {project.futurePlansSummary}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const ProjectsGrid = ({ projects }: { projects: PersonalProject[] }) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    
    return (
      <div 
        ref={ref}
        className={`space-y-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Large project - full width */}
        <div
          className="transition-all duration-500"
          style={{ transitionDelay: '0ms' }}
        >
          {renderProjectCard(projects[0])}
        </div>
        
        {/* Medium and Small projects - side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="md:col-span-2 transition-all duration-500"
            style={{ transitionDelay: '150ms' }}
          >
            {renderProjectCard(projects[1])}
          </div>
          <div
            className="transition-all duration-500"
            style={{ transitionDelay: '300ms' }}
          >
            {renderProjectCard(projects[2])}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Personal Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A collection of my individual engineering projects, showcasing my learning journey and technical growth. 
              Each project represents a unique challenge and learning opportunity.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <ProjectsGrid projects={personalProjects} />
        </section>
      </div>
    </div>
  );
};

export default PersonalProjects;
