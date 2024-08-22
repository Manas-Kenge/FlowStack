import { Cards } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Services } from "@/components/Services";

export default function Home() {
  return (
   <div>
    <Hero />
    <Section />
    <Services />
    <Cards />
   </div>
  );
}
