
import { AiSuggestionForm } from '@/components/feature/ai-suggestion-form';
import {
  Sparkles,
  FileCode,
  Pencil,
  LayoutTemplate,
  Sparkle,
  Code2,
  GaugeCircle,
  MonitorPlay,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import { AuroraText } from '@/components/magicui/aurora-text';

export const metadata = {
  title: 'AI UI Assistant - Code Showcase',
  description: 'Leverage AI to design, build, and refine your UI. Get suggestions, generate new components, or get help editing existing ones.',
};

const iconMap = {
  Sparkles,
  FileCode,
  Pencil,
  LayoutTemplate,
  Sparkle,
  Code2,
  GaugeCircle,
  MonitorPlay,
};

type CardItem = {
  title: string;
  desc: string;
  icon: keyof typeof iconMap;
};

const CardData: CardItem[] = [
  { title: "Smart Suggestions", desc: "Suggesting optimal component combinations.", icon: "Sparkles" },
  { title: "Code Generation", desc: "Generating code for new UI components.", icon: "FileCode" },
  { title: "Component Editing", desc: "Modifying existing components with new code.", icon: "Pencil" },
  { title: "Full Page Creation", desc: "Creating new pages with complete code and layouts.", icon: "LayoutTemplate" },
  // { title: "Next-Gen UI", desc: "Built with ShadCN, polished with Tailwind & animations.", icon: "Sparkle" },
  // { title: "Dev Friendly", desc: "Easily extendable, component-based layout, clean code.", icon: "Code2" },
  // { title: "Performance First", desc: "Blazing fast loading, minimal deps, scalable structure.", icon: "GaugeCircle" },
  // { title: "Real-time Preview", desc: "Instantly see component previews and code updates as you build.", icon: "MonitorPlay" },
];



export default function AiSuggesterPage() {
  return (
    <div className="space-y-10 py-5">
      <header className="text-center px-4">
        <div className="text-center justify-center">
          <div className="inline-block text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full py-2 px-6 mb-7 shadow-md animate-fade-in">
            <a
              href="#"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:underline font-medium"
            >
              <span className='tracking-tighter'>
                ✨AI Assistant Update: Better predictions, Createing & UX tips.
              </span>
            </a>
          </div>
        </div>

        <h1 className="font-headline text-4xl font-bold xl:tracking-wide sm:text-5xl lg:text-6xl">
          <AuroraText
            speed={6}
            colors={["#3b82f6", "#2563eb", "#1d4ed8", "#1e40af"]}
            className='mr-4'>
            AI
          </AuroraText>UI Assistant
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Unleash the power of AI for your UI development. Describe your requirements, and our AI can assist with:
        </p>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-20 mt-8">
          {CardData.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card
                key={i}
                className="hover:scale-105 transition-transform shadow-md hover:shadow-xl bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {Icon && <Icon className="h-5 w-5 text-primary" />}
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </header>
      <div className="xl:px-10 lg:px-6 md:px-4">
        <AiSuggestionForm />
      </div>
    </div>
  );
}
