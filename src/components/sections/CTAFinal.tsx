import React from 'react';
import { Button } from '../ui/button';
import { X, Check } from 'lucide-react';

const CTAFinal: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-emerald-500 to-teal-500 py-24 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                    Quanto tempo mais você vai perder com planilhas?
                </h2>

                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                    Todo mês que passa sem controle financeiro são centenas (às vezes milhares) de reais desperdiçados em gastos invisíveis, juros desnecessários e oportunidades perdidas.
                </p>

                <div className="pt-8">
                    <h3 className="text-2xl font-bold text-white mb-8">
                        O que você pode fazer nos próximos 5 minutos:
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {/* Opção 1 - Continuar igual */}
                        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20">
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <X className="h-6 w-6" />
                                Opção 1: Continuar do jeito que está
                            </h4>
                            <ul className="space-y-3 text-left">
                                <li className="flex gap-2 text-white/80">
                                    <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                    <span>Chegar zerado no fim do mês</span>
                                </li>
                                <li className="flex gap-2 text-white/80">
                                    <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                    <span>Pagar juros por esquecer contas</span>
                                </li>
                                <li className="flex gap-2 text-white/80">
                                    <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                    <span>Nunca saber pra onde seu dinheiro foi</span>
                                </li>
                            </ul>
                        </div>

                        {/* Opção 2 - Começar com FinJoy */}
                        <div className="p-8 rounded-2xl bg-white border-4 border-white shadow-2xl">
                            <h4 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                                <Check className="h-6 w-6" />
                                Opção 2: Começar com o FinJoy agora
                            </h4>
                            <ul className="space-y-3 text-left">
                                <li className="flex gap-2 text-slate-700">
                                    <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span>Ver exatamente onde cada real está indo</span>
                                </li>
                                <li className="flex gap-2 text-slate-700">
                                    <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span>Criar metas reais que você vai atingir</span>
                                </li>
                                <li className="flex gap-2 text-slate-700">
                                    <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span>Economizar automaticamente todo mês</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-2xl font-bold text-white">
                            A escolha é sua. Mas ela precisa ser feita agora.
                        </p>

                        <Button
                            size="lg"
                            className="bg-white text-emerald-600 hover:bg-slate-100 h-16 px-12 text-xl font-black shadow-2xl"
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Garantir Acesso Agora →
                        </Button>

                        <p className="text-white/80">
                            Cancele quando quiser. 30 dias de garantia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAFinal;
