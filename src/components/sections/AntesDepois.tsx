import React from 'react';
import { X, Check } from 'lucide-react';

const AntesDepois: React.FC = () => {
    const antes = [
        "Planilhas que você abre 1x por mês(quando lembra)",
        "Não saber onde o dinheiro sumiu",
        "\"Vou começar a me organizar mês que vem\"",
        "Metas que nunca saem do papel"
    ];

    const depois = [
        "2 minutos por dia pra registrar tudo",
        "Você sabe exatamente onde cada real foi",
        "Organização que funciona (de verdade)",
        "Metas claras com progresso visível"
    ];

    return (
        <section className="bg-slate-950 py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        A diferença é{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            real
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Antes */}
                    <div className="p-8 rounded-2xl bg-slate-900/50 border border-red-500/20">
                        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                            <X className="h-6 w-6" />
                            Antes do FinJoy
                        </h3>
                        <ul className="space-y-4">
                            {antes.map((item, index) => (
                                <li key={index} className="flex gap-3 text-slate-400">
                                    <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Depois */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30">
                        <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                            <Check className="h-6 w-6" />
                            Com o FinJoy
                        </h3>
                        <ul className="space-y-4">
                            {depois.map((item, index) => (
                                <li key={index} className="flex gap-3 text-slate-200">
                                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Testimonial Quote */}
                <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
                    <blockquote className="text-center">
                        <p className="text-xl md:text-2xl text-white font-medium italic mb-4">
                            "Cortei R$ 340/mês em gastos que eu nem percebia. Netflix, Spotify, Amazon Prime que nem usava mais."
                        </p>
                        <footer className="text-slate-400">
                            — Rafael Costa, 28 anos
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default AntesDepois;
