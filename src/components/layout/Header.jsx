import Hero from "../sections/Hero";
import Navbar from "./Navbar";
function Header() {
  return (
    <header className="container mx-auto pb-0 pt-6 px-6 sm:p-6">
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
