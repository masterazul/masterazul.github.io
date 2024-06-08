import React from 'react';

const LockIcon = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100"
                height="100"
                fill="#000000"
            >
                <path d="M12 2C9.243 2 7 4.243 7 7v5H6a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-9a1 1 0 00-1-1h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v5H9V7c0-1.654 1.346-3 3-3zm1 9v2h-2v-2h2z"/>
            </svg>
        </div>
    );
};

export default LockIcon;
