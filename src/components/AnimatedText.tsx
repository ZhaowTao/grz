import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => (
        <Char
          key={`${char}-${i}`}
          progress={scrollYProgress}
          range={[i / chars.length, (i + 1) / chars.length]}
          char={char}
        />
      ))}
    </p>
  );
}

function Char({
  progress,
  range,
  char,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  char: string;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  if (char === " ") {
    return <span>&nbsp;</span>;
  }
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}
