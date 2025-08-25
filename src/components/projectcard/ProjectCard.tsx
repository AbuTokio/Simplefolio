import type { projectCard } from "../../interfaces/projectCard"

export default function ProjectCard({ title, description, stack = [] }: projectCard) {
  return (
    <>
      <div className="bg-card-bg p-6 text-center text-text w-md flex flex-col gap-3 shadow-[0_0_8px_0_rgba(0,0,0,0.5)]">
        <h3 className="font-bold text-accent text-xl tracking-wide">{title}</h3>
        <p className="text-accent-dark">{description}</p>
        <p className="font-bold text-text tracking-wide">{stack.join(", ")}</p>
      </div>
    </>
  )
}
