import { useState, useRef } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('/aud.mp3')); // Happy Birthday Song
    audioRef.current.preload = 'auto';

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="fixed bottom-6 left-6 z-50 bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-md border border-pink-200 text-pink-500 hover:bg-pink-50 transition-colors"
        >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Music className="w-6 h-6" />}
        </motion.button>
    );
};

export default MusicPlayer;
