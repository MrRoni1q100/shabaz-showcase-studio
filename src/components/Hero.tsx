import { Star, ArrowRight, Quote } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Hello Badge */}
          <div className="inline-flex items-center gap-2 animate-fade-in">
            <div className="px-6 py-2 bg-background rounded-full border-2 border-foreground text-sm font-medium">
              Hello!
            </div>
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-primary">
              <path d="M5 25C10 15 15 10 25 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I'm <span className="text-primary">Shabaz</span>,
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Product Designer
            </h2>
          </div>

          {/* Decorative curved line - left */}
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none" className="absolute left-[15%] top-[35%] text-primary hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <path d="M10 70C30 50 50 40 80 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>

          {/* Profile Image with large orange circle */}
          <div className="relative my-12 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {/* Large orange background circle */}
            <div className="absolute inset-0 -top-20 -bottom-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-primary/40 rounded-full -z-10" />
            
            {/* Testimonial Quote - Left Side */}
            <div className="absolute left-[-280px] top-1/2 transform -translate-y-1/2 hidden xl:block w-64 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Quote className="w-8 h-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground italic">
                Jenny's Exceptional product design ensure our website's success. Highly Recommended
              </p>
            </div>

            {/* Profile Image */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img 
                src={profileImg} 
                alt="Shabaz - Product Designer" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>

            {/* Experience Badge - Right Side */}
            <div className="absolute right-[-200px] top-1/2 transform -translate-y-1/2 hidden xl:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">10 Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 group">
              Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background px-8">
              Hire me
            </Button>
          </div>

          {/* Mobile/Tablet Experience Badge */}
          <div className="flex xl:hidden items-center gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">10 Years</div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
