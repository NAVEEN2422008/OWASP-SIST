// ClientLayout.tsx
// Wraps children with client-only UX primitives (scroll + transitions)
"use client";
import React from "react";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageTransition from "@/components/ui/PageTransition";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll>
        <PageTransition>{children}</PageTransition>
      </SmoothScroll>
    </>
  );
}