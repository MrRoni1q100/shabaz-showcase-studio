import { Mail, Star, Award, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const stats = [
  { icon: Star, text: "4.9/5 Average Ratings" },
  { icon: Award, text: "25+ Winning Awards" },
  { icon: CheckCircle, text: "Certified Product Designer" },
];

const services = [
  "Web Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
  "Web Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
];

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission
    setEmail("");
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Main CTA */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Have an Awsome Project Idea?{" "}
            <span className="text-primary">Let's Discuss</span>
          </h2>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
            <div className="flex gap-2 p-2 bg-card border-2 border-border rounded-full hover:border-primary transition-colors">
              <div className="flex items-center pl-4">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <Input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90"
              >
                Send
              </Button>
            </div>
          </form>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Services Banner */}
        <div className="relative overflow-hidden bg-primary py-6 rounded-2xl">
          <div className="flex animate-scroll whitespace-nowrap">
            {services.map((service, index) => (
              <div key={index} className="inline-flex items-center mx-4">
                <span className="text-lg font-bold text-primary-foreground">
                  {service}
                </span>
                <span className="mx-4 text-primary-foreground text-2xl">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CTA;
