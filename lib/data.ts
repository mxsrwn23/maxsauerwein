export type Project = {
  title: string
  description: string
  stack: string[]
  href?: string
  repo?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: "Realtime Chat",
    description: "Next.js App Router mit websockets. Auth mit NextAuth. Persistenz via Postgres.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "Postgres"],
    repo: "https://github.com/yourname/realtime-chat"
  },
  {
    title: "Image Optimizer",
    description: "CLI und Weboberfläche zum Batch-Optimieren von Bildern.",
    stack: ["Node.js", "Sharp", "Express"],
    repo: "https://github.com/yourname/image-optimizer"
  },
  {
    title: "IoT Dashboard",
    description: "Visualisiert Sensordaten in Echtzeit. Server Actions für Datenimport.",
    stack: ["Next.js", "Tailwind", "Chart.js"],
    href: "#"
  }
]

export type Job = {
  role: string
  company: string
  start: string
  end: string
  points: string[]
}

export const experience: Job[] = [
  {
    role: "Duales Studium Informatik",
    company: "DZ PRIVATBANK",
    start: "09.2025",
    end: "heute",
    points: [
      "Praxis im Unternehmen kombiniert mit Studium an der Hochschule Trier",
      "Entwicklung von Softwarelösungen",
      "Einbindung in reale Kundenprojekte und agile Arbeitsprozesse"
    ]
  },
  {
    role: "Studentische Aushilfe IT",
    company: "Fehr IT Service",
    start: "2021",
    end: "2025",
    points: [
      "Unterstützung im IT-Support und bei Netzwerkinstallationen",
      "Direkter Kundenkontakt bei IT-Problemlösungen"
    ]
  }
]

export const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 20 },
  { name: "Next.js", level: 20 },
  { name: "JAVA", level: 60 },
  { name: "Python", level: 50 },
  { name: "C++", level: 25 },
  { name: "Swift", level: 10 }
]
