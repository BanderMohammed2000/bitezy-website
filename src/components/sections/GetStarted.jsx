// import man from "../../assets/images/man-eats-salad-bowl.png";
// import broccoli from "../../assets/images/broccoli.png";
// import apple from "../../assets/images/apple.png";
// import fallenBowl from "../../assets/images/fallen-bowl.png";
// function GetStarted() {
//   return (
//     <section className="container mx-auto px-6 pb-6 sm:pt-6 md:pt-14">
//       {/* className="flex flex-col md:items-center gap-y-12 md:gap-x-4 lg:gap-x-36
//       xl:gap-x-72 md:flex-row" */}
//       <div className="flex flex-col md:items-center justify-between gap-y-12 md:flex-row relative">
//         <img
//           src={fallenBowl}
//           alt="Fallen Bowl"
//           className="hidden xl:block w-[550px] h-[550px] opacity-90 absolute right-[20%] top-[60%] -translate-y-1/2 -rotate-12"
//         />
//         <div className="flex flex-col space-y-8">
//           <div className="space-y-1">
//             <span className="text-xs font-medium text-orangeAccent uppercase">
//               healthy food
//             </span>
//             <h2 className="text-2xl font-medium text-blackSoft capitalize relative horizontal-line">
//               start eating better today!
//             </h2>
//           </div>
//           <div className="space-y-5 max-w-md md:max-w-sm lg:max-w-md">
//             <p className="font-medium text-blackSoft leading-relaxed">
//               Fresh, nutritious meals carefully prepared to support your healthy
//               lifestyle
//             </p>
//             <p className="text-sm text-graySoft leading-relaxed">
//               Discover a variety of wholesome dishes made from fresh
//               ingredients, balanced nutrition, and delicious flavors to keep you
//               energized throughout your day
//             </p>
//           </div>
//         </div>
//         <div className="relative w-fit left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0">
//           <img
//             src={man}
//             alt="Man Eats Salad"
//             className="w-80 h-80 lg:w-96 lg:h-96 rounded-full mx-auto md:mx-0 drop-shadow-lg"
//           />
//           <img
//             src={broccoli}
//             alt="Broccoli"
//             className="w-14 h-14 absolute top-0 right-0 drop-shadow-md"
//           />
//           <img
//             src={apple}
//             alt="Apple"
//             className="w-9 h-9 absolute -bottom-2 left-14 drop-shadow-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default GetStarted;

import { motion } from "framer-motion";
import man from "../../assets/images/man-eats-salad-bowl.png";
import broccoli from "../../assets/images/broccoli.png";
import apple from "../../assets/images/apple.png";
import fallenBowl from "../../assets/images/fallen-bowl.png";
function GetStarted() {
  const smoothEase = [0.22, 1, 0.36, 1];
  return (
    <section className="container mx-auto px-6 pb-6 sm:pt-6 md:pt-14">
      {/* className="flex flex-col md:items-center gap-y-12 md:gap-x-4 lg:gap-x-36
      xl:gap-x-72 md:flex-row" */}
      <div className="flex flex-col md:items-center justify-between gap-y-12 md:flex-row relative">
        {/* <img
          src={fallenBowl}
          alt="Fallen Bowl"
          className="hidden xl:block w-[550px] h-[550px] opacity-90 absolute right-[20%] top-[60%] -translate-y-1/2 -rotate-12"
        /> */}
        <motion.img
          src={fallenBowl}
          alt="Fallen Bowl"
          initial={{
            opacity: 0,
            // scale: 0.9,
            filter: "blur(20px)",
          }}
          whileInView={{
            opacity: 0.9,
            // scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.65,
          }}
          transition={{
            duration: 1.4,
            delay: 1.2,
            ease: smoothEase,
          }}
          className="hidden xl:block w-[550px] h-[550px] opacity-90 absolute right-[20%] top-[60%] -translate-y-1/2 -rotate-12"
        />
        <div className="flex flex-col space-y-8">
          <div className="space-y-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              className="text-xs font-medium text-orangeAccent uppercase"
            >
              healthy food
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{
                duration: 0.95,
                delay: 0.15,
                ease: smoothEase,
              }}
              className="text-2xl font-medium text-blackSoft capitalize relative horizontal-line"
            >
              start eating better today!
            </motion.h2>
          </div>
          <div className="space-y-5 max-w-md md:max-w-sm lg:max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: smoothEase,
              }}
              className="font-medium text-blackSoft leading-relaxed"
            >
              Fresh, nutritious meals carefully prepared to support your healthy
              lifestyle
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{
                duration: 0.9,
                delay: 0.45,
                ease: smoothEase,
              }}
              className="text-sm text-graySoft leading-relaxed"
            >
              Discover a variety of wholesome dishes made from fresh
              ingredients, balanced nutrition, and delicious flavors to keep you
              energized throughout your day
            </motion.p>
          </div>
        </div>
        <div className="relative w-fit left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0">
          <motion.img
            src={man}
            alt="Man Eats Salad"
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.65,
            }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: smoothEase,
            }}
            className="w-80 h-80 lg:w-96 lg:h-96 rounded-full mx-auto md:mx-0 drop-shadow-lg"
          />
          <motion.img
            src={broccoli}
            alt="Broccoli"
            initial={{
              opacity: 0,
              scale: 0.7,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.65,
            }}
            transition={{
              duration: 0.9,
              delay: 1,
              ease: smoothEase,
            }}
            className="w-14 h-14 absolute top-0 right-0 drop-shadow-md"
          />
          <motion.img
            src={apple}
            alt="Apple"
            initial={{
              opacity: 0,
              scale: 0.7,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.65,
            }}
            transition={{
              duration: 0.9,
              delay: 1.15,
              ease: smoothEase,
            }}
            className="w-9 h-9 absolute -bottom-2 left-14 drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
