// ============================================
// EDIT YOUR PROJECTS HERE
// ============================================
export type Project = {
  num: string;
  type: string;
  name: string;
  desc: string;
  tags: string[];
  link?: string;
  status?: "live" | "beta" | "wip" | "beta_soon";
};

export const PROJECTS: Project[] = [
  {
    num: "01",
    type: "MARKETPLACE",
    name: "TradeConnect",
    desc: "Two-sided mobile marketplace connecting homeowners with skilled tradespeople. Real-time chat with file attachments, job posting, contractor reviews, and Stripe payments — built end to end.",
    tags: ["React Native", "Expo", "Supabase", "Stripe"],
    status: "beta_soon",
    link: "https://github.com/peteramajor",
  },
  {
    num: "02",
    type: "FITNESS APP",
    name: "Flexyn",
    desc: "AI-powered fitness app with adaptive workout plans that adjust in real time based on sleep, adherence, and nutrition signals via the AdaptiveFit engine.",
    tags: ["React Native", "FastAPI", "LangChain", "Railway"],
    status: "wip",
    link: "https://github.com/peteramajor",
  },
  {
    num: "03",
    type: "HACKATHON · BEST APP WINNER",
    name: "SplitEasy",
    desc: "Built in 48 hours at the Slack x GDI Hackathon 2025. Cross-device expense splitting with OCR receipt scanning, real-time sync, and full accessibility compliance.",
    tags: ["Slack API", "Node.js", "OCR"],
    status: "live",
    link: "https://github.com/gardenqu/Easy-Split-Gdi-Hackathon-2025",
  },
  {
    num: "04",
    type: "AI TOOL",
    name: "FSDDataWatch",
    desc: "Autonomous vehicle data quality analyzer — ingests driving telemetry, scores data quality with AI, and generates operator reports with flagged events and recommendations.",
    tags: ["Python", "FastAPI", "OpenAI API", "Next.js", "C++"],
    status: "live",
    link: "https://github.com/peteramajor",
  },
  {
    num: "05",
    type: "AI TOOL",
    name: "RepoLore",
    desc: "Turns any GitHub repo into readable documentation and diagrams automatically. Cut documentation time by 50% in testing.",
    tags: ["Next.js", "Node.js", "GitHub API", "OpenAI API"],
    status: "live",
    link: "https://repolore.vercel.app/",
  },
  {
    num: "06",
    type: "COMING SOON",
    name: "Invoice App",
    desc: "Dark, premium invoicing tool for freelancers and small businesses. Free tier, Stripe billing, and PDF exports.",
    tags: ["Next.js", "Supabase", "Stripe"],
    status: "wip",
  },
];

const STATUS_STYLES: Record<string, { label: string; color: string }> = {
  live: { label: "LIVE", color: "#22AA44" },
  beta: { label: "BETA", color: "#AA8800" },
  wip: { label: "IN PROGRESS", color: "#666" },
  beta_soon: { label: "BETA · COMING SOON", color: "#AA8800" },
};

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const status = project.status ? STATUS_STYLES[project.status] : null;

  return (
    <div
      className="group relative border border-[#1a0a0a] p-5 hover:border-[#CC000055] transition-all duration-300 cursor-default"
      style={{ background: "#0a0303" }}
    >
      <span
        className="absolute top-3 right-4 font-vt323 text-5xl pointer-events-none select-none"
        style={{ color: "#150505" }}
      >
        {project.num}
      </span>

      <p className="font-vt323 text-xs tracking-[3px] text-[#CC0000] mb-2">
        {project.type}
      </p>

      <h3 className="font-baskerville font-bold text-lg text-[#c8bfb0] mb-3 group-hover:text-[#e8e0d0] transition-colors">
        {project.name}
      </h3>

      <p className="text-xs text-[#555] leading-relaxed mb-4" style={{ fontFamily: "'Special Elite', serif" }}>
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-vt323 text-xs tracking-[1px] text-[#555] border border-[#1f1f1f] px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        {status && (
          <span className="font-vt323 text-xs tracking-[2px]" style={{ color: status.color }}>
            ● {status.label}
          </span>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-vt323 text-xs tracking-[2px] text-[#444] hover:text-[#CC0000] transition-colors ml-auto"
          >
            VIEW →
          </a>
        )}
      </div>
    </div>
  );
}
