import { motion } from "framer-motion";
import categoryData from "../../data/CategoryData";
import healthyBowl from "../../assets/images/healthy-bowl-yellow.png";
import healthyBreakfast from "../../assets/images/healthy-breakfast.png";
import grilledSalad from "../../assets/images/grilled-salad.png";
import kiwi from "../../assets/images/kiwi.png";
import CategoryCard from "../ui/CategoryCard";

function Categories() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section
      id="categories"
      className="container mx-auto sm:pt-10 pb-6 px-6 relative -top-6 sm:-top-5 md:top-0"
    >
      <div className="flex flex-col md:flex-row items-center md:gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 1.05, ease: smoothEase, delay: 0.45 }}
          className="flex gap-2 w-full md:w-[55%] h-80 order-1 mt-10 md:mt-0"
        >
          <img
            src={healthyBowl}
            alt="Vegetables"
            className="w-[58%] h-full rounded-xl object-cover"
          />

          <div className="grid grid-rows-2 gap-2 w-[42%] h-full">
            <img
              src={healthyBreakfast}
              alt="Healthy Food"
              className="w-full h-full rounded-lg object-cover"
            />

            <img
              src={grilledSalad}
              alt="Fish"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </motion.div>

        <div className="w-full md:w-[45%] md:order-1">
          <div className="flex flex-col space-y-8 relative">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.9, ease: smoothEase }}
              className="text-2xl text-blackSoft font-medium capitalize relative horizontal-line"
            >
              our categories
            </motion.h2>

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 1, ease: smoothEase, delay: 1 }}
              src={kiwi}
              alt="kiwi"
              className="block md:hidden opacity-90 w-[70px] h-[70px] sm:w-32 sm:h-32 absolute right-0 top-1/2 -translate-y-1/2"
            />

            {categoryData.map((data, index) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.65 }}
                transition={{
                  duration: 0.85,
                  ease: smoothEase,
                  delay: 0.2 + index * 0.14,
                }}
              >
                <CategoryCard {...data} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
