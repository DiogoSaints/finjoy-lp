import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

const Comparacao: React.FC = () => {
    const comparisons = [
        {
            feature: "Controle total dos dados",
            finjoy: { status: "full", text: "Você decide tudo" },
            apps: { status: "partial", text: "Dados na nuvem" },
            planilhas: { status: "full", text: "Offline" }
        },
        {
            feature: "Personalização",
            finjoy: { status: "full", text: "100% customizável" },
            apps: { status: "partial", text: "Limitado" },
            planilhas: { status: "full", text: "Total" }
        },
        {
            feature: "Interface moderna",
            finjoy: { status: "full", text: "Linda e rápida" },
            apps: { status: "partial", text: "Confusa" },
            planilhas: { status: "none", text: "Sem interface" }
        },
        {
            feature: "Facilidade de uso",
            finjoy: { status: "full", text: "Muito simples" },
            apps: { status: "partial", text: "Complicado" },
            planilhas: { status: "none", text: "Muito difícil" }
        },
        {
            feature: "Tempo de setup",
            finjoy: { status: "full", text: "10 minutos" },
            apps: { status: "partial", text: "30+ minutos" },
            planilhas: { status: "none", text: "Horas" }
        },
        {
            feature: "Metas e categorias ilimitadas",
            finjoy: { status: "full", text: "Sem limites" },
            apps: { status: "partial", text: "Limitado" },
            planilhas: { status: "full", text: "Manual" }
        }
    ];

    const getIcon = (status: string) => {
        switch (status) {
            case "full":
                return <Check className="h-5 w-5 text-emerald-400" />;
            case "partial":
                return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
            case "none":
                return <X className="h-5 w-5 text-red-400" />;
            default:
                return null;
        }
    };

    return (
        <section className="bg-slate-950 py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                        FinJoy vs.{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            O resto do mercado
                        </span>
                    </h2>
                </div>

                {/* Mobile: Cards */}
                <div className="block lg:hidden space-y-6">
                    {comparisons.map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700">
                            <h3 className="text-lg font-bold text-white mb-4">{item.feature}</h3>

                            <div className="space-y-3">
                                {/* FinJoy */}
                                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                    <span className="text-sm font-semibold text-emerald-400">FinJoy</span>
                                    <div className="flex items-center gap-2">
                                        {getIcon(item.finjoy.status)}
                                        <span className="text-sm text-emerald-400">{item.finjoy.text}</span>
                                    </div>
                                </div>

                                {/* Apps */}
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                                    <span className="text-sm font-semibold text-slate-400">Apps</span>
                                    <div className="flex items-center gap-2">
                                        {getIcon(item.apps.status)}
                                        <span className="text-sm text-slate-400">{item.apps.text}</span>
                                    </div>
                                </div>

                                {/* Planilhas */}
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                                    <span className="text-sm font-semibold text-slate-400">Planilhas</span>
                                    <div className="flex items-center gap-2">
                                        {getIcon(item.planilhas.status)}
                                        <span className="text-sm text-slate-400">{item.planilhas.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Table */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-800">
                                <th className="text-left p-4 text-slate-400 font-semibold">Funcionalidade</th>
                                <th className="text-center p-4 text-emerald-400 font-bold">FinJoy</th>
                                <th className="text-center p-4 text-slate-400 font-semibold">Apps Tradicionais</th>
                                <th className="text-center p-4 text-slate-400 font-semibold">Planilhas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((item, index) => (
                                <tr key={index} className="border-b border-slate-800 hover:bg-slate-900/30 transition-colors">
                                    <td className="p-4 text-white font-medium">{item.feature}</td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-1">
                                            {getIcon(item.finjoy.status)}
                                            <span className="text-sm text-emerald-400">{item.finjoy.text}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-1">
                                            {getIcon(item.apps.status)}
                                            <span className="text-sm text-slate-400">{item.apps.text}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-1">
                                            {getIcon(item.planilhas.status)}
                                            <span className="text-sm text-slate-400">{item.planilhas.text}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Comparacao;
