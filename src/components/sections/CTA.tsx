import React from 'react';

const CTA: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="cta-section" id="cta">
            <div className="cta-container">
                <h2 className="cta-title">Pronto para transformar suas finanças?</h2>
                <p className="cta-description">
                    Junte-se a mais de 50.000 pessoas que já estão no controle de suas vidas financeiras.
                </p>
                <div className="cta-buttons">
                    <a href="#pricing" className="btn-white" onClick={(e) => handleNavClick(e, 'pricing')}>Começar Gratuitamente</a>
                    <a href="#how" className="btn-outline-white" onClick={(e) => handleNavClick(e, 'how')}>Ver Demonstração</a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
