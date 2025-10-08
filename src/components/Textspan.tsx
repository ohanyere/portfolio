import { motion } from "framer-motion";

interface TextSpanProps {
  children: string | React.ReactNode | React.ReactElement;
}

export default function TextSpan({ children }: TextSpanProps) {
  const text = children?.toString().split("") || [];

  return (
    <span className="inline-flex">
      {text.map((char, idx) => (
        <motion.span
          key={idx}
          whileHover={{
            scale: 1.2,
            rotate: [0, -5, 5, 0],
            transition: { type: "spring", stiffness: 300, damping: 10 },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
