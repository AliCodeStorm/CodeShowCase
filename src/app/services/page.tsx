import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, LayoutDashboard, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Our Services - Code Showcase',
  description: 'Discover the services offered by Code Showcase, including UI components, page templates, and AI-powered suggestions.',
};

const services = [
  {
    icon: Rocket,
    title: "Curated UI Components",
    description: "Access a rich library of well-crafted, reusable UI components. Each component comes with a live preview and copy-pasteable code snippets, designed for easy integration into your React projects.",
    features: [
      "Professionally designed and responsive",
      "Easy to customize with Tailwind CSS",
      "Focus on accessibility and best practices",
      "Regularly updated with new additions"
    ]
  },
  {
    icon: LayoutDashboard,
    title: "Page Templates",
    description: "Kickstart your projects with a variety of pre-designed page templates. From landing pages to dashboards, our templates provide a solid foundation, saving you valuable development time.",
    features: [
      "Multiple categories: marketing, e-commerce, admin, etc.",
      "Built with components from our library",
      "Modern and clean designs",
      "Easy to adapt to your specific needs"
    ]
  },
  {
    icon: Cpu,
    title: "AI Component Suggester",
    description: "Leverage the power of AI to get recommendations for component combinations. Describe your UI needs or existing context, and our intelligent tool will suggest optimal solutions with explanations.",
    features: [
      "Context-aware suggestions",
      "Reasoning behind each recommendation",
      "Helps overcome design blocks",
      "Promotes best practices in UI architecture"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          What We Offer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Code Showcase provides a suite of tools and resources designed to accelerate your UI development workflow and help you build outstanding applications.
        </p>
      </header>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="text-center py-10 bg-secondary/50 rounded-lg shadow-md">
        <h2 className="font-headline text-3xl font-semibold">Ready to Elevate Your UI Game?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Start exploring our components, templates, and AI tools today. Let Code Showcase be your partner in crafting exceptional user experiences.
        </p>
      </section>
    </div>
  );
}
