import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Home</h1>
      <Link href={'/dashboard'}>Dashboard</Link>
    </main>
  )
}
