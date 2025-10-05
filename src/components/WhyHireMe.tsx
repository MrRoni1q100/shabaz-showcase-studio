import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "10+ Years Experience",
    description: "Over a decade of creating successful digital products for clients worldwide",
  },
  {
    title: "User-Centered Design",
    description: "Every design decision is backed by user research and data-driven insights",
  },
  {
    title: "Fast Delivery",
    description: "Efficient workflow ensures timely delivery without compromising quality",
  },
  {
    title: "Modern Approach",
    description: "Stay updated with latest design trends and technologies",
  },
  {
    title: "Client Satisfaction",
    description: "5-star rated with highly satisfied clients across various industries",
  },
  {
    title: "End-to-End Solution",
    description: "From research and strategy to final implementation and support",
  },
];

const WhyHireMe = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-primary">Hire Me?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I bring expertise, creativity, and dedication to every project, ensuring exceptional results that exceed expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 bg-card border-2 border-border rounded-2xl hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
