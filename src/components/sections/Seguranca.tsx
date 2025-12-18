import React from 'react';
import { Lock, Shield, Eye, MapPin, FileCheck } from 'lucide-react';

const Seguranca: React.FC = () => {
    const badges = [
        {
            icon: <Lock className="h-8 w-8" />,
            title: "Criptografia de nível bancário",
            description: "Mesma tecnologia que bancos usam"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Certificação PCI-DSS",
            description: "Padrão internacional de segurança"
        },
        {
            icon: <FileCheck className="h-8 w-8" />,
            title: "Autenticação de dois fatores",
            description: "Camada extra de proteção"
        },
        {
            icon: <Eye className="h-8 w-8" />,
            title: "Acesso somente leitura",
            description: "FinJoy nunca pode mover seu dinheiro"
        },
        {
            icon: <MapPin className="h-8 w-8" />,
            title: "Dados no Brasil (LGPD)",
            description: "100% em conformidade com a lei"
        }
    ];

    return (
        <section className="bg-slate-900 py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Seus dados estão{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            mais seguros que no banco
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all group text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                {badge.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{badge.title}</h3>
                            <p className="text-sm text-slate-400">{badge.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <p className="text-xl font-bold text-white">
                        Nunca tivemos um único incidente de segurança.{' '}
                        <span className="text-emerald-400">Seus dados são sagrados.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Seguranca;
