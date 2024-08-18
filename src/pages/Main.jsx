import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import RandomInfo from "../components/RandomInfo";

export default function Main() {
  return (
    <main className="[&>*]:px-52">
      <Hero />
      <RandomInfo />
      <Quote />
      <CallToAction />
      <Footer />
    </main>
  );
}