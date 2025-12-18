
import { cn } from "../../lib/utils";

export default function GridBackground() {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-1">
            {/* Grid Pattern */}
            <div
                className={cn("absolute inset-0 h-full w-full")}
                style={{
                    backgroundSize: '40px 40px', // Smaller cells for more density
                    backgroundImage: `
                linear-gradient(to right, rgba(50, 210, 151, 0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(50, 210, 151, 0.4) 1px, transparent 1px)
            `, // Increased opacity to 0.4
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', // Simpler mask
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
            />

            {/* Animated Particles/Glow - Made more visible */}
            <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-emerald-400/20 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-teal-400/20 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
        </div>
    );
}
