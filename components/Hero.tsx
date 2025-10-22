import Link from "next/link";

export default function Hero() {
  return (
    <div className="container pt-24 pb-10 sm:pt-28 sm:pb-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <span className="badge">Developer Portfolio</span>

          {/* skalierende Headline */}
          <h1 className="mt-4 font-semibold leading-tight text-balance text-[clamp(2rem,8vw,3.5rem)]">
            Hey, ich bin <span className="text-accent-400">Max</span>.
            Full-Stack Developer (dualer Student)
          </h1>

          <p className="text-white/70 mt-3 sm:mt-4 text-base sm:text-lg">
            Fokus auf performante Frontends und robuste Backends. Sauberer Code.
            Reproduzierbare Deployments.
          </p>

          {/* Buttons: auf Mobile full width */}
          <div className="mt-6 flex flex-col xs:flex-row gap-3">
            <Link
              href="#projects"
              className="rounded-xl2 px-4 py-2 bg-accent-500 text-black font-medium text-center"
            >
              Projekte
            </Link>
            <Link
              href="/Max_CV.pdf"
              className="rounded-xl2 px-4 py-2 border border-base-700 hover:border-accent-500 text-center"
            >
              CV
            </Link>
          </div>
        </div>

        {/* Code-Karte: kein Overflow auf Mobile */}
        <div className="card p-4 sm:p-6">
          <pre className="text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-words max-w-full">
            {`const max = {
  role: "Full-Stack Dev (dualer Student)",
  stack: ["JAVA", "Python", "HTML" , "CSS", "JS"],
  location: "Trier",
  fun: ["Motorradfahren", "3D-Druck", "Selfhosting"]
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
