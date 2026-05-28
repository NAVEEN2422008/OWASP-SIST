"use client";

import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/utils";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  hasGlowEffect?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", hasGlowEffect = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyles =
      "relative inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none overflow-hidden";

    const variants = {
      primary:
        "bg-white text-bg-primary shadow-premium",
      secondary:
        "bg-white/10 text-white border border-white/10 backdrop-blur-sm",
      outline:
        "border border-white/20 text-white",
      ghost: "bg-transparent text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-3.5 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as unknown as Record<string, unknown>)}
      >
        {/* Background shimmer effect on hover */}
        {hasGlowEffect && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
            animate={isHovered ? { x: ["100%", "-100%"] } : { x: "-100%" }}
            transition={{ duration: 0.6, ease: "linear", repeat: isHovered ? Infinity : 0 }}
            style={{ pointerEvents: "none" }}
          />
        )}

        {/* Content wrapper for proper layering */}
        <span className="relative z-10">{props.children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
