import React from "react"

interface sectiontitle {
  children: React.ReactNode
}

export default function SectionTitle({ children }: sectiontitle) {
  return (
    <>
      <h2 className="text-text font-bold text-2xl text-center">{children?.toString().toUpperCase()}</h2>
    </>
  )
}
