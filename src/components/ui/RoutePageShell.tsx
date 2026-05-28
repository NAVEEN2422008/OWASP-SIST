import { ReactNode } from "react";
import { cn } from "@/utils";

export function RoutePageShell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("py-24", className)}>{children}</div>;
}

export function RoutePageIntro({ title, description, eyebrow }: { title: string; description?: string; eyebrow?: string }) {
  return (
    <div className="mb-12 text-center page-wrap">
      {eyebrow && <div className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">{eyebrow}</div>}
      <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-widest">{title}</h1>
      {description && <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg">{description}</p>}
    </div>
  );
}
