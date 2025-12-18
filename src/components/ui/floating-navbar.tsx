"use client";
import { useState, type ReactNode } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: ReactNode;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-emerald-500/30 rounded-full bg-slate-900/95 backdrop-blur-md shadow-lg shadow-emerald-500/20 z-[5000] px-8 py-2 items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <a
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative text-slate-300 items-center flex space-x-1 hover:text-emerald-400 transition-colors"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
                    </a>
                ))}
                <button
                    onClick={() => window.open('https://finjoy.netlify.app', '_blank')}
                    className="border text-sm font-medium relative border-emerald-500/30 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/25">
                    <span>Entrar</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent h-px" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};
