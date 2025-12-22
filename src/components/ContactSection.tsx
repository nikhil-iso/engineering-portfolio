import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DEFAULT_WEB3FORMS_KEY = "57552333-638f-41a0-8e70-9ed33ef005ec";

interface ContactSectionProps {
  compactTop?: boolean;
}

const ContactSection = ({ compactTop = false }: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY?.trim() || DEFAULT_WEB3FORMS_KEY;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const firstName = (formData.get("firstName") ?? "").toString().trim();
      const lastName = (formData.get("lastName") ?? "").toString().trim();
      const email = (formData.get("email") ?? "").toString().trim();
      const subject = (formData.get("subject") ?? "").toString().trim() || "Portfolio contact form";
      const message = (formData.get("message") ?? "").toString().trim();
      const phoneNumber = (formData.get("phone_number") ?? "").toString().trim();

      if (!firstName || !lastName || !email || !message) {
        toast({
          title: "Missing information",
          description: "First name, last name, email, and message are required.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const payload = {
        access_key: web3FormsKey,
        name: `${firstName} ${lastName}`.trim(),
        email,
        subject,
        message,
        phone_number: phoneNumber,
        from_name: "Engineering Portfolio Contact Form",
      };

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send message right now.");
      }

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const spacingClasses = compactTop ? "pt-6 sm:pt-10 pb-12 sm:pb-16" : "py-12 sm:py-20";

  return (
    <section
      ref={sectionRef}
      className={`${spacingClasses} px-4 max-w-6xl mx-auto transition-all duration-700 ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-fade-in [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]"></div>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 animate-fade-in-up [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
          I'm always excited to discuss new opportunities, collaborate on projects, or share insights about engineering and technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Form */}
        <Card className="bg-gray-800/90 backdrop-blur-sm shadow-2xl border-gray-700/50 animate-fade-in-left [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards] group hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-lg transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-500"></div>
          
          <CardHeader className="space-y-2 sm:space-y-3 relative z-10">
            <CardTitle className="text-xl sm:text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500">Send Me a Message</CardTitle>
            <CardDescription className="text-gray-300 text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
              Whether you have a project idea, or are reaching out about a job opportunity!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 relative z-10">
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
              {/* Honeypot field - hidden from real users */}
              <input
                type="text"
                name="phone_number"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1.5 sm:mb-2 block">First Name</label>
                  <Input 
                    name="firstName"
                    required
                    placeholder="Peter" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1.5 sm:mb-2 block">Last Name</label>
                  <Input 
                    name="lastName"
                    required
                    placeholder="Parker" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 sm:mb-2 block">Email</label>
                <Input 
                  type="email" 
                  name="email"
                  required
                  placeholder="not.spiderman@example.com" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 sm:mb-2 block">Subject</label>
                <Input 
                  name="subject"
                  required
                  placeholder="Project Collaboration Opportunity" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 sm:mb-2 block">Message</label>
                <Textarea 
                  name="message"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="min-h-[100px] sm:min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6 sm:space-y-8 animate-fade-in-right [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-2xl group hover:shadow-blue-500/25 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700 animate-float"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-xl transform translate-x-16 translate-y-16 group-hover:scale-125 transition-transform duration-500 animate-float [animation-delay:1s]"></div>
            
            <CardHeader className="space-y-2 sm:space-y-3 relative z-10">
              <CardTitle className="text-xl sm:text-2xl animate-fade-in [animation-delay:1s]">Get In Touch</CardTitle>
              <CardDescription className="text-blue-100 text-sm sm:text-base animate-fade-in [animation-delay:1.2s]">
                Ready to start a conversation? Here are the best ways to reach me.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 relative z-10">
              <div className="flex items-center space-x-4 group/item hover:scale-105 transition-transform duration-300 animate-fade-in-left [animation-delay:1.4s]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center group-hover/item:bg-white/30 transition-colors duration-300 group-hover/item:scale-110">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 group-hover/item:animate-bounce-gentle" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Email</h3>
                  <p
                    className="text-blue-100 text-sm sm:text-base hover:text-white transition-colors duration-300"
                    dangerouslySetInnerHTML={{
                      __html:
                        "<a href='mail&#116;o&#58;&#110;&#105;&#107;&#104;&#105;&#108;&#46;&#112;&#97;&#116;&#101;&#108;&#64;&#117;&#115;&#97;&#115;&#107;&#46;&#99;&#97;' class='hover:underline'>&#110;&#105;&#107;&#104;&#105;&#108;&#46;&#112;&#97;&#116;&#101;&#108;&#64;&#117;&#115;&#97;&#115;&#107;&#46;&#99;&#97;</a>",
                    }}
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group/item hover:scale-105 transition-transform duration-300 animate-fade-in-left [animation-delay:1.6s]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center group-hover/item:bg-white/30 transition-colors duration-300 group-hover/item:scale-110">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 group-hover/item:animate-bounce-gentle" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Location</h3>
                  <p className="text-blue-100 text-sm sm:text-base">University of Saskatchewan, Saskatoon, SK</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 group hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1 animate-scale-in [animation-delay:1.8s]">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">Open to Opportunities</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Currently seeking internships, co-op positions, and collaborative projects in Electrical engineering and Mechatronics technology.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 text-sm sm:text-base py-2 sm:py-2.5 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 group/btn relative overflow-hidden"
              >
                <a href="/website_resume.pdf" download target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
