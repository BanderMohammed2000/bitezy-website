import logo from "../../assets/logo.svg";
import cart from "../../assets/icons/cart-outline.svg";
import search from "../../assets/icons/search-line.svg";
import sign from "../../assets/icons/signin.svg";
import menu from "../../assets/icons/menu-alt.svg";
import Button from "../ui/Button";
function Navbar() {
  const navStyle = "capitalize font-medium text-blackSoft";
  return (
    <nav className="flex justify-between items-center">
      <img src={menu} alt="Menu Bar Icon" className="lg:hidden w-6 h-6" />
      <div className="flex space-x-2 items-center">
        <div className="bg-primary rounded-[50%] p-2">
          <img src={logo} alt="logo" className="w-5 h-5" />
        </div>
        <p className="font-semibold text-xl capitalize text-primary">bitezy</p>
      </div>
      <ul className="hidden lg:flex space-x-5">
        <li>
          <a className={navStyle} href="#menu">
            menu
          </a>
        </li>
        <li>
          <a className={navStyle} href="#categories">
            categories
          </a>
        </li>
        <li>
          <a className={navStyle} href="#top-foods">
            top foods
          </a>
        </li>
        <li>
          <a className={navStyle} href="#team">
            team
          </a>
        </li>
        <li>
          <a className={navStyle} href="#get-app">
            get app
          </a>
        </li>
        <li>
          <a className={navStyle} href="#contact">
            contact
          </a>
        </li>
      </ul>
      <div className="flex space-x-4 items-center">
        <img src={search} alt="Search Icon" className="w-5 h-5" />
        <img src={cart} alt="Cart Icon" className="w-5 h-5" />
        <Button className="hidden lg:flex items-center space-x-2 text-blackSoft font-semibold bg-white">
          <img className="w-6 h-6" src={sign} alt="Sign-in Icon" />
          <span>Sign in</span>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
