import { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = forwardRef((props, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/aud.mp3');
        audioRef.current.preload = 'auto';
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useImperativeHandle(ref, () => ({
        play: () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play().catch(e => console.log("Audio play failed", e));
                setIsPlaying(true);
            }
        }
    }));

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed", e));
            }
            setIsPlaying(!isPlaying);
        }
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
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
