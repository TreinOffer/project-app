import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';  
import './resetsenha.css';

const AlterarSenha = ({ onSave, onCancel }) => { 
    const [antigaSenha, setAntigaSenha] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [repitaSenha, setRepitaSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemClasse, setMensagemClasse] = useState('');
    const [isOpen, setIsOpen] = useState(true);  
    const [mostrarAntigaSenha, setMostrarAntigaSenha] = useState(false); 
    const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
    const [mostrarRepitaSenha, setMostrarRepitaSenha] = useState(false); 

    const handleSalvar = () => {
        if (novaSenha === repitaSenha) {
            setMensagem('Senha alterada com sucesso!');
            setMensagemClasse('sucesso');

            onSave();  
        } else {
            setMensagem('As senhas não coincidem!');
            setMensagemClasse('erro');
        }
    };

    const handleCancelar = () => {
        setIsOpen(false);  
        setAntigaSenha('');
        setNovaSenha('');
        setRepitaSenha('');
        setMensagem('');
        setMensagemClasse('');

        onCancel(); 
    };

    return (
        isOpen && (  
            <div className="box-reset">
                <div className="alterar-senha-container">
                    <h3 className="titulo">Redefinir Senha</h3>
                    <h1 className="aviso-primeiro-login">
                        Este é o seu primeiro login. Por favor, defina uma nova senha para continuar.
                    </h1>

                    <div className="campo">
                        <label className="label">Antiga Senha:</label>
                        <div className="senha-container">
                            <input
                                className="input"
                                type={mostrarAntigaSenha ? 'text' : 'password'}
                                value={antigaSenha}
                                onChange={(e) => setAntigaSenha(e.target.value)}
                                placeholder="Digite sua antiga senha"
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setMostrarAntigaSenha(!mostrarAntigaSenha)}
                            >
                                <FontAwesomeIcon icon={mostrarAntigaSenha ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>

                    <div className="campo">
                        <label className="label">Nova Senha:</label>
                        <div className="senha-container">
                            <input
                                className="input"
                                type={mostrarNovaSenha ? 'text' : 'password'}
                                value={novaSenha}
                                onChange={(e) => setNovaSenha(e.target.value)}
                                placeholder="Digite a nova senha"
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)}
                            >
                                <FontAwesomeIcon icon={mostrarNovaSenha ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>

                    <div className="campo">
                        <label className="label">Repita a Senha:</label>
                        <div className="senha-container">
                            <input
                                className="input"
                                type={mostrarRepitaSenha ? 'text' : 'password'}
                                value={repitaSenha}
                                onChange={(e) => setRepitaSenha(e.target.value)}
                                placeholder="Repita a nova senha"
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setMostrarRepitaSenha(!mostrarRepitaSenha)}
                            >
                                <FontAwesomeIcon icon={mostrarRepitaSenha ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>

                    <div className="botoes">
                        <button className="botao salvar" onClick={handleSalvar}>Salvar</button>
                        <button className="botao cancelar" onClick={handleCancelar}>Cancelar</button>
                    </div>

                    {mensagem && <p className={`mensagem ${mensagemClasse}`}>{mensagem}</p>}
                </div>
            </div>
        )
    );
};

export default AlterarSenha;