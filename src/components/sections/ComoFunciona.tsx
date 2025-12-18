import React from 'react';
import { Link, Sparkles, BarChart3, TrendingUp } from 'lucide-react';

const ComoFunciona: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "Crie suas contas",
            description: "Adicione suas contas bancárias, cartões e carteiras manualmente. Você tem controle total sobre o que adiciona.",
            time: "2 minutos",
            icon: <Link className="h-8 w-8" />
        },
        {
            number: "2",
            title: "Personalize categorias e metas",
            description: "Crie categorias que fazem sentido pra sua vida e defina metas personalizadas para alcançar seus objetivos.",
            time: "5 minutos",
            icon: <Sparkles className="h-8 w-8" />
        },
        {
            number: "3",
            title: "Registre seus gastos",
            description: "Adicione suas transações de forma rápida e simples. Categorize cada gasto do seu jeito.",
            time: "Diário",
            icon: <BarChart3 className="h-8 w-8" />
        },
        {
            number: "4",
            title: "Tome decisões melhores",
            description: "Com dados organizados na mão, você visualiza padrões, corta o que não precisa e atinge suas metas.",
            time: "Sempre",
            icon: <TrendingUp className="h-8 w-8" />
        }
    ];

    return (
        <section className="bg-slate-900 py-24 px-4" id="como-funciona">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Tão simples que você{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            vai usar de verdade
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all group"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/25">
                                {step.number}
                            </div>

                            <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">{step.description}</p>

                            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <span className="text-sm text-emerald-400 font-semibold">{step.time}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <p className="text-xl font-bold text-emerald-400">
                        Leva menos de 10 minutos pra começar a usar.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ComoFunciona;
