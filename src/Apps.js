import React, { useState } from 'react';
import TerminalEffect from './TerminalEffect';
import LockIcon from './LockIcon';
import './styles.css';

const App = () => {
    const [showContent, setShowContent] = useState(false);

    return (
        <div>
            {showContent ? (
                <div>
                    <div className="intro">
                        <h1>Matheus Augusto</h1>
                        <p className="typing">Olá mundo, atuo com cibersegurança</p>
                        <button onClick={() => alert("Portfólio em desenvolvimento")}>Ver Portfólio</button>
                    </div>
                    <div id="react-container">
                        <LockIcon />
                    </div>
                </div>
            ) : (
                <TerminalEffect onComplete={() => setShowContent(true)} />
            )}
        </div>
    );
};

export default App;
