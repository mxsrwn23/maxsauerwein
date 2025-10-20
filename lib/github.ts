export type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics?: string[]
  archived: boolean
  fork: boolean
  pushed_at: string
}

const username = process.env.GITHUB_USERNAME
if (!username) {
  throw new Error("GITHUB_USERNAME fehlt in .env.local")
}

export async function fetchRepos({ includeForks = false, perPage = 12 } = {}): Promise<Repo[]> {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

  const url = new URL(`https://api.github.com/users/${username}/repos`)
  url.searchParams.set("sort", "pushed")
  url.searchParams.set("per_page", String(Math.min(perPage, 100)))

  const res = await fetch(url.toString(), {
    headers,
    // revalidate alle 60 Minuten
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`GitHub API Fehler ${res.status} ${res.statusText} ${body}`)
  }

  const data: Repo[] = await res.json()

  return data
    .filter(r => includeForks ? true : !r.fork)
    .filter(r => !r.archived)
}
