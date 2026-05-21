// AnimatedCss3Logo.jsx
import { motion } from 'framer-motion';

export const AnimatedCss3Logo = ({
    size = 64,
    duration = 1.5,
    staggerDelay = 0.15,
    onComplete
}) => {
    const paths = [
        { d: "M72 460L30 0h451l-41 460-184 52", color: "#264de4" },
        { d: "M256 37V472l149-41 35-394", color: "#2965f1" },
        { d: "m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382", color: "#ebebeb" },
        { d: "m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z", color: "#ffffff" }
    ];

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 512 512"
            aria-label="CSS3"
            role="img"
        >
            {paths.map((path, index) => (
                <g key={index}>
                    {/* Stroke layer */}
                    <motion.path
                        d={path.d}
                        fill="none"
                        stroke={path.color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 1 }}
                        whileInView={{ pathLength: 1, opacity: 1, strokeWidth:0.2 }}
                        transition={{
                            duration,
                            delay: index * staggerDelay,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Fill layer */}
                    <motion.path
                        d={path.d}
                        fill={path.color}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: duration + (index * staggerDelay),
                            ease: "easeOut"
                        }}
                    />
                </g>
            ))}
        </svg>
    );
};

export default AnimatedCss3Logo;