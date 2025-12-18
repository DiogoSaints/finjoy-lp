import React from 'react';
import { motion } from 'framer-motion';

const AppShowcase: React.FC = () => {
    return (
        <section className="bg-slate-950 py-12 px-4 border-t border-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Controle Total
                        </span>{' '}
                        na Palma da Mão
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Uma interface premiada projetada para você entender suas finanças em segundos, não horas.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Large Item (Desktop + Mobile) - Spans 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 h-[220px] sm:h-[350px] md:h-[600px] w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src="/assets/app-desktop.png"
                            alt="FinJoy Desktop and Mobile Dashboard"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950/90 to-transparent">
                            <h3 className="text-lg sm:text-xl font-bold text-white">Dashboard Completo</h3>
                            <p className="text-xs sm:text-sm text-slate-300">Visão geral de todas as suas contas e cartões em um só lugar.</p>
                        </div>
                    </motion.div>

                    {/* Small Item 1 (Mobile Hand 1) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 h-[300px] sm:h-[500px] md:h-[292px] w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src="/assets/app-mobile-1.jpg"
                            alt="FinJoy Mobile Transactions"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950/90 to-transparent">
                            <h3 className="text-lg font-bold text-white">Lançamentos Rápidos</h3>
                            <p className="text-xs text-slate-300">Adicione gastos em menos de 3 segundos.</p>
                        </div>
                    </motion.div>

                    {/* Small Item 2 (Mobile Hand 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 h-[300px] sm:h-[500px] md:h-[292px] w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src="/assets/app-mobile-2.jpg"
                            alt="FinJoy Mobile Goals"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950/90 to-transparent">
                            <h3 className="text-lg font-bold text-white">Metas Inteligentes</h3>
                            <p className="text-xs text-slate-300">Acompanhe seu progresso visualmente.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
