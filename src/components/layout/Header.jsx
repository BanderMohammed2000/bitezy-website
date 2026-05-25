import Hero from "../sections/Hero";
import Navbar from "./Navbar";
function Header() {
  return (
    <header className="container mx-auto p-6">
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
