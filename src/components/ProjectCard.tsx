"use client";

import Card from "./Card";
import Badge from "./Badge";
import { motion } from "framer-motion";

export default function ProjectCard({
                                        project,
                                    }: {
    project: {
        name: string;
        stack: string[];
        description: string;
        highlights: string[];
    };
}) {
    return (
        <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-text-soft mt-1">{project.description}</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                    {project.stack.map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
            </div>
            <ul className="mt-4 space-y-2 list-disc list-inside text-text-soft">
                {project.highlights.map((h, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 4 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                    >
                        {h}
                    </motion.li>
                ))}
            </ul>
        </Card>
    );
}