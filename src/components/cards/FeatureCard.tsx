import { useScroll } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";

export type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  onReachActive: () => void;
  active: boolean;
  extra?: ReactNode;
};

export default function FeatureCard({
  icon,
  title,
  description,
  onReachActive,
  active,
  extra,
}: FeatureCardProps) {
  const [y, setY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYOffset } = useScroll({
    target: ref,
    layoutEffect: false,
    axis: "y",
  });

  useEffect(() => {
    setY(scrollYOffset.get());
    function ev() {
      setY(scrollYOffset.get());
    }

    window.addEventListener("scroll", ev);

    return () => {
      window.removeEventListener("scroll", ev);
    };
  }, [scrollYOffset]);

  useEffect(() => {
    if (y >= 0.55 && y <= 0.63) onReachActive();
  }, [y, onReachActive]);

  return (
    <div
      ref={ref}
      className={`${
        active ? "border-primary" : "border-transparent"
      } border-2 rounded-xl p-4 my-2`}
    >
      <div className="flex gap-4 items-center">
        <span className={`text-4xl md:text-6xl ${active ? 'text-primary' : ''}`}>{icon}</span>
        <div>
          <h4 className="font-semibold text-xl md:text-2xl">{title}</h4>
          <p className="opacity-60 text-sm md:text-lg !leading-5">
            {description}
          </p>
          {extra}
        </div>
      </div>
    </div>
  );
}
