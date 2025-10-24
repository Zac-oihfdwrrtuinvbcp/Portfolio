import { Tag } from "../components/Tag";

// Inline components for better reusability
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900 p-8 rounded-3xl shadow-l">
      <h3 className="text-2xl font-bold mb-6 text-zinc-100">{title}</h3>
      {children}
    </div>
  );
}

function EducationItem({
  school,
  year,
  description,
}: {
  school: string;
  year: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-zinc-100 text-lg">{school}</h4>
        <span className="text-zinc-400 text-sm">{year}</span>
      </div>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h4 className="font-semibold text-zinc-100 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
}

function Competence({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <span className="font-medium text-zinc-100">{title}:</span>
      <p className="text-sm text-zinc-400 mt-1">{description}</p>
    </div>
  );
}

function LanguageItem({
  flag,
  name,
  level,
}: {
  flag: string;
  name: string;
  level: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl">{flag}</span>
      <div>
        <span className="font-medium text-zinc-100">{name}</span>
        <p className="text-sm text-zinc-400">{level}</p>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="max-w-5xl mx-auto space-y-8">
      {/* Introduction */}
      <Section title="About Me">
        <div className="text-zinc-300 space-y-4 leading-relaxed">
          <p>
            Hi, I'm{" "}
            <span className="font-semibold text-zinc-100">Zac Darmoise</span>, a
            passionate multimedia developer specializing in game development,
            web technologies, and interactive experiences.
          </p>
          <p>
            I have experience in both Unity C# development and web development,
            with a focus on creating engaging virtual reality applications,
            online games, and modern web applications.
          </p>
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="space-y-6">
            <EducationItem
            school="OpenClassrooms"
            year="2025"
            description="Web Developer Diploma"
          />
          <EducationItem
            school="CNAM Toulon"
            year="2022-2025"
            description="Validated 2 out of 3 years of an engineering degree (Computer sciences and multimedia)"
          />
          <EducationItem
            school="Créajeux"
            year="2018-2021"
            description="Video game developer"
          />
          <EducationItem
            school="Lycée Jean-Cocteau"
            year="2017"
            description="Bac S option Science de l'ingénieur"
          />
        </div>
      </Section>

      {/* Skills & Competences */}
      <Section title="Technical Skills">
        <div className="space-y-6">
          <SkillCategory
            title="Languages"
            skills={[
              "C#",
              "C++",
              "Java",
              "JavaScript",
              "TypeScript",
              "HLSL",
              "GLSL",
            ]}
          />
          <SkillCategory
            title="Engines & Frameworks"
            skills={[
              "Unity",
              "Unreal Engine",
              "OpenGL",
              "SFML",
              "React",
              "Node.js",
              "Express",
            ]}
          />
          <SkillCategory
            title="Tools & Software"
            skills={[
              "Visual Studio",
              "VS Code",
              "Git",
              "GitHub Desktop",
              "Blender",
              "Illustrator",
            ]}
          />

          {/* Core Competences */}
          <div>
            <h4 className="font-semibold text-zinc-100 mb-3">
              Core Competences
            </h4>
            <div className="space-y-3 text-zinc-300">
              <Competence
                title="Engine Creation"
                description="C++ and rendering engine with exfat and sfml"
              />
              <Competence
                title="AI/Pathfinding"
                description="AI, entity and several"
              />
              <Competence
                title="UI Development"
                description="Developed as UI creation tool in C, experienced with Unity and Unreal toolkits"
              />
              <Competence
                title="Online Development"
                description="Model Server/Client with unreal"
              />
              <Competence
                title="Physics"
                description="2D and in engine with unity and unreal"
              />
              <Competence
                title="Gameplay"
                description="Varied type of gameplay within all my projects"
              />
              <Competence
                title="Mobile Development"
                description="Development for android with unity"
              />
              <Competence
                title="Web"
                description="Development web using php/sql/js/html/css"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Languages */}
      <Section title="Languages">
        <div className="space-y-3 text-zinc-300">
          <LanguageItem
            flag="🇬🇧"
            name="English"
            level="Read/Speak/Write - B2/C1/C2 TOEIC (C2)"
          />
          <LanguageItem flag="🇫🇷" name="French" level="Native language" />
        </div>
      </Section>

      {/* Interests */}
      <Section title="Interests">
        <div className="text-zinc-300 space-y-2">
          <p>🎮 Video-Games, Movies/Series/Animes</p>
          <p>📚 Literature (mainly SF/Fantasy)</p>
          <p>🚀 Innovations (Space conquest, new technologies)</p>
        </div>
      </Section>
    </section>
  );
}