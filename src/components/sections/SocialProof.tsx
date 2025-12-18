import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const SocialProof: React.FC = () => {
    const testimonials = [
        {
            quote: "Finalmente consegui organizar minhas finanças sem dor de cabeça. O FinJoy é incrível!",
            name: "Ana Silva",
            title: "Designer Freelancer",
        },
        {
            quote: "A interface é linda e o app é super rápido. Recomendo para todos.",
            name: "Carlos Souza",
            title: "Engenheiro de Software",
        },
        {
            quote: "Nunca mais paguei juros por esquecer uma conta. A sincronização automática salvou minha vida.",
            name: "Mariana Oliveira",
            title: "Médica",
        },
        {
            quote: "Simplesmente o melhor app de finanças que já usei. E olha que já testei muitos.",
            name: "Pedro Santos",
            title: "Empreendedor",
        },
        {
            quote: "O suporte é sensacional e as metas me ajudaram a comprar meu carro novo.",
            name: "Fernanda Lima",
            title: "Arquiteta",
        },
    ];

    return (
        <section className="social-proof overflow-hidden py-12" id="reviews">
            <div className="text-center mb-8">
                <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">Eles Confiam no FinJoy</p>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </section>
    );
};

export default SocialProof;
