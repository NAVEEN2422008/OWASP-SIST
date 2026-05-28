"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/utils";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function CyberCard({
  children,
  className,
  delay = 0,
}: CyberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, delay }}
      className={cn(
        "glass-panel rounded-[1.75rem] p-7 border border-white/10 bg-[#050505] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
