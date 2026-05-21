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
        strokeWidth="6"
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

const BG = "M0 200V0h400v400H0";
const T  = "M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1z";
const S  = "M321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z";

export default function AnimatedTSLogo({ size = 128 }) {
  const [svgRef, inView] = useInView(0.3);
  return (
    <svg ref={svgRef} viewBox="0 0 400 400" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <DrawPath d={BG} delay={0}   duration={1.0} fill="#007acc" inView={inView} />
      <DrawPath d={T}  delay={0.8} duration={1.1} fill="#ffffff" inView={inView} />
      <DrawPath d={S}  delay={1.6} duration={1.3} fill="#ffffff" inView={inView} />
    </svg>
  );
}