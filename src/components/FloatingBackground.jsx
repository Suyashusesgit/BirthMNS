import { motion } from 'framer-motion';

const FloatingBackground = () => {
    const elements = Array.from({ length: 20 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {elements.map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute text-2xl opacity-20 ${i % 2 === 0 ? 'text-pink-300' : 'text-purple-300'}`}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                        rotate: 0,
                    }}
                    animate={{
                        y: -100,
                        rotate: 360,
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10,
                    }}
                >
                    {i % 2 === 0 ? '❤️' : '✨'}
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingBackground;
