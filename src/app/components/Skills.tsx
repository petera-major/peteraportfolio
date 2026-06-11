const SKILL_GROUPS = [
  { label: "FRONTEND", skills: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Expo", "Figma"] },
  { label: "BACKEND", skills: ["Node.js", "FastAPI", "Python", "PostgreSQL", "Supabase", "Firebase", "MongoDB"] },
  { label: "TOOLS & INFRA", skills: ["Git", "AWS", "Docker", "Stripe", "CI/CD", "Vercel", "Railway"] },
  { label: "AI / OTHER", skills: ["LangChain", "OpenAI API", "REST APIs", "SQL", "SOLID Principles", "Security+"] },
];

export default function Skills() {
  return (
    <section className="px-5 sm:px-8 py-16 border-t border-[#1a0505]" style={{ background: "#060202" }}>
      <p className="font-vt323 text-xs tracking-[5px] text-[#CC0000] mb-2">// THE TOOLKIT</p>
      <h2 className="font-baskerville font-bold text-3xl text-[#e8e0d0] mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="font-vt323 text-xs tracking-[3px] text-[#555] mb-3 border-b border-[#1a0505] pb-2">{group.label}</p>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="font-vt323 text-base tracking-[1px] text-[#888] hover:text-[#CC0000] transition-colors cursor-default">
                  › {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
