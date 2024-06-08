import React, { useState, useEffect } from 'react';

const LockIcon = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(progress => (progress >= 100 ? 0 : progress + 10));
    }, 500); // Altere o intervalo conforme necessário

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100"
        height="100"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V8h10v12zm-5-9c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zm-1 3v-2h2v2h-2z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100"
        height="100"
        fill="#000000"
        style={{
          position: 'absolute',
          clipPath: `polygon(0 0, ${loadingProgress}% 0, ${loadingProgress}% 100%, 0 100%)`,
        }}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L5.11 10.4C3.69 8.98 3.69 6.51 5.11 5.1c1.42-1.42 3.89-1.42 5.31 0l1.58 1.58L12 8.06l-1.58-1.58 1.58-1.58c1.42-1.42 3.89-1.42 5.31 0 1.42 1.42 1.42 3.89 0 5.31L12 17.27zm0 4.36l-1.59-1.59h3.17L12 21.63z" />
      </svg>
    </div>
  );
};

export default LockIcon;
