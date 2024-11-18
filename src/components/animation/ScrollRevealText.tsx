import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollReveal({
  children,
  coverClass,
}: {
  children: ReactNode;
  coverClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100% 80%", "100% 50%"],
    layoutEffect: false,
  });
  const trx = useTransform(scrollYProgress, [0, 1], ["0%", "102%"]);

  return (
    <motion.div ref={ref} className="relative overflow-hidden">
      {children}
      <motion.div
        style={{
          translateX: trx,
        }}
        className={`absolute top-0 left-0 h-full w-full ${coverClass}`}
      ></motion.div>
    </motion.div>
  );
}
