import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { FiGithub, FiTwitter, FiLinkedin, FiDribbble } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  
  // Monitor theme changes
  useEffect(() => {
    const updateTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setTheme(isDarkMode ? "dark" : "light");
    };
    
    // Set initial theme
    updateTheme();
    
    // Watch for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const emails = ["mburugranton@gmail.com", "mburugrantonnyange@gmail.com"];
      
      // Send to both email addresses
      await Promise.all(
        emails.map((email) =>
          emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              from_name: data.name,
              from_email: data.email,
              subject: data.subject,
              message: data.message,
              to_email: email,
            }
          )
        )
      );
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <span className="inline-block text-sm font-medium text-primary mb-4">Contact Me</span>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Let's work together on your next project
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently available for freelance work. If you have a project that needs some creative direction, development work, or improvement, feel free to contact me.
              </p>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <div className="text-primary bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-0.5">Phone</h3>
                    <p className="text-muted-foreground text-sm">+254 705 146 863</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-0.5">Email</h3>
                    <p className="text-muted-foreground text-sm">mburugranton@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-0.5">Location</h3>
                    <p className="text-muted-foreground text-sm">Kenya</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <a href="https://github.com/MburuGranton" className="text-muted-foreground hover:text-primary transition-colors w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="https://x.com/GrantonMburu" className="text-muted-foreground hover:text-primary transition-colors w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/granton-nyange-6a00401a1/" className="text-muted-foreground hover:text-primary transition-colors w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50">
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50">
                  <FiDribbble className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-background border border-border p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-5">Send me a message</h3>
                
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full"
                      placeholder="Your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium mb-1.5">Subject</Label>
                    <Input
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      className="w-full"
                      placeholder="Subject"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      rows={4}
                      className="w-full"
                      placeholder="Your message"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
