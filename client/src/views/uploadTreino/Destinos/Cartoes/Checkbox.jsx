import React, { useState, useEffect } from 'react';
import './Checkbox.css';

const Checkbox = ({ index, mensagem, deletar, updateTexto, isEditing, setItens, modulos }) => {
    const [texto, setTexto] = useState(mensagem);
    const [checked, setChecked] = useState(false);  
    const [isEditingText, setIsEditingText] = useState(false); 

    useEffect(() => {
        setTexto(mensagem); 
    }, [mensagem]);

    function actionEdit() {
        if (setItens && typeof setItens[1] === 'function') {
            setItens[1](prevItens => {
                const itens = [...prevItens]; 

                if (itens[modulos]) {
                    itens[modulos] = itens[modulos].map((item, i) => {
                        if (i === index) {
                            return { 
                                ...item,  
                                isOpen: !item.isOpen, 
                                src: texto, 
                                checked: checked 
                            };
                        }
                        return item;
                    });
                }

                return itens;
            });
        } else {
            console.error("setItens não foi passado corretamente para o componente!");
        }
        setIsEditingText(false);
    }

    const onChange = (e) => {
        setTexto(e.target.value);
    };

    const handleCheckboxChange = () => {
        setChecked(prevChecked => !prevChecked);
    };

    return (
        <div id={`checkboxItem${index}`} className='novo-checkbox'>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    checked={checked} 
                    onChange={handleCheckboxChange}  
                    className="checkbox-input"
                />
                
                {isEditingText ? (
                    <textarea
                        className="textarea-edit"
                        autoCapitalize='on'
                        name="Texto"
                        id={`texto${index}`}
                        onChange={onChange}
                        value={texto} 
                    />
                ) : (
                    <p onClick={() => setIsEditingText(true)} className="texto-parag">
                        {texto}
                    </p>
                )}
            </div>

            <div className='actions-checkbox'>
                {isEditingText && (
                    <button onClick={actionEdit} className='button-ok' type="button">OK</button>
                )}
                <button onClick={() => deletar(index)} className='button-remove' type="button">Excluir</button>
            </div>
        </div>
    );
};

export default Checkbox;
