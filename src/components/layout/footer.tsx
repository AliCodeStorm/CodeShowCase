export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Code Showcase. All rights reserved.</p>
        <p className="mt-2">
          Discover components, templates, and AI-powered suggestions to accelerate your UI development.
        </p>
      </div>
    </footer>
  );
}
