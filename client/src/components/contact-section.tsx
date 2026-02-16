import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
  
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const emails = ["mburugranton@gmail.com", "mburugrantonnyange@gmail.com"];
      await Promise.all(
        emails.map((email) =>
          emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              from_name: data.name,
              from_email: data.email,
              reply_to: data.email,
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
    <section id="contact" className="py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Big CTA + details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">05 — Contact</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
              Let's build
              <br />
              <span className="text-muted-foreground/30">something great.</span>
            </h2>
            
            <p className="text-muted-foreground mt-6 mb-10 max-w-sm leading-relaxed">
              Have a project in mind or just want to connect? I'm always open to new conversations and collaborations.
            </p>
            
            {/* Contact details — minimal */}
            <div className="space-y-4 mb-10">
              <a href="mailto:mburugranton@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <Mail className="w-4 h-4" />
                <span>mburugranton@gmail.com</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            
            {/* Socials — clean row */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/MburuGranton" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                <FiGithub className="w-4 h-4" />
              </a>
              <a href="https://x.com/GrantonMburu" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                <FiTwitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/granton-nyange-6a00401a1/" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-xs font-medium text-muted-foreground mb-2 block">Name</Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="bg-card border-border/50 rounded-xl h-11"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-medium text-muted-foreground mb-2 block">Email</Label>
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
                    className="bg-card border-border/50 rounded-xl h-11"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-xs font-medium text-muted-foreground mb-2 block">Subject</Label>
                <Input
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="bg-card border-border/50 rounded-xl h-11"
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-xs font-medium text-muted-foreground mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="bg-card border-border/50 rounded-xl resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-11 font-medium"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
