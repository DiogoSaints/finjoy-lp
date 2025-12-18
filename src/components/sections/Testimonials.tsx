import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { Badge } from '../ui/badge';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            quote: "Finalmente consegui organizar minhas finanças sem dor de cabeça. O FinJoy é incrível! Mudou completamente minha relação com dinheiro.",
            name: "Ana Silva",
            title: "Designer Freelancer",
        },
        {
            quote: "A interface é linda e o app é super rápido. Recomendo para todos os meus amigos. Uso todos os dias!",
            name: "Carlos Souza",
            title: "Engenheiro de Software",
        },
        {
            quote: "Nunca mais paguei juros por esquecer uma conta. A sincronização automática salvou minha vida financeira.",
            name: "Mariana Oliveira",
            title: "Médica",
        },
        {
            quote: "Simplesmente o melhor app de finanças que já usei. E olha que já testei muitos no mercado.",
            name: "Pedro Santos",
            title: "Empreendedor",
        },
        {
            quote: "O suporte é sensacional e as metas me ajudaram a comprar meu carro novo em apenas 8 meses!",
            name: "Fernanda Lima",
            title: "Arquiteta",
        },
        {
            quote: "A categorização automática por IA é mágica. Economizo horas que gastava em planilhas todo mês.",
            name: "Rafael Costa",
            title: "Contador",
        },
    ];

    return (
        <section className="bg-slate-950 py-24 px-4 overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        Depoimentos
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        O que nossos usuários{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            estão dizendo
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Mais de 50.000 pessoas já transformaram suas finanças com o FinJoy
                    </p>
                </div>

                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                    pauseOnHover={true}
                />
            </div>
        </section>
    );
};

export default Testimonials;
