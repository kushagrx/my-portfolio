import { clsx } from "clsx";

export default function Badge({
                                  children,
                                  className,
                              }: { children: React.ReactNode; className?: string }) {
    return (
        <span
            className={clsx(
                "inline-flex items-center rounded-full bg-soft/60 text-text-soft border border-white/5 px-3 py-1 text-xs",
                className
            )}
        >
{children}
</span>
    );
}