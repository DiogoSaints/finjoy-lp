import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section className="how-it-works" id="how">
            <div className="how-it-works-container">
                <div className="section-header">
                    <div className="section-label">Como funciona</div>
                    <h2 className="section-title">Comece em 3 passos simples</h2>
                    <p className="section-subtitle">
                        Transforme sua vida financeira em minutos. Nossa plataforma foi projetada para ser incrivelmente simples e poderosa.
                    </p>
                </div>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3 className="step-title">Crie sua conta</h3>
                        <p className="step-description">
                            Cadastre-se gratuitamente em 30 segundos. Não precisa de cartão de crédito para começar.
                        </p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3 className="step-title">Conecte suas contas</h3>
                        <p className="step-description">
                            Sincronize suas contas bancárias com segurança de nível bancário e criptografia ponta a ponta.
                        </p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3 className="step-title">Alcance seus objetivos</h3>
                        <p className="step-description">
                            Acompanhe metas, receba insights inteligentes e veja seu patrimônio crescer automaticamente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
