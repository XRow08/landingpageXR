import Header from "@/components/Sections/Header";
import Cards from "@/components/Sections/Cards";
import Benefits from "@/components/Sections/Benefits";
import Brands from "@/components/Sections/Brands";
import Team from "@/components/Sections/Team";
import Depositions from "@/components/Sections/Depositions";
import Process from "@/components/Sections/Process";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-black">
        <Cards />
        <Benefits />
        <Brands />
        <Team />
        <Depositions />
        <Process />
      </section>
    </main>
  );
}
