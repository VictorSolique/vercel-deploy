// app/page.tsx
import { Contador } from "@/components/Contador";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Contador />
    </main>
  );
}
