// AnimatedTailwindLogo.jsx
import { motion } from 'framer-motion';

export const AnimatedTailwindLogo = ({
    size = 64,
    duration = 2,
    onComplete
}) => {
    const paths = [
        "M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z",
        "M0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
    ];

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 64 64"
        >
            <defs>
                <linearGradient x1="0" y1="-21.333" y2="85.333" id="tailwindGrad" x2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2383ae" offset="0%" />
                    <stop stopColor="#6dd7b9" offset="100%" />
                </linearGradient>
            </defs>

            {paths.map((pathData, index) => (
                <motion.path
                    key={index}
                    d={pathData}
                    fill="none"
                    stroke="url(#tailwindGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 1 }}
                    whileInView={{ pathLength: 1, opacity: 1, strokeWidth:0.2, }}
                    transition={{
                        duration,
                        delay: index * 0.2,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {paths.map((pathData, index) => (
                <motion.path
                    key={`fill-${index}`}
                    d={pathData}
                    fill="url(#tailwindGrad)"
                    fillRule="evenodd"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.3,
                        delay: duration + (index * 0.2),
                        ease: "easeOut"
                    }}
                />
            ))}
        </svg>
    );
};

export default AnimatedTailwindLogo;