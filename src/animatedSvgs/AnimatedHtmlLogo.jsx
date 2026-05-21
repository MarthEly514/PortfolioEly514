import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";

function DrawPath({ d, delay = 0, duration = 1.4, fill, strokeWidth = 0.8, inView }) {
  const strokeRef = useRef(null);
  const [length, setLength] = useState(0);
  const [fillOpacity, setFillOpacity] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (strokeRef.current) setLength(strokeRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    if (!length || !inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const timeout = setTimeout(() => {
      animate(0, length, {
        duration,
        ease: [0.4, 0, 0.2, 1],
        onUpdate: (v) => {
          if (strokeRef.current) strokeRef.current.style.strokeDashoffset = length - v;
        },
        onComplete: () => {
          animate(0, 1, {
            duration: 0.4,
            ease: "easeOut",
            onUpdate: (v) => setFillOpacity(v),
          });
        },
      });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [length, inView, delay, duration]);

  return (
    <g>
      <path
        ref={strokeRef}
        d={d}
        fill="none"
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeDasharray: length, strokeDashoffset: length }}
      />
      <path d={d} fill={fill} style={{ opacity: fillOpacity }} />
    </g>
  );
}

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const SHIELD_L = "M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z";
const SHIELD_R = "M25.337 26.964l2.197-24.608H16v27.197z";
const TEXT_L   = "M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z";
const TEXT_R   = "M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z";

export default function AnimatedHTMLLogo({ size = 128 }) {
  const [svgRef, inView] = useInView(0.3);
  return (
    <svg ref={svgRef} viewBox="0 0 32 32" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <DrawPath d={SHIELD_L} delay={0}   duration={0.9} fill="#e44d26" strokeWidth={0.8} inView={inView} />
      <DrawPath d={SHIELD_R} delay={0.7} duration={0.8} fill="#f16529" strokeWidth={0.8} inView={inView} />
      <DrawPath d={TEXT_L}   delay={1.2} duration={1.0} fill="#ebebeb" strokeWidth={0.4} inView={inView} />
      <DrawPath d={TEXT_R}   delay={1.9} duration={1.0} fill="#ffffff" strokeWidth={0.4} inView={inView} />
    </svg>
  );
}