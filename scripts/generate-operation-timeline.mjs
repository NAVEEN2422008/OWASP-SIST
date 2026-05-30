import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REMOTE_MARKDOWN_URLS = [
  "https://raw.githubusercontent.com/OWASP/www-chapter-sathyabama-institute-of-science-and-technology/main/tab_upcoming.md",
  "https://raw.githubusercontent.com/OWASP/www-chapter-sathyabama-institute-of-science-and-technology/main/tab_pastevents.md",
];

const OUTPUT_PATH = path.join(__dirname, "../src/data/operation-timeline.json");

function normalizeImageUrl(raw = "") {
  let url = raw.trim();
  if (!url) return undefined;
  url = url.replace(/\s+/g, "%20");
  if (url.includes("github.com") && url.includes("/blob/")) {
    url = url.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
  }
  return url;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/["'“”‘’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function parseDateToIso(value) {
  if (!value) return undefined;
  const cleaned = value.replace(/\[.*?\]/g, "").trim();
  const first = cleaned.split(/[,&]/)[0].trim();
  const parts = first.split("/").map((p) => p.trim());
  if (parts.length !== 3) return undefined;
  const [day, month, year] = parts;
  if (!/^\d{1,2}$/.test(day) || !/^\d{1,2}$/.test(month) || !/^\d{4}$/.test(year)) {
    return undefined;
  }
  const dd = day.padStart(2, "0");
  const mm = month.padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

function extractField(block, label) {
  const pattern = new RegExp(`\\*\\*${label}\\s*:\\s*([\\s\\S]*?)(?=\\*\\*[^:]+\\s*:\\s*|<br|<p|$)`, "i");
  const match = block.match(pattern);
  if (!match) return undefined;
  return match[1].replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function detectCategory(title, topic) {
  const all = `${title || ""} ${topic || ""}`;
  if (/\b(ctf|capture the flag|bug hunt|hack(?:ing)?)\b/i.test(all)) return "CTF";
  if (/\b(workshop|training|session|course|masterclass|bootcamp)\b/i.test(all)) return "Workshop";
  if (/\b(talk|speaker|research|career|discussion)\b/i.test(all)) return "Talk";
  return "Community";
}

function parseMarkdown(markdown) {
  const blocks = markdown.split(/^___+/m).map((block) => block.trim()).filter(Boolean);
  const events = [];

  blocks.forEach((block) => {
    if (/^---\s*$/.test(block)) return; // skip frontmatter-like blocks

    const title = extractField(block, "Event Title") || extractField(block, "Event") || undefined;
    const speaker = extractField(block, "Event Speaker") || extractField(block, "Speaker") || undefined;
    const venue = extractField(block, "Event Venue") || extractField(block, "Venue") || undefined;
    const rawDate = extractField(block, "Event Date") || extractField(block, "Date") || undefined;
    const topic = extractField(block, "Event Topic") || extractField(block, "Topic") || undefined;
    const imageUrl = normalizeImageUrl((block.match(/<img[^>]+src=["']([^"']+)["']/i) || [])[1] || "");

    const dateISO = parseDateToIso(rawDate) || undefined;
    const dateLabel = dateISO ? dateISO.slice(0, 4) : undefined;
    const category = detectCategory(title, topic);
    const theme = topic || category;
    const description = topic || `A ${category} event.`;
    const slug = slugify(title || speaker || `event-${events.length + 1}`);
    const tags = [category];

    if (!title && !speaker) return;

    events.push({
      slug,
      title: title || speaker,
      description,
      dateISO: dateISO || "",
      dateLabel: dateLabel || "",
      dateStr: rawDate || dateLabel || "",
      theme,
      category,
      tags,
      speaker,
      venue,
      imageUrl,
    });
  });

  return events.filter((event) => event.title && event.dateISO);
}

async function fetchRemote(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unable to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return await response.text();
}

async function main() {
  const allEvents = [];

  for (const url of REMOTE_MARKDOWN_URLS) {
    process.stdout.write(`Fetching ${url}... `);
    try {
      const markdown = await fetchRemote(url);
      const events = parseMarkdown(markdown);
      process.stdout.write(`parsed ${events.length} events\n`);
      allEvents.push(...events);
    } catch (error) {
      process.stdout.write(`failed: ${error.message}\n`);
    }
  }

  const unique = Array.from(new Map(allEvents.map((event) => [event.slug, event])).values());
  unique.sort((a, b) => (b.dateISO || "").localeCompare(a.dateISO || ""));

  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(unique, null, 2));
  console.log(`\nWrote ${unique.length} operation timeline events to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
