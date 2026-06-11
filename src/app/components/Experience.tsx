const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "OhanaHelps",
    type: "Remote · Arizona startup",
    period: "Apr 2026 – Present",
    desc: "Building and shipping full-stack features on a two-sided handyman booking platform. Writing production code, working alongside senior engineers in an Agile team to design, review, and iterate on platform features that real users interact with every day.",
    tags: ["TypeScript", "Node.js", "REST APIs", "Agile"],
    current: true,
  },
  {
    role: "Founder & Software Engineer",
    company: "FemTech",
    type: "Self-employed · Remote",
    period: "Jan 2026 – Present",
    desc: "Running a solo dev studio that has digitized 25+ local businesses — building their first modern web presence from scratch. Designing and shipping storefronts, service platforms, and booking tools end-to-end, with an average 25% uplift in customer growth for clients.",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "SEO"],
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Private Client",
    type: "Contract · Remote",
    period: "Jul 2025 – Sept 2025",
    desc: "Designed and built a real-time waitlist management system that cut customer wait times by 30%. Architected the full stack — live queue tracking, automated SMS notifications, and a real-time data sync layer across frontend and backend.",
    tags: ["Next.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    role: "Data Analyst Intern",
    company: "Halo Security Solutions",
    type: "Remote",
    period: "Jun 2024 – Aug 2024",
    desc: "Analyzed 500+ purchase records to surface trends that influenced product decisions. Built dashboards that turned raw data into actionable insights and presented findings directly to leadership.",
    tags: ["Data Analysis", "Dashboards"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-8 py-16 border-t border-[#1a0505]" style={{ background: "#060202" }}>
      <p className="font-vt323 text-xs tracking-[5px] text-[#CC0000] mb-2">
        // THE BACKSTORY
      </p>
      <h2 className="font-baskerville font-bold text-3xl text-[#e8e0d0] mb-10">
        Experience
      </h2>

      <div className="flex flex-col gap-0">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="relative flex gap-4 sm:gap-8">
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
              <div
                className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
                style={{ background: job.current ? "#CC0000" : "#333", boxShadow: job.current ? "0 0 8px #CC000088" : "none" }}
              />
              {i < EXPERIENCE.length - 1 && (
                <div className="w-px flex-1 mt-1" style={{ background: "#1a0a0a", minHeight: "40px" }} />
              )}
            </div>

            {/* Content */}
            <div className="pb-10 flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-baskerville font-bold text-base text-[#e8e0d0]">
                    {job.role}
                  </h3>
                  <p className="font-vt323 text-sm tracking-[2px] text-[#CC0000]">
                    {job.company}
                    <span className="text-[#444] ml-2 tracking-normal normal-case">{job.type}</span>
                  </p>
                </div>
                <span className="font-vt323 text-xs tracking-[1px] text-[#444] whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <p className="text-xs text-[#555] leading-relaxed mb-3" style={{ fontFamily: "'Special Elite', serif" }}>
                {job.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-vt323 text-xs tracking-[1px] text-[#444] border border-[#1f1f1f] px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
