import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[70vh] flex items-center justify-center px-4 py-20 sm:py-28 overflow-hidden bg-gray-900">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
      
      {/* Animated background elements with improved effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 opacity-20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500 opacity-15 rounded-full blur-xl animate-float [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-indigo-500 opacity-10 rounded-full blur-2xl animate-bounce-gentle [animation-delay:2s]"></div>
        
        {/* Particle effect elements (randomized fade-in/out without overlapping important content) */}
        <FloatingParticles count={18} />
        
        
        
        
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 mb-2 animate-fade-in-up bg-size-200 animate-shimmer bg-gradient-to-r">
            Nikhil Patel
          </span>
          <span className="animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Student Engineer
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 leading-normal animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            & Designer
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
          Passionate about creating innovative solutions that bridge the gap between 
          engineering principles and real-world application. Currently studying to complete my degree in Electrical Engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 px-2 animate-fade-in-up [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 group relative overflow-hidden"
            onClick={scrollToProjects}
          >
            <span className="relative z-10">View My Projects</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-xl group"
          >
            <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
              Download Resume
            </span>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mt-6 mb-4 animate-fade-in-up [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
          <a 
            href="https://github.com/Nikhil-ISo" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-500 hover:scale-125 transform group relative"
          >
            <Github className="h-6 sm:h-8 w-6 sm:w-8 transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-400/50" />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
          </a>
          <a 
            href="https://www.linkedin.com/in/nikhil-patel-ba1581281/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-500 hover:scale-125 transform group relative"
          >
            <Linkedin className="h-6 sm:h-8 w-6 sm:w-8 transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-400/50" />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
          </a>
          <a 
            href="mailto:nikhil.patel@usask.ca.com" 
            className="text-gray-400 hover:text-blue-400 transition-all duration-500 hover:scale-125 transform group relative"
          >
            <Mail className="h-6 sm:h-8 w-6 sm:w-8 transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-400/50" />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
