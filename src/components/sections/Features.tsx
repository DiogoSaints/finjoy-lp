import React from 'react';
import { GlareCard } from '../ui/glare-card';
import { Badge } from '../ui/badge';
import { CreditCard, FolderOpen, Bell, Target, BarChart3, Download } from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        {
            title: "Contas Ilimitadas",
            description: "Adicione quantos bancos, cartões e carteiras quiser. Nubank, Inter, cartão de crédito, dinheiro vivo — tudo em um só lugar.",
            icon: <CreditCard className="h-10 w-10 text-emerald-400" />,
        },
        {
            title: "Suas Categorias, Suas Regras",
            description: "Crie categorias personalizadas que fazem sentido pra sua vida. Netflix vai em Entretenimento ou Essenciais? Você decide.",
            icon: <FolderOpen className="h-10 w-10 text-emerald-400" />,
        },
        {
            title: "Alertas Inteligentes",
            description: "\"Você já gastou 80% do orçamento de lazer\" — Receba avisos antes de estourar, lembretes de contas e oportunidades reais de economizar.",
            icon: <Bell className="h-10 w-10 text-emerald-400" />,
        },
        {
            title: "Metas que Você Realmente Atinge",
            description: "Quer trocar de carro? Viajar pra Europa? O FinJoy mostra exatamente quanto guardar por mês e acompanha seu progresso em tempo real.",
            icon: <Target className="h-10 w-10 text-emerald-400" />,
        },
        {
            title: "Relatórios Automáticos",
            description: "Veja gráficos claros de onde seu dinheiro está indo. Por categoria, por período, por conta. Visualize seus padrões e tome decisões melhores.",
            icon: <BarChart3 className="h-10 w-10 text-emerald-400" />,
        },
        {
            title: "Exportação Total",
            description: "Seus dados em Excel, PDF ou CSV quando precisar. Perfeito pra prestação de contas, declaração de IR ou análise detalhada.",
            icon: <Download className="h-10 w-10 text-emerald-400" />,
        },
    ];

    return (
        <section className="bg-slate-900 py-24 px-4" id="features">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        Recursos Poderosos
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Tudo que você precisa,{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            nada que você não precisa
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Simples de usar, poderoso nos resultados. O FinJoy tem as ferramentas certas pra você controlar suas finanças de verdade.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <GlareCard key={index} className="flex flex-col">
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </GlareCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
