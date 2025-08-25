import React from "react"

interface button {
  children: React.ReactNode
  href?: string
}

export default function Button({ children, href }: button) {
  return (
    <>
      <a href={href}>
        <button className="text-accent-dark border-solid border-accent-dark border px-4 py-2 cursor-pointer hover:bg-accent-dark hover:text-text">
          {children?.toString().toLowerCase()}
        </button>
      </a>
    </>
  )
}
