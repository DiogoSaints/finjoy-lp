import React from "react";
import { cn } from "../../lib/utils";

export const GlareCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 overflow-hidden group",
                "border border-slate-700 hover:border-emerald-500/50 transition-all duration-300",
                className
            )}
        >
            {/* Glare effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};
