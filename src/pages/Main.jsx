import Hero from "../components/Hero";
import RandomInfo from "../components/RandomInfo";

export default function Main() {
  return (
    <main className="[&>*]:px-52">
      <Hero />
      <RandomInfo />
    </main>
  );
}