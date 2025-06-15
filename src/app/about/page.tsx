import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb } from 'lucide-react';
import Image from "next/image";

export const metadata = {
  title: 'About Us - Code Showcase',
  description: 'Learn more about Code Showcase, our mission, and our vision for empowering developers.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          About Code Showcase
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Empowering developers with tools and resources to build beautiful, functional, and accessible user interfaces with speed and confidence.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Team working on UI designs"
            layout="fill"
            objectFit="cover"
            data-ai-hint="team collaboration"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-semibold">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Code Showcase was born from a passion for elegant UI design and efficient development. We noticed a common challenge among developers: finding high-quality, reusable components and templates quickly, and understanding how best to combine them. Our goal is to bridge this gap.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that great UIs are not just about aesthetics but also about usability, accessibility, and performance. That's why we meticulously curate our components and templates, and offer AI-powered suggestions to help you make informed design decisions.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide developers with a comprehensive toolkit of UI components, templates, and AI-driven insights, enabling them to build exceptional user experiences faster and more effectively.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the leading platform for UI development resources, fostering a community where developers can discover, share, and innovate in UI design and implementation.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Who We Are</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are a team of passionate designers and developers dedicated to improving the way UIs are built. We love clean code, intuitive design, and empowering our fellow creators.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="text-center py-10">
        <h2 className="font-headline text-3xl font-semibold">Join Our Journey</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          We're constantly evolving and adding new features. Follow our progress and contribute to making Code Showcase even better!
        </p>
      </section>
    </div>
  );
}
