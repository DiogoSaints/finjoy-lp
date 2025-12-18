import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Preciso conectar minha conta bancária?",
            answer: "Não! O FinJoy é 100% manual e seguro. Você não compartilha senhas de banco nem conecta nada. O controle é total seu e você registra apenas o que quiser."
        },
        {
            question: "É seguro usar o FinJoy?",
            answer: "Sim, muito mais seguro que apps automáticos. Como não conectamos com seus bancos, não existe risco nenhum de movimentação indevida ou vazamento de senhas bancárias."
        },
        {
            question: "Tem sincronização automática?",
            answer: "Não. Nós acreditamos que o verdadeiro controle financeiro vem da consciência de registrar seus gastos. Apps automáticos te deixam preguiçoso; o manual te dá clareza real."
        },
        {
            question: "Posso cancelar a assinatura?",
            answer: "Sim, cancele em 2 cliques a qualquer momento. Se fizer isso nos primeiros 30 dias, devolvemos 100% do seu dinheiro. Sem letras miúdas."
        },
        {
            question: "Serve para quem não entende de finanças?",
            answer: "Com certeza. O app foi feito para ser simples: entrou dinheiro? Clica no verde. Saiu dinheiro? Clica no vermelho. Os gráficos se montam sozinhos."
        }
    ];

    return (
        <section className="bg-slate-900 py-24 px-4" id="faq">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        Perguntas Frequentes
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Dúvidas?{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Nós respondemos
                        </span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Card
                            key={index}
                            className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                                    <span className={`text-emerald-400 text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                                        +
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <p className="mt-4 text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
