// AnimatedNodeJsLogo.jsx
import { motion } from 'framer-motion';

export const AnimatedGitLogo = ({
  size = 64,
  duration = 2.5,
  onComplete
}) => {
  const nodePath = "M31.396 14.575L17.425.604a2.06 2.06 0 0 0-2.914 0l-2.9 2.9 3.68 3.68c.856-.3 1.836-.095 2.518.587a2.45 2.45 0 0 1 .581 2.533l3.547 3.547c.858-.296 1.848-.105 2.533.582a2.45 2.45 0 1 1-3.469 3.468c-.72-.72-.898-1.78-.534-2.667l-3.308-3.308v8.705a2.5 2.5 0 0 1 .65.464 2.45 2.45 0 1 1-3.468 3.468 2.45 2.45 0 0 1 0-3.468c.237-.236.5-.415.803-.535v-8.786c-.292-.12-.566-.297-.803-.535a2.45 2.45 0 0 1-.528-2.681l-3.63-3.628-9.58 9.57a2.06 2.06 0 0 0 0 2.915l13.972 13.97a2.06 2.06 0 0 0 2.914 0L31.396 17.5a2.06 2.06 0 0 0 0-2.915";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid"
    >
      {/* Stroke layer - drawing effect */}
      <motion.path
        d={nodePath}
        fill="none"
        stroke="#f03c2e"
        strokeWidth=".8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 1 }}
        whileInView={{ pathLength: 1, opacity: 1, strokeWidth:0.2, }}
        transition={{
          duration,
          ease: [0.22, 1, 0.36, 1]
        }}
        onAnimationComplete={onComplete}
      />

      {/* Fill layer - fades in after stroke */}
      <motion.path
        d={nodePath}
        fill="#f03c2e"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: duration - 0.2,
          ease: "easeOut"
        }}
      />
    </svg>
  );
};

export default AnimatedGitLogo;