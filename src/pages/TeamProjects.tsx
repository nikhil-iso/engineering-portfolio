import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Award, Code, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { featuredTeamProject, teamProjects } from "@/data/projects";
import type { TeamProject } from "@/data/projects";
import SkillBadge from "@/components/SkillBadge";

const TeamProjects = () => {
  const navigate = useNavigate();
  const highlightedProject = featuredTeamProject ?? teamProjects[0];
  const supportingProjects: TeamProject[] = highlightedProject
    ? teamProjects.filter((project) => project.id !== highlightedProject.id)
    : teamProjects;

  if (!highlightedProject) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Team projects will be published soon.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gray-800/90 border-b border-gray-700/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-4 mb-2 animate-fade-in-left">
              <Link to="/">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:text-blue-400 group">
                  <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Team Projects
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              Collaborative engineering projects that showcase teamwork, leadership, and collective problem-solving. 
              These projects demonstrate my ability to work effectively in diverse technical teams.
            </p>
          </div>
        </div>

        {/* Showcase Project */}
        <section className="relative overflow-hidden pt-4 md:pt-8 animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
          {/* Background Image */}
          <div className="w-full h-[140px] sm:h-[200px] md:h-[300px] relative group">
            <img 
              src={highlightedProject.image} 
              alt={highlightedProject.projectName}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
            {/* Animated background elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400/40 rounded-full animate-bounce-gentle opacity-60"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400/50 rounded-full animate-bounce-gentle [animation-delay:1s] opacity-70"></div>
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-green-400/30 rounded-full animate-bounce-gentle [animation-delay:2s] opacity-50"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative flex items-end">
            <div className="w-full max-w-7xl mx-auto px-4 py-3 md:pb-4">
              <div className="bg-gray-800/95 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-6 shadow-2xl border border-gray-700/50 max-w-5xl cursor-pointer group hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" onClick={() => navigate(`/project/team/1`)}>
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full blur-xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10 animate-fade-in-left [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 group-hover:animate-bounce-gentle transition-all duration-300 group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-medium text-purple-400 uppercase tracking-wide group-hover:text-purple-300 transition-colors duration-300">Showcase Project</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-500 animate-fade-in-up [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">{highlightedProject.projectName}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300 animate-fade-in-up [animation-delay:1.2s] opacity-0 [animation-fill-mode:forwards]">
                  {highlightedProject.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Team Size</p>
                        <p className="text-sm sm:text-base font-semibold text-white">{highlightedProject.teamSize} members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Team Name</p>
                        <p className="text-sm sm:text-base font-semibold text-white">{highlightedProject.teamName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mt-1" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Key Technologies</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                          {highlightedProject.skills.slice(0, 3).map((skill) => (
                            <SkillBadge key={skill} skill={skill} size="sm" tone="purple" />
                          ))}
                          {highlightedProject.skills.length > 3 && (
                            <SkillBadge
                              skill={`+${highlightedProject.skills.length - 3} more`}
                              size="sm"
                              tone="neutral"
                              className="text-gray-200"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                      <p className="text-xs sm:text-sm text-gray-400 font-semibold">My Role</p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {highlightedProject.roleSummary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Team Projects */}
        <section className="py-8 sm:py-12 md:py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Other Team Projects</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
              Additional collaborative projects that have contributed to my growth as a team player and technical contributor.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {supportingProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 backdrop-blur-sm border-gray-700 shadow-lg cursor-pointer" onClick={() => navigate(`/project/team/${project.id}`)}>
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.projectName}
                    className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{project.projectName}</h3>
                    <p className="text-xs sm:text-sm text-gray-300">{project.teamName}</p>
                  </div>
                  {project.id === 4 && (
                    <a 
                      href="https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 text-xs text-gray-300 hover:text-white transition-colors bg-black/50 px-2 py-1 rounded"
                    >
                      NASA/JPL-Caltech
                    </a>
                  )}
                </div>
                
                <CardContent className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="h-4 w-4" />
                    <span className="text-xs sm:text-sm font-medium">{project.teamSize} team members</span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <h4 className="font-semibold text-white text-xs sm:text-sm">My Role</h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.roleSummary}
                    </p>
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <h4 className="font-semibold text-white text-xs sm:text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} size="sm" tone="blue" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamProjects;
