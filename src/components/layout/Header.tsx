import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Wallet } from 'lucide-react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#top" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                            <Wallet className="h-7 w-7 text-slate-950" strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-emerald-500 leading-none tracking-tight">FinJoy</span>
                            <span className="text-xs font-medium text-white tracking-wide">Você no controle</span>
                        </div>
                    </a>

                    {/* Nav Links */}
                    {/* Nav Links (Desktop) */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#features"
                            onClick={(e) => handleNavClick(e, 'features')}
                            className="text-slate-300 hover:text-white font-medium transition-colors"
                        >
                            Recursos
                        </a>
                        <a
                            href="#pricing"
                            onClick={(e) => handleNavClick(e, 'pricing')}
                            className="text-slate-300 hover:text-white font-medium transition-colors"
                        >
                            Preços
                        </a>
                        <a
                            href="#faq"
                            onClick={(e) => handleNavClick(e, 'faq')}
                            className="text-slate-300 hover:text-white font-medium transition-colors"
                        >
                            FAQ
                        </a>
                    </nav>

                    {/* Login Button (Visible on Mobile & Desktop) */}
                    <div className="flex items-center gap-4">
                        <Button
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://finjoy.netlify.app', '_blank');
                            }}
                        >
                            Entrar
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
