import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Hero from "../sections/Hero";
import Navbar from "./Navbar";
import Button from "../ui/Button";
function Header() {
  const transition = "transition-all duration-300 ease-out";

  const [activeItem, setActiveItem] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    setActiveItem(null);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  function getArrowIcon(active) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 12 24"
        className="hidden sm:block rotate-180 -translate-y-1"
      >
        <path
          fill={active ? "#f85a1c" : "#111111"}
          className={transition}
          d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
        />
      </svg>
    );
  }

  return (
    <>
      <header className="container mx-auto pb-0 pt-6 px-6 sm:p-6 relative">
        <Navbar onMenuClick={toggleMenu} />
        <Hero />
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="lg:hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] absolute left-0 top-0 h-full w-[80%] z-30"
          >
            <div className="container mx-auto py-6 px-4">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center pl-3">
                  <div className="bg-primary rounded-[50%] p-2">
                    <img src={logo} alt="logo" className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-xl capitalize text-primary">
                    bitezy
                  </p>
                </div>
                <button onClick={toggleMenu} aria-label="Close menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#111111"
                      d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L8 9.06l-3.22 3.22a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042L6.94 8L3.72 4.78a.75.75 0 0 1 0-1.06"
                    />
                  </svg>
                </button>
              </div>
              <ul className="mt-14 space-y-4">
                <li>
                  <a
                    href="#menu"
                    className={`${activeItem === "menu" ? "bg-[#feede2]" : "bg-transparent"} ${transition} flex items-center justify-between py-3 pl-3 rounded-lg`}
                    onClick={closeMenu}
                    onMouseEnter={() => setActiveItem("menu")}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke={`${activeItem === "menu" ? "#f85a1c" : "#111111"}`}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className={transition}
                          d="M18.011 13H20c-.367 2.555-2.32 4.683-4.977 5.616V20H8.977v-1.384C6.32 17.683 4.367 15.556 4 13zm0 0a2 2 0 0 0 .675-3.88M18.01 13H18m0-4c.24 0 .472.043.686.12m0 0c.836-1.033.753-2.67-.28-3.506a2.41 2.41 0 0 0-3.387.356c-.293-1.502-1.748-2.154-3.25-1.86a2.77 2.77 0 0 0-2.19 3.25c-.599-1.187-1.96-2.096-3.424-1.359C4.967 6.6 4.45 8.192 5.049 9.38m0 0C4.371 9.665 4 10.336 4 11.117C4 12.157 4.843 13 5.883 13m-.834-3.62c.287-.12 1.096-.4 2.045.342m5.275-.891a2 2 0 0 1 2.65.988"
                        />
                      </svg>
                      <span
                        className={`${activeItem === "menu" ? "text-primary" : "text-blackSoft"} ${transition} text-lg font-medium capitalize`}
                      >
                        menu
                      </span>
                    </div>
                    {getArrowIcon(activeItem === "menu")}
                  </a>
                </li>
                <li>
                  <a
                    href="#categories"
                    className={`${activeItem === "categories" ? "bg-[#feede2]" : "bg-transparent"} ${transition} flex items-center justify-between py-3 pl-3 rounded-lg`}
                    onClick={closeMenu}
                    onMouseEnter={() => setActiveItem("categories")}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill={`${activeItem === "categories" ? "#f85a1c" : "#111111"}`}
                          d="M7.425 9.475L11.15 3.4q.15-.25.375-.363T12 2.925t.475.113t.375.362l3.725 6.075q.15.25.15.525t-.125.5t-.35.363t-.525.137h-7.45q-.3 0-.525-.137T7.4 10.5t-.125-.5t.15-.525M17.5 22q-1.875 0-3.187-1.312T13 17.5t1.313-3.187T17.5 13t3.188 1.313T22 17.5t-1.312 3.188T17.5 22M3 20.5v-6q0-.425.288-.712T4 13.5h6q.425 0 .713.288T11 14.5v6q0 .425-.288.713T10 21.5H4q-.425 0-.712-.288T3 20.5m14.5-.5q1.05 0 1.775-.725T20 17.5t-.725-1.775T17.5 15t-1.775.725T15 17.5t.725 1.775T17.5 20M5 19.5h4v-4H5zM10.05 9h3.9L12 5.85zm7.45 8.5"
                        />
                      </svg>
                      <span
                        className={`${activeItem === "categories" ? "text-primary" : "text-blackSoft"} ${transition} text-lg font-medium capitalize`}
                      >
                        categories
                      </span>
                    </div>
                    {getArrowIcon(activeItem === "categories")}
                  </a>
                </li>
                <li>
                  <a
                    href="#top-foods"
                    className={`${activeItem === "topFoods" ? "bg-[#feede2]" : "bg-transparent"} ${transition} flex items-center justify-between py-3 pl-3 rounded-lg`}
                    onClick={closeMenu}
                    onMouseEnter={() => setActiveItem("topFoods")}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill={`${activeItem === "topFoods" ? "#f85a1c" : "#111111"}`}
                          d="M12 2.5a1 1 0 0 1 .894.553l2.58 5.158l5.67.824a1 1 0 0 1 .554 1.706l-4.127 4.024l.928 5.674a1 1 0 0 1-1.455 1.044L12 18.807l-5.044 2.676a1 1 0 0 1-1.455-1.044l.928-5.674l-4.127-4.024a1 1 0 0 1 .554-1.706l5.67-.824l2.58-5.158A1 1 0 0 1 12 2.5m0 3.236l-1.918 3.836a1 1 0 0 1-.75.543l-4.184.608l3.05 2.973a1 1 0 0 1 .289.878L7.8 18.771l3.731-1.98a1 1 0 0 1 .938 0l3.731 1.98l-.687-4.197a1 1 0 0 1 .289-.877l3.05-2.974l-4.183-.608a1 1 0 0 1-.75-.543z"
                        />
                      </svg>
                      <span
                        className={`${activeItem === "topFoods" ? "text-primary" : "text-blackSoft"} ${transition} text-lg font-medium capitalize`}
                      >
                        top foods
                      </span>
                    </div>
                    {getArrowIcon(activeItem === "topFoods")}
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className={`${activeItem === "team" ? "bg-[#feede2]" : "bg-transparent"} ${transition} flex items-center justify-between py-3 pl-3 rounded-lg`}
                    onClick={closeMenu}
                    onMouseEnter={() => setActiveItem("team")}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill={`${activeItem === "team" ? "#f85a1c" : "#111111"}`}
                          d="M824.2 699.9a301.6 301.6 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200c-109.1 1.7-197 90.6-197 200c0 62.8 29 118.8 74.2 155.5a301 301 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9M612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612M361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.9-1.7-203.3 89.2-203.3 199.9c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.9-1 6.5-4.7 6-8.7"
                        />
                      </svg>
                      <span
                        className={`${activeItem === "team" ? "text-primary" : "text-blackSoft"} ${transition} text-lg font-medium capitalize`}
                      >
                        team
                      </span>
                    </div>
                    {getArrowIcon(activeItem === "team")}
                  </a>
                </li>
                <li>
                  <a
                    href="#get-app"
                    className={`${activeItem === "getApp" ? "bg-[#feede2]" : "bg-transparent"} ${transition} flex items-center justify-between py-3 pl-3 rounded-lg`}
                    onClick={closeMenu}
                    onMouseEnter={() => setActiveItem("getApp")}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke={`${activeItem === "getApp" ? "#f85a1c" : "#111111"}`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M21 20c-.643-1.287-2-2.976-2-4.472c0-1.699.367-3.794-.422-5.373c-.334-.666-.578-1.341-.578-2.1V4.43a.43.43 0 0 0-.429-.43A2.57 2.57 0 0 0 15 6.571M8 18l3.635 2.272c.24.15.446.35.604.586L13 22"
                          />
                          <path
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M5.027 15c.055 1.097.218 1.78.705 2.268C6.464 18 7.642 18 10 18s3.535 0 4.268-.732C15 16.535 15 15.357 15 13V7c0-2.357 0-3.536-.732-4.268C13.535 2 12.357 2 10 2s-3.536 0-4.268.732c-.487.487-.65 1.171-.705 2.268"
                          />
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M4.25 7.5h1.5a1.25 1.25 0 1 0 0-2.5h-1.5a1.25 1.25 0 1 0 0 2.5Zm0 0h2.5a1.25 1.25 0 1 1 0 2.5h-2.5m0-2.5a1.25 1.25 0 1 0 0 2.5m0 0h1.5a1.25 1.25 0 1 1 0 2.5h-1.5m0-2.5a1.25 1.25 0 1 0 0 2.5m0 0h1a1.25 1.25 0 1 1 0 2.5h-1a1.25 1.25 0 1 1 0-2.5Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 15h.009"
                          />
                        </g>
                      </svg>
                      <span
                        className={`${activeItem === "getApp" ? "text-primary" : "text-blackSoft"} ${transition} text-lg font-medium capitalize`}
                      >
                        get app
                      </span>
                    </div>
                    {getArrowIcon(activeItem === "getApp")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`${activeItem === "contact" ? "bg-[#feede2]" : "bg-transparent"} ${transition} flex items-center justify-between py-3 pl-3 rounded-lg`}
                    onClick={closeMenu}
                    onMouseEnter={() => setActiveItem("contact")}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 26 26"
                      >
                        <path
                          fill={`${activeItem === "contact" ? "#f85a1c" : "#111111"}`}
                          d="M3 4C1.344 4 0 5.344 0 7v12c0 1.656 1.344 3 3 3h20c1.656 0 3-1.344 3-3V7c0-1.656-1.344-3-3-3zm0 2h20c.551 0 1 .449 1 1v.5l-11 5.938L2 7.5V7c0-.551.449-1 1-1M2 7.781l6.531 5.094l-6.406 6.563l7.813-5.563L13 15.844l3.063-1.969l7.812 5.563l-6.406-6.563L24 7.781V19a.95.95 0 0 1-.125.438c-.165.325-.486.562-.875.562H3c-.389 0-.71-.237-.875-.563A.95.95 0 0 1 2 19z"
                        />
                      </svg>
                      <span
                        className={`${activeItem === "contact" ? "text-primary" : "text-blackSoft"} ${transition} text-lg font-medium capitalize`}
                      >
                        contact
                      </span>
                    </div>
                    {getArrowIcon(activeItem === "contact")}
                  </a>
                </li>
              </ul>
              <div className="w-full h-px bg-[#feede2] rounded-full my-8"></div>
              <div className="flex justify-center">
                <Button className="bg-primary text-lg text-white capitalize font-semibold">
                  explore now
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
