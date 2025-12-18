import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                <span className="text-2xl">💰</span>
                            </div>
                            <span className="text-xl font-black text-white">FinJoy</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Transforme suas finanças em alegria. Controle total, sem complicação.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Produto</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#features" className="hover:text-emerald-400 transition-colors">Recursos</a></li>
                            <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Preços</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Empresa</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Sobre</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Carreiras</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Termos</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Segurança</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>© 2024 FinJoy. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
