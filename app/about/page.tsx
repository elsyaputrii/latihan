import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 font-sans">
      <h1 className="text-3xl font-bold text-blue-600">Welcome 🚀</h1>
      <p className="mt-2">Ini halaman utama dengan Tailwind CSS.</p>
      <nav className="mt-4 space-x-4">
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/profile" className="text-blue-500 hover:underline">Profile</Link>
      </nav>
    </main>
  );
}