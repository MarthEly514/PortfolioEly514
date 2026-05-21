import React from 'react';
import { motion } from 'motion/react';

export default function Button({
    onclick = null,
    hideTextOnMin = false,
    expand = false,
    variant = "default",
    text,
    icon = null,
    iconPos = 'left',
    className = "",
    ...props
}) {

    // Base styles
    const baseStyles = `${expand ? 'w-full' : 'w-max'} cursor-pointer ${hideTextOnMin ? 'p-4' : 'px-6 py-3'} rounded-full flex flex-row items-center justify-center gap-2 font-medium transition-all duration-200`;

    // Variant styles
    const variants = {
        default: "bg-accent hover:bg-accent/80 text-white",

        border: "border-2 border-accent bg-transparent hover:bg-accent/10 text-accent",

        outline: "border-2 border-accent bg-transparent hover:bg-accent hover:text-white text-accent",

        ghost: "bg-transparent hover:bg-accent/20 text-accent/30",

        ghost_gray: "bg-ghost dark:bg-ghost-dark hover:bg-gray-200/50 hover:dark:bg-gray-200/20 text-primary-text dark:text-primary-text-dark",

        dark: "bg-gray-900 hover:bg-gray-800 text-white",

        light: "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700"
    };

    // Get the style for the current variant (fallback to default)
    const variantStyle = variants[variant] || variants.default;

    return (
        <motion.button
            className={`${baseStyles} ${variantStyle} ${className}`}
            {...props}
            onClick={onclick}

            //motion animation
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
        >
            {icon && iconPos == 'left' && <span>{icon}</span>}
            <span className={`${hideTextOnMin ? "hidden lg:flex" : ""}`}>{text}</span>
            {icon && iconPos == 'right' && <span>{icon}</span>}

        </motion.button>
    );
}