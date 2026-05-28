import { FC } from "react";

export const meta = {
  slug: "memory-trace",
  title: "Memory Trace Writeup",
  description: "Analyze a captured trace to locate key forensic indicators and identify the root cause.",
  dateISO: "2024-10-11",
  author: "SIST Forensics Team",
  category: "Forensics",
  tags: ["Memory", "Forensics", "Tracing"],
};

const MemoryTraceWriteup: FC = () => (
  <>
    <h1>Memory Trace Writeup</h1>
    <p>
      The captured trace contains subtle artifacts that reveal the execution flow and can point to the
      root cause of the security incident.
    </p>
    <h2>Investigation steps</h2>
    <p>
      Focus on recurring patterns, unexpected memory allocations, and any anomalous pointers or data
      structures that appear in the trace.
    </p>
    <h2>Final takeaway</h2>
    <p>
      Forensic analysis is a process of reducing noise into a small set of actionable indicators. Use
      structured trace review to isolate the vulnerability and understand how it was triggered.
    </p>
  </>
);

export default MemoryTraceWriteup;
