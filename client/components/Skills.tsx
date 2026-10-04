export default function Skills() {
  return (
    <section id="skills" className="py-14 border-t border-border">
      <div className="max-w-[1040px] mx-auto px-5 w-full">
        <h2 className="font-display text-[clamp(28px,4.4vw,44px)] font-bold mb-[22px] text-foreground">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="bg-card border border-border rounded-[10px] p-[18px]">
            <h3 className="text-[22px] font-bold font-display mb-[10px] text-foreground">Full-stack web</h3>
            <p className="m-0 text-[16px] text-foreground">React, Next.js, FastAPI, Node.js, and databases (MySQL, MongoDB).</p>
          </div>
          <div className="bg-card border border-border rounded-[10px] p-[18px]">
            <h3 className="text-[22px] font-bold font-display mb-[10px] text-foreground">
              Python and data
            </h3>
            <p className="m-0 text-[16px] text-foreground">NumPy, pandas, matplotlib, seaborn and scikit-learn for data handling, analysis and basic models.</p>
          </div>
          <div className="bg-card border border-border rounded-[10px] p-[18px]">
            <h3 className="text-[22px] font-bold font-display mb-[10px] text-foreground">
              Cloud and DevOps
            </h3>
            <p className="m-0 text-[16px] text-foreground">AWS, Docker, CI/CD, and Linux. Exploring transient resources.</p>
          </div>
          <div className="bg-card border border-border rounded-[10px] p-[18px]">
            <h3 className="text-[22px] font-bold font-display mb-[10px] text-foreground">Tools & Languages</h3>
            <p className="m-0 text-[16px] text-foreground">TypeScript, Java, Python. Git and GitHub for version control.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
