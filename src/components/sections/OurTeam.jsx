// import teamData from "../../data/teamData";
// import TeamCard from "../ui/TeamCard";
// function OurTeam() {
//   return (
//     <section id="team" className="container mx-auto pt-10 lg:pt-14 pb-6 px-6">
//       <h2 className="text-2xl w-fit mx-auto text-blackSoft font-medium capitalize relative horizontal-line">
//         meet our best team
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
//         {teamData.map((data) => (
//           <TeamCard key={data.id} {...data} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default OurTeam;

import { motion } from "framer-motion";
import teamData from "../../data/teamData";
import TeamCard from "../ui/TeamCard";

function OurTeam() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section id="team" className="container mx-auto pt-10 lg:pt-14 pb-6 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.65 }}
        transition={{ duration: 0.9, ease: smoothEase }}
        className="text-2xl w-fit mx-auto text-blackSoft font-medium capitalize relative horizontal-line"
      >
        meet our best team
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {teamData.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{
              opacity: 0,
              y: 28,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.95,
              ease: smoothEase,
              delay: 0.2 + index * 0.12,
            }}
          >
            <TeamCard {...data} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
