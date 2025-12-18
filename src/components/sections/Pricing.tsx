import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
    const allFeatures = [
        "Contas e cartões ilimitados",
        "Categorias personalizadas ilimitadas",
        "Metas ilimitadas e personalizadas",
        "Relatórios detalhados",
        "Alertas e lembretes",
        "Exportação de dados completa",
        "Suporte prioritário"
    ];

    const plans = [
        {
            name: "Mensal",
            price: "R$ 19,90",
            period: "/mês",
            total: "Cobrado mensalmente",
            description: "Flexibilidade total",
            features: allFeatures,
            featured: false,
            cta: "Assinar Mensal",
            link: "https://buy.stripe.com/test_00w00k0DC68EeCa7VS8ww03"
        },
        {
            name: "Semestral",
            price: "R$ 14,98",
            period: "/mês",
            total: "R$ 89,88 a cada 6 meses",
            description: "Melhor custo-benefício",
            badge: "Mais Popular",
            savings: "economize R$ 29,52",
            features: allFeatures,
            featured: true,
            cta: "Assinar Semestral",
            link: "https://buy.stripe.com/test_00w9AUgCA8gM79Ib848ww04"
        },
        {
            name: "Anual",
            price: "R$ 12,49",
            period: "/mês",
            total: "R$ 149,90 por ano",
            description: "Maior economia",
            savings: "economize R$ 88,90",
            features: allFeatures,
            featured: false,
            cta: "Assinar Anual",
            link: "https://buy.stripe.com/test_cNi3cw9a80Okcu27VS8ww05"
        }
    ];

    return (
        <section className="bg-slate-950 py-24 px-4" id="pricing">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        Planos e Preços
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Escolha o plano{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            ideal para você
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Todos os planos com acesso completo. Escolha a periodicidade que funciona melhor pra você.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative ${plan.featured
                                ? 'bg-gradient-to-b from-emerald-500/10 to-slate-800/50 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105'
                                : 'bg-slate-800/30 border-slate-700'
                                } transition-all duration-300 hover:scale-105`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-none px-4 py-1">
                                        {plan.badge}
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                                <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                                <div className="mt-6">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-5xl font-black text-white">{plan.price}</span>
                                    </div>
                                    <span className="text-slate-400 text-sm">{plan.period}</span>
                                    <div className="mt-2">
                                        <span className="text-xs text-slate-500">{plan.total}</span>
                                    </div>
                                    {plan.savings && (
                                        <div className="mt-3">
                                            <span className="text-sm text-emerald-400 font-semibold">{plan.savings}</span>
                                        </div>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className={`w-full ${plan.featured
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                                        }`}
                                    onClick={() => window.open(plan.link, '_blank')}
                                >
                                    {plan.cta} →
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Guarantee */}
                <div className="text-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-3">🎁 Garantia Incondicional de 30 Dias</h3>
                    <p className="text-slate-300">
                        Não gostou? Devolvemos cada centavo. Sem perguntas, sem burocracia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
