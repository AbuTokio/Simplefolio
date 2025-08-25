import Navbar from "../navbar/Navbar"

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-16 py-6">
        <p className="text-accent-dark font-bold text-2xl">JS.</p>
        <Navbar />
      </header>
    </>
  )
}
