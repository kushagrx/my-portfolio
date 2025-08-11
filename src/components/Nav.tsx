"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-bg/70 backdrop-blur border-b border-white/10" : "bg-transparent"}`}>
            <div className="container-narrow flex items-center justify-between h-14">
                <Link href="/kushagra-portfolio/public" className="font-semibold tracking-tight">Kushagra Bisht</Link>
                <div className="flex items-center gap-4">
                    <a href="#experience" className="text-text-soft hover:text-text">Experience</a>
                    <a href="#projects" className="text-text-soft hover:text-text">Projects</a>
                    <a href="#skills" className="text-text-soft hover:text-text">Skills</a>
                    <a href="#education" className="text-text-soft hover:text-text">Education</a>
                    <a href="#contact" className="text-text-soft hover:text-text">Contact</a>
                    <div className="w-px h-4 bg-white/10 mx-2" />
                    <a href="mailto:kushagrabisht10@gmail.com" aria-label="Email">
                        <Mail className="w-5 h-5 text-text-soft hover:text-text" />
                    </a>
                    <a href="https://github.com/kushagr-" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github className="w-5 h-5 text-text-soft hover:text-text" />
                    </a>
                    <a href="https://www.linkedin.com/in/kushagra-bisht" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5 text-text-soft hover:text-text" />
                    </a>
                </div>
            </div>
        </nav>
    );
}