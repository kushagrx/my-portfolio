import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import ExpCard from "../components/ExpCard";
import ProjectCard from "../components/ProjectCard";
import Badge from "../components/Badge";
import Card from "../components/Card";
import { CERTS, EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILLS } from "../lib/data";

export default function HomePage() {
  return (
      <main>
        <Hero />

        <section id="experience" className="section">
          <div className="container-narrow">
            <SectionHeader title="Experience" subtitle="Internships and roles" />
            <div className="grid md:grid-cols-2 gap-6">
              {EXPERIENCE.map((e) => <ExpCard key={e.company} item={e} />)}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container-narrow">
            <SectionHeader title="Projects" subtitle="Selected work" />
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map((p) => <ProjectCard key={p.name} project={p} />)}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container-narrow">
            <SectionHeader title="Skills" />
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Languages & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.languages.concat(SKILLS.frameworks).map((s) => <Badge key={s}>{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Cloud & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.cloudDevops.map((s) => <Badge key={s}>{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.databases.map((s) => <Badge key={s}>{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.tools.map((s) => <Badge key={s}>{s}</Badge>)}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container-narrow">
            <SectionHeader title="Education" />
            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((ed) => (
                  <Card key={ed.school} className="p-6">
                    <h3 className="text-xl font-semibold">{ed.school}</h3>
                    <p className="text-text-soft">{ed.degree}</p>
                    {ed.period && <p className="text-text-dim mt-1">{ed.period}</p>}
                  </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="certs" className="section">
          <div className="container-narrow">
            <SectionHeader title="Certificates" />
            <Card className="p-6">
              <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-text-soft">
                {CERTS.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </Card>
          </div>
        </section>

        <section id="contact" className="section pb-24">
          <div className="container-narrow">
            <SectionHeader title="Contact" />
            <Card className="p-6">
              <p className="text-text-soft">
                Email: <a className="text-accent hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </p>
              <p className="text-text-soft">
                GitHub: <a className="text-accent hover:underline" href="https://github.com/kushagr-" target="_blank" rel="noreferrer">kushagr-</a>
              </p>
              <p className="text-text-soft">
                LinkedIn: <a className="text-accent hover:underline" href="https://www.linkedin.com/in/kushagra-bisht" target="_blank" rel="noreferrer">kushagra-bisht</a>
              </p>
            </Card>
          </div>
        </section>
      </main>
  );
}