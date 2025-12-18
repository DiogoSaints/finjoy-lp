import React from 'react';

const BackgroundFeatures: React.FC = () => {
    return (
        <>
            {/* BACKGROUND */}
            <div className="mesh-bg">
                <div className="mesh-gradient"></div>
            </div>
            {/* <div className="grid-pattern"></div> Removed to avoid conflict with Hero Grid */}
            <div className="particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>
        </>
    );
};

export default BackgroundFeatures;
