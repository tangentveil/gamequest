import HeroContent from "./HeroContent";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Hero() {
  return (
    <section className="flex bg-black/30 min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
