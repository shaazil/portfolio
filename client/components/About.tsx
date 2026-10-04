export default function About() {
  return (
    <section id="about" className="py-14 border-t border-border">
      <div className="max-w-[1040px] mx-auto px-5 w-full">
        <h2 className="font-display text-[clamp(28px,4.4vw,44px)] font-bold mb-[22px] text-foreground">
          About
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <p className="text-[16px] leading-[1.65] text-foreground">
            I'm a third year computer science student at IIIT Sri City. My coursework covers full-stack web development, and I build projects to put it into practice.
          </p>
          <p className="text-[16px] leading-[1.65] text-foreground">
            My main interest is cloud and DevOps. I'm early in learning it, so I'm doing it hands-on, starting with a project on cutting cloud cost using transient resources. I also use Python for data handling.
          </p>
        </div>
      </div>
    </section>
  );
}
