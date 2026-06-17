import { motion } from "framer-motion";

function PreLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-bgMain">
      <div className="flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold text-primary tracking-[0.08em] sm:tracking-[0.15em]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Bitezy
        </motion.h1>

        <motion.p
          className="mt-5 text-sm text-graySoft"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          Preparing fresh meals...
        </motion.p>

        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="block h-2 w-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.45, 1],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: dot * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default PreLoader;
