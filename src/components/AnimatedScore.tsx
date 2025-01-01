import { motion } from "framer-motion-3d";
import { useInView } from "react-intersection-observer";

interface Props {
  score: number;
  delay: number;
}

export default function AnimatedScore({ score, delay }: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="w-full h-40 relative">
      <motion.div
        initial={{ scale: 0, rotateX: -90 }}
        animate={inView ? { scale: 1, rotateX: 0 } : {}}
        transition={{
          type: "spring",
          duration: 1.5,
          delay,
          bounce: 0.4
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          {score}
        </span>
      </motion.div>
    </div>
  );
}