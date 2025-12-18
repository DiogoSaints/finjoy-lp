
import { motion } from "framer-motion";

export const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradiente base */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-slate-950 to-slate-950" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Blobs animados com blur verde */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -80, 60, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-1/2 right-1/4 w-80 h-80 bg-teal-500/25 rounded-full blur-3xl"
                animate={{
                    x: [0, -120, 80, 0],
                    y: [0, 100, -70, 0],
                    scale: [1, 0.9, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <motion.div
                className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 90, -100, 0],
                    y: [0, -60, 80, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            <motion.div
                className="absolute top-3/4 right-1/3 w-64 h-64 bg-teal-400/15 rounded-full blur-3xl"
                animate={{
                    x: [0, -70, 110, 0],
                    y: [0, 90, -50, 0],
                    scale: [1, 1.2, 1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
            />
        </div>
    );
};
