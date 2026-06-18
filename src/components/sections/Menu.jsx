import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import leaves from "../../assets/images/leaves.png";
import arrow from "../../assets/icons/arrow-right.svg";
import menuData from "../../data/menuData";
import MenuCard from "../ui/MenuCard";

function Menu() {
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  const [slide, setSlide] = useState(0);
  const slideGap = 30;

  const smoothEase = [0.22, 1, 0.36, 1];

  const maxSlide = Math.ceil(menuData.length / cardsPerSlide) - 1;

  const isFirstSlide = slide === 0;
  const isLastSlide = slide === maxSlide;

  useEffect(() => {
    function handleResize() {
      let newCardsPerSlide;

      if (window.innerWidth < 640) {
        newCardsPerSlide = 1;
      } else if (window.innerWidth < 768) {
        newCardsPerSlide = 2;
      } else if (window.innerWidth < 1024) {
        newCardsPerSlide = 3;
      } else {
        newCardsPerSlide = 4;
      }

      setCardsPerSlide(newCardsPerSlide);

      const newMaxSlide = Math.ceil(menuData.length / newCardsPerSlide) - 1;

      setSlide((currentSlide) => Math.min(currentSlide, newMaxSlide));
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function nextSlide() {
    if (isLastSlide) return;
    setSlide((prev) => prev + 1);
  }

  function prevSlide() {
    if (isFirstSlide) return;
    setSlide((prev) => prev - 1);
  }

  return (
    <section
      id="menu"
      className="container mx-auto pt-0 px-6 sm:p-6 sm:mt-10 relative z-10 -top-20 sm:-top-5 md:top-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 1.1, ease: smoothEase }}
        className="w-11/12 mx-auto sm:pt-10 pb-10 px-12 sm:px-16 md:px-10 lg:px-24 xl:px-36 bg-white rounded-[60px] relative overflow-visible"
      >
        {/* Leaves 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, ease: smoothEase, delay: 1.2 }}
          className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 absolute right-0 top-0 rotate-[230deg] lg:-right-2 lg:top-[45%] lg:-translate-y-[100%] lg:-rotate-45 xl:right-5 xl:top-[50%] xl:-translate-y-[90%]"
        >
          <img src={leaves} alt="Leaves" width="80px" height="80px" />
        </motion.div>

        {/* Leaves 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, ease: smoothEase, delay: 1.35 }}
          className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 absolute bottom-0 left-0 rotate-[50deg] lg:top-[50%] lg:translate-y-[10%] lg:rotate-[130deg] xl:top-[50%]"
        >
          <img src={leaves} alt="Leaves" width="80px" height="80px" />
        </motion.div>

        {/* Left bg circle */}
        <div className="bg-bgMain w-14 h-20 lg:w-28 sm:h-28 rounded-full absolute -left-4 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: smoothEase, delay: 0.65 }}
          className="absolute -left-6 sm:-left-12 top-1/2 -translate-y-1/2 z-20"
        >
          <button
            onClick={prevSlide}
            disabled={isFirstSlide}
            className={`flex justify-center items-center bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shadow-lg transition-all duration-300 ${
              isFirstSlide
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer hover:scale-105 active:scale-95"
            }`}
            aria-label="Previous foods"
          >
            <img
              src={arrow}
              alt="Arrow Left Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 rotate-180"
            />
          </button>
        </motion.div>

        <div className="overflow-x-hidden overflow-y-visible pt-10">
          <motion.div
            animate={{
              x: `calc(-${slide * 100}% - ${slide * slideGap}px)`,
            }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 20,
              mass: 0.8,
            }}
            className="flex"
            style={{ gap: `${slideGap}px` }}
          >
            {Array.from({ length: maxSlide + 1 }).map((_, slideIndex) => {
              const start = slideIndex * cardsPerSlide;
              const cards = menuData.slice(start, start + cardsPerSlide);

              return (
                <div
                  key={slideIndex}
                  className="grid gap-5 min-w-full"
                  style={{
                    gridTemplateColumns: `repeat(${cardsPerSlide}, minmax(0, 1fr))`,
                  }}
                >
                  {cards.map((data) => (
                    <MenuCard key={data.id} {...data} />
                  ))}
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="bg-bgMain w-14 h-20 lg:w-28 sm:h-28 rounded-full absolute -right-4 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: smoothEase, delay: 0.65 }}
          className="absolute -right-6 sm:-right-12 top-1/2 -translate-y-1/2 z-20"
        >
          <button
            onClick={nextSlide}
            disabled={isLastSlide}
            className={`flex justify-center items-center bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shadow-lg transition-all duration-300 ${
              isLastSlide
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer hover:scale-105 active:scale-95"
            }`}
            aria-label="Next foods"
          >
            <img
              src={arrow}
              alt="Arrow Right Icon"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Menu;
