import React from 'react'
import selfImage from '../assets/images/self_pixelated1.png';
import { motion } from 'motion/react';

export default function ImageBlob() {
    return (
        <>
            <div className='hidden relative w-125 aspect-10/9 xl:flex items-center justify-center'>
                <motion.div
                    className='absolute w-125 aspect-10/9 bg-accent/70'
                    style={blob2Style}
                    animate={{
                        borderRadius: [
                            "72% 28% 62% 38% / 53% 36% 64% 47%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "28% 72% 38% 62% / 47% 64% 36% 53%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "72% 28% 62% 38% / 53% 36% 64% 47%"
                        ],
                        rotate: [0, -90, -180, -270, -360]
                    }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                </motion.div>
                <motion.div
                    className='absolute w-125 aspect-10/9 bg-accent/70'
                    style={blob2Style}
                    animate={{
                        borderRadius: [
                            "72% 28% 62% 38% / 53% 36% 64% 47%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "28% 72% 38% 62% / 47% 64% 36% 53%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "72% 28% 62% 38% / 53% 36% 64% 47%"
                        ],
                        rotate: [0, 90, 180, 270, 360] // or [0, 0, 0, 0, -360] for counterclockwise
                    }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                </motion.div>
                <motion.div
                    className='absolute w-125 aspect-10/9'
                    style={blob1Style}
                    animate={{
                        borderRadius: [
                            "23% 77% 45% 55% / 37% 54% 46% 63%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "77% 23% 55% 45% / 63% 46% 54% 37%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "23% 77% 45% 55% / 37% 54% 46% 63%"
                        ]
                    }}

                    transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                </motion.div>
            </div>

            <div className='xl:hidden flex w-full aspect-square flex-col items-center justify-center'>
                <motion.div
                    className='absolute w-[80%] md:w-[60%] aspect-10/9 bg-accent/70'
                    style={blob2Style}
                    animate={{
                        borderRadius: [
                            "72% 28% 62% 38% / 53% 36% 64% 47%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "28% 72% 38% 62% / 47% 64% 36% 53%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "72% 28% 62% 38% / 53% 36% 64% 47%"
                        ],
                        rotate: [0, -90, -180, -270, -360]
                    }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                </motion.div>
                <motion.div
                    className='absolute w-[80%] md:w-[60%] aspect-10/9 bg-accent/70'
                    style={blob2Style}
                    animate={{
                        borderRadius: [
                            "72% 28% 62% 38% / 53% 36% 64% 47%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "28% 72% 38% 62% / 47% 64% 36% 53%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "72% 28% 62% 38% / 53% 36% 64% 47%"
                        ],
                        rotate: [0, 90, 180, 270, 360] // or [0, 0, 0, 0, -360] for counterclockwise
                    }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                </motion.div>
                <motion.div
                    className='absolute w-[80%] md:w-[60%] aspect-10/9 bg-accent/70'
                    style={blob1Style}
                    animate={{
                        borderRadius: [
                            "72% 28% 62% 38% / 53% 36% 64% 47%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "28% 72% 38% 62% / 47% 64% 36% 53%",
                            "43% 57% 65% 45% / 53% 52% 51% 47%",
                            "72% 28% 62% 38% / 53% 36% 64% 47%"
                        ],
                    }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                </motion.div>
            </div>
        </>
    )
}

const blob1Style = {
    zIndex: 10,
    backgroundImage: `url(${selfImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const blob2Style = {
    zIndex: 5,
}

