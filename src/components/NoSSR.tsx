"use client";
import dynamic from "next/dynamic";

// This allows you to render any component without SSR
export function NoSSR({ children }: { children: React.ReactNode }) {
  const NoSSRWrapper = dynamic(() => Promise.resolve(() => <>{children}</>), {
    ssr: false,
  });

  return <NoSSRWrapper />;
}
