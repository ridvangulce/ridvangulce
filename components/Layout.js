import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Case Studies', href: '/#case-studies' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Skills', href: '/#skills' },
    ];

    return (
        <nav className={clsx(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled
                ? "bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle py-4"
                : "bg-transparent py-6"
        )}>
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className="text-xl font-bold font-mono tracking-tighter">
                    &lt;RG /&gt;
                </Link>

                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="mailto:contact@example.com" // Replace with real email
                    className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    Contact Me
                </Link>
            </div>
        </nav>
    );
};

export default function Layout({ children, title = "Ridvan Gulce | Backend Developer" }) {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Backend-focused developer specializing in high-scale APIs, databases, and performance." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="flex-grow pt-24">
                {children}
            </main>

            <footer className="border-t border-border-subtle bg-bg-secondary py-8 mt-20">
                <div className="container-custom text-center text-text-secondary text-sm">
                    <p>© {new Date().getFullYear()} Ridvan Gulce. Built with Next.js & Tailwind.</p>
                </div>
            </footer>
        </div>
    );
}
