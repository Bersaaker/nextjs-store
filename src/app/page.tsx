import { Description } from "app/componentes/Home/Description";
import { Hero } from "app/componentes/Home/Hero";
import { MainProducts } from "app/componentes/Home/MainProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
