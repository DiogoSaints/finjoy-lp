import { cn } from "../../lib/utils";
import React from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:bg-slate-900/80 dark:border-slate-700/50 bg-white border border-slate-200 backdrop-blur-sm justify-between flex flex-col space-y-4 hover:shadow-emerald-500/20 hover:border-emerald-500/50",
                className
            )}
        >
            {header && <div className="mb-4">{header}</div>}
            <div className="group-hover/bento:translate-x-1 transition duration-200">
                <div className="mb-3">{icon}</div>
                <div className="font-sans font-bold text-white text-xl mb-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-slate-400 text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
