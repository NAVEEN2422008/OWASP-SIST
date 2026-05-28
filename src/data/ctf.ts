import type { ComponentType } from "react";
import BrokenAuthTokenWriteup from "@/content/writeups/broken-auth-token.tsx";
import SubtleCryptoPadWriteup from "@/content/writeups/subtle-crypto-pad.tsx";
import MemoryTraceWriteup from "@/content/writeups/memory-trace.tsx";

export type CtfDifficulty = "Beginner" | "Intermediate" | "Advanced";
export type CtfCategory =
    | "Web"
    | "Crypto"
    | "Forensics"
    | "Reverse"
    | "Pwn";

export interface CtfChallenge {
    slug: string;
    name: string;
    category: CtfCategory;
    difficulty: CtfDifficulty;
    points: number;
    description: string;
    downloadLabel?: string;
    writeup?: ComponentType;
}

export const ctfChallenges: CtfChallenge[] = [
    {
        slug: "broken-auth-token",
        name: "Broken Auth Token",
        category: "Web",
        difficulty: "Intermediate",
        points: 100,
        description:
            "Analyze a weak session/token scheme and recover the intended authorization state.",
        downloadLabel: "challenge.zip",
        writeup: BrokenAuthTokenWriteup,
    },
    {
        slug: "subtle-crypto-pad",
        name: "Subtle Crypto Pad",
        category: "Crypto",
        difficulty: "Advanced",
        points: 250,
        description:
            "Identify structural weakness in encryption parameters and extract the hidden plaintext.",
        downloadLabel: "crypto-chal.tar.gz",
        writeup: SubtleCryptoPadWriteup,
    },
    {
        slug: "memory-trace",
        name: "Memory Trace",
        category: "Forensics",
        difficulty: "Beginner",
        points: 75,
        description:
            "Perform lightweight triage on a captured trace to locate a key indicator.",
        downloadLabel: "trace.mem",
        writeup: MemoryTraceWriteup,
    },
];

