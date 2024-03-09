import About from "@/components/about";
import Home from "@/components/home";
import "@/styles/variables.css";

export default function App() {
  return (
    <>
      <section
        id="home"
        className="h-screen w-full justify-center items-center flex"
      >
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}
