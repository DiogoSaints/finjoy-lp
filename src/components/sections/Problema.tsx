import React from 'react';
import { X } from 'lucide-react';

const Problema: React.FC = () => {
    const problems = [
        {
            title: "Planilhas abandonadas",
            description: "Você cria cheia de motivação, usa 3 dias e nunca mais abre"
        },
        {
            title: "Apps complicados",
            description: "15 telas pra registrar um café de R$ 5"
        },
        {
            title: "Fim do mês zerado",
            description: "Você jura que tinha dinheiro, mas não sabe onde foi parar"
        },
        {
            title: "Assinaturas esquecidas",
            description: "Netflix, Spotify, Prime... R$ 300/mês em coisas que você mal usa"
        }
    ];

    return (
        <section className="bg-slate-900 py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Você já passou{' '}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            por isso?
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-6 rounded-2xl bg-slate-800/50 border border-red-500/20 hover:border-red-500/40 transition-all"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <X className="h-5 w-5 text-red-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{problem.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4 pt-8 border-t border-slate-800">
                    <h3 className="text-2xl font-bold text-white">
                        Você não precisa de mais um app chato.
                    </h3>
                    <p className="text-lg text-slate-300">
                        Você precisa de algo que funcione de verdade — e que você realmente vá usar.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problema;
