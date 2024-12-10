import React from 'react';

const ArrasCheckbox = ({ mensagem, arrastar }) => {
    return (
        <div ref={arrastar} style={{ margin: '10px' }}>
            <label>
                <input type="checkbox" />
                {mensagem}
            </label>
        </div>
    );
};

export default ArrasCheckbox;
