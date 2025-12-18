import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { AnimatedBackground } from '../ui/animated-background';
import { TrendingUp, PiggyBank, Wallet, CreditCard, DollarSign, Target } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 pb-16 px-4 overflow-hidden" id="top">
            {/* Animated Background */}
            <AnimatedBackground />

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {/* Top Left */}
                <div className="absolute top-1/4 left-[10%] animate-float opacity-20">
                    <TrendingUp className="h-16 w-16 text-emerald-400" />
                </div>

                {/* Top Right */}
                <div className="absolute top-1/3 right-[15%] animate-float-delayed opacity-20">
                    <PiggyBank className="h-20 w-20 text-teal-400" />
                </div>

                {/* Middle Left */}
                <div className="absolute top-1/2 left-[5%] animate-float-slow opacity-15">
                    <Wallet className="h-12 w-12 text-emerald-500" />
                </div>

                {/* Middle Right */}
                <div className="absolute top-[45%] right-[8%] animate-float opacity-25">
                    <CreditCard className="h-14 w-14 text-teal-300" />
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-1/4 left-[12%] animate-float-delayed opacity-20">
                    <DollarSign className="h-16 w-16 text-emerald-400" />
                </div>

                {/* Bottom Right */}
                <div className="absolute bottom-1/3 right-[10%] animate-float-slow opacity-15">
                    <Target className="h-18 w-18 text-teal-400" />
                </div>

                {/* Floating Numbers */}
                <div className="absolute top-[20%] right-[25%] animate-float opacity-10">
                    <span className="text-6xl font-black text-emerald-400">R$</span>
                </div>

                <div className="absolute bottom-[25%] left-[20%] animate-float-delayed opacity-10">
                    <span className="text-7xl font-black text-teal-400">%</span>
                </div>

                <div className="absolute top-[60%] left-[8%] animate-float-slow opacity-10">
                    <span className="text-5xl font-black text-emerald-300">+</span>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Mais de 50.000 usuários felizes
                    </Badge>

                    {/* Headline */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight px-2 sm:px-4 break-words hyphens-auto">
                        E se gerenciar dinheiro fosse{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent inline-block">
                            tão fácil quanto gastar?
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                        Chega de planilhas confusas e apps que mais parecem trabalho. FinJoy é diferente: você vê pra onde seu dinheiro está indo, cria metas reais e (finalmente) para de chegar zerado no fim do mês.
                    </p>

                    {/* CTA */}
                    <div className="w-full px-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 h-14 px-8 text-base sm:text-lg font-bold"
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Garantir Acesso →
                        </Button>
                    </div>

                    {/* Social Proof Bar */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center pt-8 border-t border-slate-800/50 px-4">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-black text-emerald-400">50k+</div>
                            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">usuários confiam</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-black text-emerald-400">4.9/5</div>
                            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">estrelas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-black text-emerald-400">R$ 50mi+</div>
                            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">economizados</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
