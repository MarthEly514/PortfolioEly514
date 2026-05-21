import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";

const X_PATH =
    "M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795z";

const E_PATH =
    "M.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z";

function DrawPath({ d, delay = 0, duration = 1.4, inView, onComplete }) {
    const strokeRef = useRef(null);
    const [length, setLength] = useState(0);
    const [fillOpacity, setFillOpacity] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (strokeRef.current) {
            setLength(strokeRef.current.getTotalLength());
        }
    }, []);

    useEffect(() => {
        if (!length || !inView || hasAnimated.current) return;
        hasAnimated.current = true;

        const timeout = setTimeout(() => {
            animate(0, length, {
                duration,
                ease: [0.4, 0, 0.2, 1],
                onUpdate: (v) => {
                    if (strokeRef.current) {
                        strokeRef.current.style.strokeDashoffset = length - v;
                    }
                },
                onComplete: () => {
                    animate(0, 1, {
                        duration: 0.35,
                        ease: "easeOut",
                        onUpdate: (v) => setFillOpacity(v),
                        onComplete,
                    });
                },
            });
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [length, inView, delay, duration, onComplete]);

    return (
        <g>
            <path
                ref={strokeRef}
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.15"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    strokeDasharray: length,
                    strokeDashoffset: length,
                }}
            />
            <path
                d={d}
                fill="currentColor"
                style={{ opacity: fillOpacity }}
            />
        </g>
    );
}

export default function AnimatedExpressLogo({ size = 64 }) {
    const svgRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = svgRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={size}
            height={size}
            style={{ color: "currentColor", overflow: "visible" }}
        >
            <DrawPath d={X_PATH} delay={0.15} duration={1.1} inView={inView} />
            <DrawPath d={E_PATH} delay={0.95} duration={1.35} inView={inView} />
        </svg>
    );
}