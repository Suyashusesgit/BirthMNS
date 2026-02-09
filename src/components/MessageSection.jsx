import { motion } from 'framer-motion';

const MessageSection = () => {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-white/40 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-2xl border border-white/60 overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300"></div>

                <h2 className="text-3xl font-serif text-center mb-8 text-gray-800">
                    To My Dearest Sister
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                    <p>
                        MNS, or as I fondly call you, <strong>Chelli</strong>,
                    </p>
                    <p>
                        You are more than just a friend; you are the sister I got to choose. Watching you grow, succeed, and spread kindness has been one of my greatest joys.
                    </p>
                    <p>
                        On this special day, I want you to know how much I admire your resilience, your laughter, and the beautiful way you see the world. May this year bring you as much happiness as you bring to others.
                    </p>
                    <p className="text-right font-serif text-xl mt-8 text-gray-900">
                        — With all my love
                    </p>
                </div>

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"></div>
            </motion.div>
        </section>
    );
};

export default MessageSection;
