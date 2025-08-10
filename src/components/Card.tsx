"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

export default function Card({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className={clsx(
                "rounded-2xl bg-card/80 border border-white/5 shadow-soft hover:shadow-glow backdrop-blur",
                className
            )}
        >
            {children}
        </motion.div>
    );
}