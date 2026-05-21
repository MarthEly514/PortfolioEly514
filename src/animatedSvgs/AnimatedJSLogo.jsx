import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";

function DrawPath({ d, delay = 0, duration = 1.4, fill, inView }) {
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
        strokeWidth="4"
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

const BG   = "M0 0h256v256H0V0z";
const J    = "M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996";
const S    = "M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574";

export default function AnimatedJSLogo({ size = 128 }) {
  const [svgRef, inView] = useInView(0.3);
  return (
    <svg ref={svgRef} viewBox="0 0 256 256" width={size} height={size} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
      <DrawPath d={BG} delay={0}   duration={1.0} fill="#F7DF1E" inView={inView} />
      <DrawPath d={J}  delay={0.8} duration={1.1} fill="#323330" inView={inView} />
      <DrawPath d={S}  delay={1.6} duration={1.2} fill="#323330" inView={inView} />
    </svg>
  );
}