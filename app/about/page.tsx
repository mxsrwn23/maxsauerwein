import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="container pt-28 pb-16 md:pt-36 md:pb-24 scroll-mt-28 md:scroll-mt-36 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="relative aspect-[3/4] w-48 sm:w-64 rounded-xl overflow-hidden mx-auto md:mx-0 shadow-lg">
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
          Ich bin dualer Student der Informatik bei der DZ Privatbank und arbeite dort im Bereich Softwareentwicklung. Mein Schwerpunkt liegt auf Full-Stack Development mit Fokus auf performanten Frontends und robusten Backends. Sauberer Code, reproduzierbare Deployments und ein Auge für Details sind mir besonders wichtig.
        </p>
        <p className="mt-3 text-white/70 leading-relaxed">
          In meiner Freizeit beschäftige ich mich mit Self-Hosting, 3D-Druck und Motorradfahren.
        </p>
      </div>
    </section>
  )
}