import { useState } from "react";
import logo from "../../assets/logo.svg";
// import cart from "../../assets/icons/cart-outline.svg";
// import search from "../../assets/icons/search-line.svg";
// import sign from "../../assets/icons/signin.svg";
// import menu from "../../assets/icons/menu-alt.svg";
import Button from "../ui/Button";
function Navbar({ onMenuClick }) {
  const navStyle =
    "capitalize font-medium text-blackSoft transition-all duration-300 ease-out hover:text-primary";

  const [signIconHovered, setSignIconHovered] = useState(false);

  const [iconsHovered, setIconsHovered] = useState({
    cart: false,
    search: false,
  });

  function handleMouse(icon, result) {
    setIconsHovered((prev) => ({
      ...prev,
      [icon]: result,
    }));
  }

  return (
    <nav className="flex justify-between items-center">
      <button onClick={onMenuClick} className="lg:hidden">
        {/* <img src={menu} alt="Menu Bar Icon" className="w-6 h-6" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          {/* <title xmlns="">menu-alt-1</title> */}
          <path
            fill="none"
            stroke="#111111"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
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
        <Button
          isStyle={false}
          onMouseEnter={() => handleMouse("search", true)}
          onMouseLeave={() => handleMouse("search", false)}
        >
          {/* <img src={search} alt="Search Icon" className="w-5 h-5" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            {/* <title xmlns="">search-outline</title> */}
            <g>
              <g
                fill={iconsHovered.search ? "#f85a1c" : "#111111"}
                className="transition-all duration-300 ease-out"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M11 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" />
                <path d="M15.32 15.29a1 1 0 0 1 1.414.005l3.975 4a1 1 0 0 1-1.418 1.41l-3.975-4a1 1 0 0 1 .004-1.414Z" />
              </g>
            </g>
          </svg>
        </Button>
        <Button
          isStyle={false}
          onMouseEnter={() => handleMouse("cart", true)}
          onMouseLeave={() => handleMouse("cart", false)}
        >
          {/* <img src={cart} alt="Cart Icon" className="w-5 h-5" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            {/* <title xmlns="">cart-outline</title> */}
            <path
              fill={iconsHovered.cart ? "#f85a1c" : "#111111"}
              className="transition-all duration-300 ease-out"
              d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
            />
          </svg>
        </Button>
        <Button
          onMouseEnter={() => setSignIconHovered(true)}
          onMouseLeave={() => setSignIconHovered(false)}
          className="hidden lg:flex items-center space-x-2 text-blackSoft font-semibold bg-white hover:bg-primary hover:text-white"
        >
          {/* <img className="w-6 h-6" src={sign} alt="Sign-in Icon" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            {/* <title xmlns="">signin</title> */}
            <path
              fill={signIconHovered ? "#ffffff" : "#111111"}
              className="transition-all duration-300 ease-out"
              d="M10.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4a.75.75 0 0 1 0-1.5h8.19l-1.72-1.72a.75.75 0 0 1 0-1.06"
            />
            <path
              fill={signIconHovered ? "#ffffff" : "#111111"}
              className="transition-all duration-300 ease-out"
              d="M11.768 3.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v6.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-2.464c-.813 0-1.469 0-2-.043c-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47c-.043-.531-.043-1.187-.043-2V15a.75.75 0 0 1 1.5 0v.2c0 .852 0 1.447.038 1.91c.037.453.107.714.207.912c.216.423.56.767.984.983c.197.1.458.17.912.207c.462.037 1.056.038 1.909.038h2.4c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207a2.25 2.25 0 0 0 .983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.057.038-1.909V8.8c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.057-.038-1.909-.038h-2.4c-.853 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909V9a.75.75 0 0 1-1.5 0v-.232c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043"
            />
          </svg>
          <span>Sign in</span>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
