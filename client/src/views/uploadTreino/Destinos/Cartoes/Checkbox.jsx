import React, { useState, useEffect } from 'react';
import './Checkbox.css';

const NovoCheckbox = ({ index, mensagem, deletar, updateTexto, isEditing, setItens, modulos }) => {
    const [texto, setTexto] = useState(mensagem);  
    const [checked, setChecked] = useState(false);  

    useEffect(() => {
        setTexto(mensagem); 
    }, [mensagem]);

    const toggleEdit = () => {

        if (typeof updateTexto === 'function') {
            updateTexto(index, texto);  
        }

        if (setItens && typeof setItens[1] === 'function') {
            setItens[1](prevItens => {
                const itens = [...prevItens];
                if (itens[modulos]) {
                    itens[modulos] = itens[modulos].map((item, i) =>
                        i === index ? { ...item, src: texto, checked, isOpen: false } : item 
                    );
                }
                return itens;
            });
        } else {
            console.error("setItens não foi passado corretamente para o componente!");
        }
    };

    const onChange = (e) => {
        setTexto(e.target.value); 
    };

    const handleCheckboxChange = () => {
        setChecked(!checked);  
    };

    return (
        <div id={`checkboxItem${index}`} className='novo-checkbox'>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                className="checkbox-input"
            />
            
            {isEditing ? (
                <p onClick={() => setItens && setItens[1](prevItens => {
                    const itens = [...prevItens];
                    if (itens[modulos]) {
                        itens[modulos] = itens[modulos].map((item, i) =>
                            i === index ? { ...item, isOpen: !item.isOpen } : item
                        );
                    }
                    return itens;
                })} className="texto-parag">
                    {texto}
                </p>
            ) : (
                <>
                    <textarea
                        className="textarea-edit"
                        autoCapitalize='on'
                        name="Texto"
                        id={`texto${index}`}
                        onChange={onChange}
                        value={texto} 
                    />
                    <div className='actions-checkbox'>
                        <button onClick={toggleEdit} className='button-ok' type="button">OK</button>
                        <button onClick={() => deletar(index)} className='button-remove' type="button">Excluir</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default NovoCheckbox;
