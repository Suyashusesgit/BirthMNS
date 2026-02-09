import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        // Set birthday date to tomorrow (Feb 10th)
        const year = new Date().getFullYear();
        const birthday = new Date(`${year}-02-10`);
        const now = new Date();

        if (now > birthday) {
            birthday.setFullYear(year + 1);
        }

        // For demo purposes, if today is the birthday, allow celebration!
        // But logic here just counts down to the date.
        const difference = +birthday - +now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 pt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative"
            >
                <div className="absolute -top-10 -left-10 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>🎈</div>
                <div className="absolute -top-6 -right-12 text-5xl animate-bounce" style={{ animationDuration: '4s' }}>🎈</div>

                <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                    Happy Birthday, <br />
                    <span className="text-pink-600">Chelli!</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-600 italic font-light"
                >
                    Celebrating the most wonderful soul ✨
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-4 gap-4 mt-8 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50"
            >
                {Object.keys(timeLeft).length > 0 ? (
                    Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-purple-600">{value}</span>
                            <span className="text-xs uppercase tracking-wider text-gray-500">{unit}</span>
                        </div>
                    ))
                ) : (
                    <div className="col-span-4 text-2xl font-bold text-pink-600 flex items-center gap-2">
                        <Sparkles className="w-6 h-6" /> It's Today! <Sparkles className="w-6 h-6" />
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default Hero;
