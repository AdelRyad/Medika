import Link from "next/link";

export default function Home() {
  return (
    <main className="flex row-start-2 col-start-3 col-span-8 row-span-12  justify-center items-center">
      <Link
        className="text-2xl font-bold hover:bg-neutral-200 border border-neutral-100 p-3 rounded-lg"
        href="/Dashboard"
      >
        Dashboard
      </Link>
    </main>
  );
}
