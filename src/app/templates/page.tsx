"use client";

import * as React from 'react';
import { useState, useMemo } from 'react';
import { TemplateCard } from '@/components/feature/template-card';
import { pageTemplates, type PageTemplate } from '@/data/templates';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTemplates = useMemo(() => {
    if (!searchTerm) return pageTemplates;
    return pageTemplates.filter(template =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Page Templates
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Browse our collection of professionally designed page templates. Kickstart your projects with ready-to-use layouts.
        </p>
      </header>
      
      <div className="sticky top-16 z-40 bg-background/90 py-4 backdrop-blur-sm mb-8">
        <div className="relative max-w-xl mx-auto">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search templates (e.g., landing, portfolio, e-commerce)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
              aria-label="Search templates"
            />
        </div>
      </div>

      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No templates found matching your search.</p>
        </div>
      )}
    </div>
  );
}
