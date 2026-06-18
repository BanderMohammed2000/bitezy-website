import { motion } from "framer-motion";
import phone from "../../assets/images/phone.png";
import dish from "../../assets/images/healthy-varied-dish.png";
import googlePlay from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";
import Button from "../ui/Button";

function Discount() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section id="get-app" className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-14">
        <div className="space-y-7 relative">
          <motion.img
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: smoothEase,
            }}
            src={dish}
            alt="Healthy Dish"
            className="md:hidden w-28 h-28 sm:w-40 sm:h-40 absolute -right-5 sm:right-0 top-1/2 -translate-y-1/2"
          />

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: smoothEase,
            }}
            className="text-2xl font-medium text-goldenOrange capitalize"
          >
            get 20% discount
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: 0.95,
              delay: 0.7,
              ease: smoothEase,
            }}
            className="text-blackSoft font-medium leading-relaxed w-[60%] sm:w-auto sm:max-w-xs md:max-w-sm"
          >
            Get flat 20% off on your first order through The Bitezy App and
            discover fresh, nutritious meals made for a healthier lifestyle
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              ease: smoothEase,
            }}
            className="flex flex-row space-x-3 pt-4 sm:pt-10"
          >
            <Button isStyle={false} aria-label="Google play">
              <a href="#">
                <img
                  src={googlePlay}
                  alt="Google Play"
                  className="h-10 sm:h-14"
                  height="56px"
                />
              </a>
            </Button>

            <Button isStyle={false} aria-label="App store">
              <a href="#">
                <img
                  src={appStore}
                  alt="App Store"
                  className="h-10 sm:h-14"
                  height="56px"
                />
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-16 mx-auto md:mx-0">
          <motion.img
            initial={{
              opacity: 0,
              x: 30,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: smoothEase,
            }}
            src={dish}
            alt="Healthy Dish"
            className="hidden md:block w-40 h-40 md:w-36 md:h-36 lg:w-56 lg:h-56"
          />

          <motion.img
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: 1.2,
              ease: smoothEase,
            }}
            src={phone}
            alt="Phone"
            className="h-96"
            height="384px"
          />
        </div>
      </div>
    </section>
  );
}

export default Discount;
