"use client";

import Card from "./Card";
import Badge from "./Badge";
import { motion } from "framer-motion";

export default function ExpCard({
                                    item,
                                }: {
    item: {
        company: string;
        role: string;
        period: string;
        points: string[];
        tags: string[];
    };
}) {
    return (
        <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-text-soft">{item.company} • {item.period}</p>
                </div>
                <div className="flex gap-2">
                    {item.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
            </div>
            <ul className="mt-4 space-y-2 list-disc list-inside text-text-soft">
                {item.points.map((p, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 4 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.05 }}
                    >
                        {p}
                    </motion.li>
                ))}
            </ul>
        </Card>
    );
}