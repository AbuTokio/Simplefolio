import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import ProjectCard from "../../components/projectcard/ProjectCard"
import SectionTitle from "../../components/sectiontitle/SectionTitle"
import Skill from "../../components/skill/Skill"
import type { projectCard } from "../../interfaces/projectCard"

export default function Home() {
  const projectCardContent: projectCard[] = [
    {
      title: "Project 1",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolor!",
      stack: ["JavaScript", "React", "Sass"],
    },
    {
      title: "Project 2",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolor!",
      stack: ["JavaScript", "React", "Sass"],
    },
    {
      title: "Project 3",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolor!",
      stack: ["JavaScript", "React", "Sass"],
    },
  ]

  const skills: string[] = ["HTML", "CSS", "JavaScript", "React", "SASS", "Tailwind CSS", "Git", "UX/UI"]

  return (
    <>
      <Header />
      <main>
        <section className="mt-20 flex flex-col justify-center items-center gap-10">
          <h1 className="text-text text-6xl font-bold">
            Hi, I am <span className="text-accent-dark">John Smith.</span>
          </h1>
          <article className="flex flex-col justify-center items-center text-center gap-8 w-7xl">
            <p className="text-text font-bold text-xl">A Front End Developer.</p>
            <p className="text-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus quis sed assumenda nulla facere
              sequi exercitationem, perspiciatis corrupti maiores veniam enim accusamus numquam officia ipsa quod
              reprehenderit.
            </p>
            <Button href="#">resume</Button>
          </article>
        </section>

        <section className="mt-20 flex flex-col justify-center items-center gap-10">
          <SectionTitle>Projects</SectionTitle>
          <article className="flex justify-center items-center gap-8 w-fit">
            {projectCardContent.map((card: projectCard, index: number) => (
              <ProjectCard key={index} title={card.title} description={card.description} stack={card.stack} />
            ))}
          </article>
        </section>

        <section className="mt-20 flex flex-col justify-center items-center gap-10">
          <SectionTitle>Skills</SectionTitle>
          <article className="flex flex-wrap justify-center items-center gap-7 max-w-[458px]">
            {skills.map((skill: string, index: number) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </article>
        </section>
      </main>

      <footer>
        <section className="mt-20 flex flex-col justify-center items-center gap-10">
          <SectionTitle>Contact</SectionTitle>
          <Button href="#">email me</Button>
        </section>
        <p className="text-text text-center mt-16">Created by John Smith</p>
      </footer>
    </>
  )
}
