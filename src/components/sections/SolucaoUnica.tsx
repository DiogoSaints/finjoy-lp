import React from 'react';
import { Sparkles } from 'lucide-react';

const SolucaoUnica: React.FC = () => {
    return (
        <section className="bg-slate-950 py-24 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">A Diferença do FinJoy</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    FinJoy{' '}
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        faz diferente
                    </span>
                </h2>

                <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    Enquanto outros apps te fazem trabalhar, o FinJoy trabalha pra você. Adicione seus gastos em segundos, organize do seu jeito e veja seus padrões claramente.
                </p>

                <div className="pt-6">
                    <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                        <p className="text-2xl font-bold text-emerald-400 flex items-center gap-3">
                            <Sparkles className="h-6 w-6" />
                            Você registra, o app te mostra onde melhorar.
                        </p>
                    </div>
                </div>

                <div className="pt-12 space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                        Controle real, sem complicação
                    </h3>
                    <p className="text-lg text-slate-400">
                        Não é sobre ter mais recursos. É sobre ter os recursos certos, que você realmente vai usar todo dia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SolucaoUnica;
