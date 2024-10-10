import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden justify-center items-center mx-auto sm:px-10 px-5 ">
      <div className="w-full max-w-[1280px]">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
      </div>
    </main>
  );
}
