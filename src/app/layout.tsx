import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
    title: "Kushagra Bisht - Portfolio",
    description:
        "Cloud & DevOps enthusiast with full-stack and mobile experience. AI summarization, scalable systems, and clean UX.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
        <body>
        <Nav />
        {children}
        </body>
        </html>
    );
}