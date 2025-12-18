import React from "react";
import { cn } from "../../lib/utils";

export const GlareCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    // Forced static as per request

    return (
        <div
            className={cn(
                "relative w-full isolate [contain:layout_style] [perspective:600px] transition-transform duration-[200ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] active:[scale:1]",
                className
            )}
        >
            <div
                className={cn(
                    "relative h-full w-full overflow-hidden rounded-[24px] border border-slate-800 bg-slate-900 transition-all duration-300",
                    "shadow-[0_20px_50px_-12px_rgba(50,210,151,0.5)]", // Reduced shadow opacity
                    "transform-gpu"
                )}
            >
                {/* Glare Layers */}
                <div
                    className="absolute inset-0 mix-blend-soft-light"
                    style={{
                        background: `linear-gradient(115deg, transparent 20%, rgba(50, 210, 151, 0.4) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(50, 210, 151, 0.4) 60%, transparent 80%)`,
                        backgroundSize: '200% 200%',
                        animation: 'glareMove 5s infinite linear'
                    }}
                />

                <div className="relative z-10 h-full">
                    {children}
                </div>
            </div>

            {/* Styles for the animation */}
            <style>{`
        @keyframes glareMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
      `}</style>
        </div>
    );
};
