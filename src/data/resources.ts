export type ResourceCategory =
  | "YouTube"
  | "Platform"
  | "OWASP"
  | "Books"
  | "Labs";

export interface ResourceItem {
  name: string;
  category: ResourceCategory;
  description: string;
  url: string;
}

export const resources: ResourceItem[] = [
  {
    name: "MyDFIR",
    category: "YouTube",
    description: "DFIR, blue team, SOC analysis, packet capture, and log review.",
    url: "https://youtube.com/@MyDFIR",
  },
  {
    name: "NahamSec",
    category: "YouTube",
    description: "Bug bounty workflows, recon, and live hacking conversations.",
    url: "https://youtube.com/@NahamSec",
  },
  {
    name: "STOK Fredrik",
    category: "YouTube",
    description: "Bug bounty automation, methodology, and live bounty streams.",
    url: "https://youtube.com/@STOKfredrik",
  },
  {
    name: "The Cyber Mentor",
    category: "YouTube",
    description: "Practical pentesting courses and ethical hacking fundamentals.",
    url: "https://youtube.com/c/TheCyberMentor",
  },
  {
    name: "John Hammond",
    category: "YouTube",
    description: "CTF walkthroughs, malware analysis, and training labs.",
    url: "https://youtube.com/c/JohnHammond010",
  },
  {
    name: "IppSec",
    category: "YouTube",
    description: "Hack The Box walkthroughs and infrastructure-focused CTF study.",
    url: "https://youtube.com/c/IppSec",
  },
  {
    name: "LiveOverflow",
    category: "YouTube",
    description: "Advanced hacking, binary exploitation, and systems internals.",
    url: "https://youtube.com/c/LiveOverflow",
  },
  {
    name: "HackerSploit",
    category: "YouTube",
    description: "Ethical hacking, Kali Linux workflows, and web pentesting.",
    url: "https://youtube.com/c/HackerSploit",
  },
  {
    name: "NetworkChuck",
    category: "YouTube",
    description: "Networking concepts, labs, and security-friendly infrastructure study.",
    url: "https://youtube.com/user/NetworkChuck",
  },
  {
    name: "David Bombal",
    category: "YouTube",
    description: "Wireshark, networking, Cisco, and security tooling explainers.",
    url: "https://youtube.com/c/DavidBombal",
  },
  {
    name: "Practical Networking",
    category: "YouTube",
    description: "Core networking fundamentals such as IP, routing, and switching.",
    url: "https://youtube.com/c/PracticalNetworking",
  },
  {
    name: "Black Hills InfoSec",
    category: "YouTube",
    description: "Threat hunting, detection, and red-team and blue-team techniques.",
    url: "https://youtube.com/c/BlackHillsInformationSecurity",
  },
  {
    name: "13Cubed",
    category: "YouTube",
    description: "CTF solutions, forensics, and web exploitation tutorials.",
    url: "https://youtube.com/c/13Cubed",
  },
  {
    name: "PwnFunction",
    category: "YouTube",
    description: "Pwn challenges, ROP, and exploitation-oriented learning.",
    url: "https://youtube.com/c/PwnFunction",
  },
  {
    name: "Inside Out Security",
    category: "YouTube",
    description: "Bug bounty and web application security learning.",
    url: "https://youtube.com/c/InsideOutSecurity",
  },
  {
    name: "Bugcrowd University",
    category: "YouTube",
    description: "Bug bounty methodology, reporting, and training guidance.",
    url: "https://youtube.com/c/Bugcrowd",
  },
  {
    name: "PicoCTF",
    category: "Platform",
    description: "Beginner-friendly CTF challenges across web, crypto, reverse, and forensics.",
    url: "https://picoctf.org",
  },
  {
    name: "OverTheWire",
    category: "Platform",
    description: "Linux and exploitation-focused wargames built around SSH and binaries.",
    url: "https://overthewire.org",
  },
  {
    name: "PwnCollege",
    category: "Platform",
    description: "Binary exploitation practice covering shellcode, ROP, and pwn challenges.",
    url: "https://pwn.college",
  },
  {
    name: "CryptoHack",
    category: "Platform",
    description: "Interactive cryptography lessons and challenge tracks.",
    url: "https://cryptohack.org",
  },
  {
    name: "Hack The Box",
    category: "Platform",
    description: "Advanced pentesting labs with realistic machines and OSCP-style practice.",
    url: "https://hackthebox.com",
  },
  {
    name: "TryHackMe",
    category: "Platform",
    description: "Guided learning rooms and beginner-friendly cyber security paths.",
    url: "https://tryhackme.com",
  },
  {
    name: "PortSwigger Web Security Academy",
    category: "Platform",
    description: "Web security labs mapped to common vulnerabilities and Burp Suite workflows.",
    url: "https://portswigger.net/web-security",
  },
  {
    name: "VulnHub",
    category: "Platform",
    description: "Downloadable vulnerable virtual machines for hands-on practice.",
    url: "https://vulnhub.com",
  },
  {
    name: "RootMe",
    category: "Platform",
    description: "Multi-discipline CTF challenges covering web, crypto, reversing, and forensics.",
    url: "https://www.root-me.org",
  },
  {
    name: "CTFtime",
    category: "Platform",
    description: "Live competition calendar and scoreboard for upcoming CTFs.",
    url: "https://ctftime.org",
  },
  {
    name: "DVWA",
    category: "Platform",
    description: "Damn Vulnerable Web Application for web security practice and demos.",
    url: "https://github.com/digininja/DVWA",
  },
  {
    name: "RingZer0",
    category: "Platform",
    description: "Large CTF catalog with challenges across many security categories.",
    url: "https://ringzer0ctf.com",
  },
  {
    name: "HackThisSite",
    category: "Platform",
    description: "Basic to advanced web hacking challenges for practice.",
    url: "https://hackthissite.org",
  },
  {
    name: "OWASP Top 10",
    category: "OWASP",
    description: "Most critical web application security risks.",
    url: "https://owasp.org/Top10/",
  },
  {
    name: "OWASP Testing Guide",
    category: "OWASP",
    description: "Web application security testing methodology and guidance.",
    url: "https://owasp.org/www-project-web-security-testing-guide/",
  },
  {
    name: "OWASP Cheat Sheet Series",
    category: "OWASP",
    description: "Quick-reference security best practices for development and testing.",
    url: "https://cheatsheetseries.owasp.org",
  },
  {
    name: "OWASP ASVS",
    category: "OWASP",
    description: "Application Security Verification Standard for security requirements and reviews.",
    url: "https://owasp.org/www-project-application-security-verification-standard/",
  },
  {
    name: "OWASP Juice Shop",
    category: "OWASP",
    description: "Vulnerable practice application for modern web security learning.",
    url: "https://owasp.org/www-project-juice-shop/",
  },
  {
    name: "OWASP WebGoat",
    category: "OWASP",
    description: "OWASP learning platform for common web application security issues.",
    url: "https://owasp.org/www-project-webgoat/",
  },
  {
    name: "OWASP ZAP",
    category: "OWASP",
    description: "Free web application scanner and proxy for security testing.",
    url: "https://www.zaproxy.org",
  },
  {
    name: "OWASP API Security Top 10",
    category: "OWASP",
    description: "Top API-specific security risks and guidance.",
    url: "https://owasp.org/API-Security/",
  },
  {
    name: "OWASP SAMM",
    category: "OWASP",
    description: "Software assurance maturity model for improving security programs.",
    url: "https://owasp.org/www-project-samm/",
  },
  {
    name: "OWASP Benchmark",
    category: "OWASP",
    description: "Benchmark project for testing application security tools.",
    url: "https://owasp.org/www-project-benchmark/",
  },
  {
    name: "OWASP Dependency-Check",
    category: "OWASP",
    description: "Software composition analysis for third-party dependency risk.",
    url: "https://owasp.org/www-project-dependency-check/",
  },
  {
    name: "OWASP Flagship Projects",
    category: "OWASP",
    description: "Directory of OWASP projects, tools, and learning initiatives.",
    url: "https://owasp.org/projects/",
  },
];
