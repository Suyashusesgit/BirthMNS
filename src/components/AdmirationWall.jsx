import { motion } from 'framer-motion';
import { Star, Heart, Sun } from 'lucide-react';

const AdmirationWall = () => {
    const cards = [
        {
            title: "Brilliance",
            icon: <Star className="w-8 h-8 text-yellow-500" />,
            description: "Your intelligence and wit light up every room you walk into.",
            color: "bg-yellow-50"
        },
        {
            title: "Kindness",
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            description: "You have a heart of gold that touches everyone around you.",
            color: "bg-pink-50"
        },
        {
            title: "Strength",
            icon: <Sun className="w-8 h-8 text-orange-500" />,
            description: "Resilient and powerful, you inspire me every single day.",
            color: "bg-orange-50"
        }
    ];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-center mb-12 text-gray-800"
            >
                Why You're Special
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className={`${card.color} p-8 rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm cursor-pointer hover:shadow-2xl transition-all duration-300`}
                    >
                        <div className="mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                            {card.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{card.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {card.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AdmirationWall;
