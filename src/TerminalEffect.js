import React, { useEffect, useState } from 'react';

const TerminalEffect = ({ onComplete }) => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLines(prevLines => {
                const newLine = Array(80).fill(0).map(() => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join('');
                return [...prevLines, newLine].slice(-20);
            });
        }, 100);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            onComplete();
        }, 5000); // Exibir o efeito por 5 segundos

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onComplete]);

    return (
        <div style={{ backgroundColor: 'black', color: 'green', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', fontFamily: 'Courier New, Courier, monospace' }}>
            {lines.map((line, index) => (
                <div key={index} style={{ whiteSpace: 'pre' }}>{line}</div>
            ))}
        </div>
    );
};

export default TerminalEffect;
