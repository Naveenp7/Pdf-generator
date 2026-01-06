import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";
import { Services } from "@/components/features/Services";

export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
