"use client";

import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";
import { motion } from "framer-motion";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export default function Container({
    className,
    maxWidth = "lg",
    children,
    ...props
}: ContainerProps) {
    const maxWidths = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        "2xl": "max-w-screen-2xl",
        full: "w-full",
    };

    return (
        <div
            className={cn(
                "mx-auto px-4 sm:px-6 lg:px-8",
                maxWidths[maxWidth],
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

type SectionProps = React.ComponentPropsWithoutRef<typeof motion.section> & {
    children: ReactNode;
    fullHeight?: boolean;
};

export function Section({
    className,
    children,
    fullHeight = false,
    ...props
}: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cn(
                "relative py-24 md:py-32 overflow-hidden",
                fullHeight && "min-h-screen",
                className,
            )}
            {...props}
        >
            {children}
        </motion.section>
    );
}


