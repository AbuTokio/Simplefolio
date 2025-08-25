import Button from "../button/Button"

export default function Hero() {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-center gap-8 px-72 mt-32">
        <h1 className="text-(--color-text) text-6xl font-bold">
          Hi, I am <span className="text-(--color-accent-dark)">John Smith.</span>
        </h1>
        <p className="text-(--color-text) font-bold text-xl">A Front End Developer.</p>
        <p className="text-(--color-text)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus quis sed assumenda nulla facere sequi
          exercitationem, perspiciatis corrupti maiores veniam enim accusamus numquam officia ipsa quod reprehenderit.
          Nam placeat voluptatum, dignissimos quod neque animi voluptas accusantium repellat qui! Dolor cumque mollitia
          magnam quos doloremque totam eos harum enim incidunt.
        </p>
        <Button href="#">resume</Button>
      </section>
    </>
  )
}
