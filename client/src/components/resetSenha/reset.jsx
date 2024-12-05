import React, { useState } from 'react';
import './resetsenha.css';

const AlterarSenha = () => {
    const [novaSenha, setNovaSenha] = useState('');
    const [repitaSenha, setRepitaSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemClasse, setMensagemClasse] = useState('');

    const handleSalvar = () => {
        if (novaSenha === repitaSenha) {
            setMensagem('Senha alterada com sucesso!');
            setMensagemClasse('sucesso');
        } else {
            setMensagem('As senhas não coincidem!');
            setMensagemClasse('erro');
        }
    };

    const handleCancelar = () => {
        setNovaSenha('');
        setRepitaSenha('');
        setMensagem('');
        setMensagemClasse('');
    };

    return (
        <div className="box-reset">
            <div className="alterar-senha-container">
                <h3 className="titulo">Redefinir Senha</h3>

                <div className="campo">
                    <label className="label">Nova Senha:</label>
                    <input
                        className="input"
                        type="password"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label className="label">Repita a Senha:</label>
                    <input
                        className="input"
                        type="password"
                        value={repitaSenha}
                        onChange={(e) => setRepitaSenha(e.target.value)}
                    />
                </div>

                <div className="botoes">
                    <button className="botao salvar" onClick={handleSalvar}>Salvar</button>
                    <button className="botao cancelar" onClick={handleCancelar}>Cancelar</button>
                </div>

                {mensagem && <p className={`mensagem ${mensagemClasse}`}>{mensagem}</p>}
            </div>
        </div>
    );
};

export default AlterarSenha;