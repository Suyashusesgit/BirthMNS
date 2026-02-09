import { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { Music, Pause, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = forwardRef((props, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = new Audio('/aud.mp3');
        audio.preload = 'auto';
        audio.loop = true;
        audioRef.current = audio;

        const setPlaying = () => setIsPlaying(true);
        const setPaused = () => setIsPlaying(false);
        const setLoading = () => setIsLoading(true);
        const setReady = () => setIsLoading(false);

        audio.addEventListener('play', setPlaying);
        audio.addEventListener('pause', setPaused);
        audio.addEventListener('waiting', setLoading);
        audio.addEventListener('playing', setReady);
        audio.addEventListener('canplay', setReady);
        audio.addEventListener('loadstart', setLoading);

        return () => {
            audio.removeEventListener('play', setPlaying);
            audio.removeEventListener('pause', setPaused);
            audio.removeEventListener('waiting', setLoading);
            audio.removeEventListener('playing', setReady);
            audio.removeEventListener('canplay', setReady);
            audio.removeEventListener('loadstart', setLoading);
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    useImperativeHandle(ref, () => ({
        play: () => {
            if (audioRef.current) {
                audioRef.current.play().catch(e => console.log("Audio play failed", e));
            }
        }
    }));

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed", e));
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="fixed bottom-6 left-6 z-50 bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-md border border-pink-200 text-pink-500 hover:bg-pink-50 transition-colors"
        >
            {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
            ) : isPlaying ? (
                <Pause className="w-6 h-6" />
            ) : (
                <Music className="w-6 h-6" />
            )}
        </motion.button>
    );
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
