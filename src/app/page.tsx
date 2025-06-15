
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, LayoutDashboard, Rocket } from 'lucide-react';
import { ComponentCard } from '@/components/feature/component-card';
import { uiComponents } from '@/data/components';
import Image from 'next/image';

const featuredComponents = uiComponents.slice(0, 3);

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          Build Beautiful UIs, <span className="text-primary">Faster</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-foreground">Code Showcase</span> – your ultimate resource for modern UI components,
          page templates, and AI-powered design suggestions. Streamline your development workflow and create stunning interfaces with ease.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
            <Link href="/components">
              <Rocket className="mr-2 h-5 w-5" /> Explore Components
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
            <Link href="/templates">
              <LayoutDashboard className="mr-2 h-5 w-5" /> View Templates
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Components Section */}
      <section className="space-y-8">
        <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold">Featured Components</h2>
            <p className="mt-2 text-muted-foreground">Get a glimpse of our versatile UI components.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="link" className="text-primary text-lg">
            <Link href="/components">
              View All Components <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Page Templates Teaser */}
      <section className="bg-secondary/50 rounded-lg p-8 md:p-12 shadow-md">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <LayoutDashboard className="h-12 w-12 text-primary mb-4" />
            <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-4">Pre-built Page Templates</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Jumpstart your projects with our collection of professionally designed page templates.
              From landing pages to dashboards, find the perfect starting point.
            </p>
            <Button asChild size="lg">
              <Link href="/templates">
                Browse Templates <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
             <Image 
                src="https://placehold.co/600x400.png" 
                alt="Template Preview Collage" 
                layout="fill"
                objectFit="cover"
                data-ai-hint="templates collage"
                className="rounded-lg"
              />
          </div>
        </div>
      </section>

      {/* AI Suggester Teaser */}
      <section className="text-center py-12 md:py-16">
        <Cpu className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="font-headline text-3xl md:text-4xl font-semibold">Intelligent Component Suggestions</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Not sure which components to use? Our AI-powered tool analyzes your needs
          and suggests the optimal combinations, complete with reasoning.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-shadow">
            <Link href="/ai-suggester">
              Try the AI Suggester <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
