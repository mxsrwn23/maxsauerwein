import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="container py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="relative aspect-square w-48 sm:w-64 rounded-xl overflow-hidden mx-auto md:mx-0 shadow-lg">
        <Image
          src="/me.png"
          alt="Portrait von Max Sauerwein"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">Über mich</h2>
        <p className="mt-4 text-white/70 leading-relaxed">
          Ich bin Full-Stack Developer mit Fokus auf performante Frontends und robuste Backends.
          Sauberer Code, reproduzierbare Deployments und ein Auge für Details zeichnen meine Arbeit aus.
        </p>
        <p className="mt-3 text-white/70 leading-relaxed">
          In meiner Freizeit beschäftige ich mich mit Self-Hosting, 3D-Druck und Kaffee.
        </p>
      </div>
    </section>
  )
}