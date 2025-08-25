import React from "react"

interface skill {
  children: React.ReactNode
}

export default function Skill({ children }: skill) {
  return (
    <>
      <p className="bg-card-bg px-6 py-3 text-accent-dark text-sm text-center w-fit">{children}</p>
    </>
  )
}
