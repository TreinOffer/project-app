import React, { useState, useRef, useEffect } from 'react';
import imgs from "../../../imgs/arrayImagens";
import CoresRGB from "../../../components/coresRGB";
import CrudUser from './crudTecnico';
import './Tecnico.css';

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function Tecnico({ tecFt, tecNome, tarefa, numColab, senha, matricula, id, handleDelete, atualizaPag }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);

    const [editedNome, setEditedNome] = useState(tecNome);
    const [editedTarefa, setEditedTarefa] = useState(tarefa);
    const [editedSenha, setEditedSenha] = useState(senha);
    const [editedMatricula, setEditedMatricula] = useState(matricula);

    const handleEdit = async () => {
        await CRUD.update(id, {
            Matricula: editedMatricula,
            Imagem: tecFt,
            Nome: editedNome,
            Especializacao: editedTarefa,
            Colaboradores: numColab,
            Senha: editedSenha,
        });
        setIsEditing(false);
        atualizaPag();
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className="func">
            <div className='sec_func info_pessoal' style={{ width: `${g}%` }}>
                <img className='foto_func' src={tecFt} alt="" />
                <h3 className='nome_func letraQuebra'>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedNome}
                            onChange={(e) => setEditedNome(e.target.value)}
                            required
                            className="custom-input"
                        />
                    ) : (
                        tecNome
                    )}
                </h3>
            </div>

            <div className='sec_func' style={{ width: `${g}%` }}>
                <span id='nome_dep'>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedTarefa}
                            onChange={(e) => setEditedTarefa(e.target.value)}
                            required
                            className="custom-input"
                        />
                    ) : (
                        tarefa.split(",").map((tarf, index) => (
                            <span key={index} className='letraQuebra' style={{ display: "block" }}>
                                {tarf}
                            </span>
                        ))
                    )}
                </span>
            </div>

            <div className="sec_func" style={{ width: `${p}%`, justifyContent: 'center' }}>
                <span className='letraQuebra box_colab' style={{ cursor: "pointer", backgroundColor: CoresRGB() }}>
                    {numColab}
                </span>
            </div>

            <div className='sec_func' style={{ width: `${m}%` }}>
                {isEditing ? (
                    <input
                        type="password"
                        value={editedSenha}
                        onChange={(e) => setEditedSenha(e.target.value)}
                        required
                        className="custom-input"
                    />
                ) : (
                    <span className='letraQuebra'>{senha}</span>
                )}
            </div>

            <div className='sec_func' style={{ width: `${m}%`, display: 'flex', alignItems: 'center' }}>
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedMatricula}
                            onChange={(e) => setEditedMatricula(e.target.value)}
                            required
                            className="custom-input"
                            style={{ marginRight: '10px' }} 
                        />
                        <button onClick={handleEdit} className="custom-button">Salvar</button>
                    </>
                ) : (
                    <span className='letraQuebra'>{matricula}</span>
                )}
            </div>

            <div className='sec_func' style={{ width: `${p}%`, justifyContent: 'center' }} ref={dropdownRef}>
                <div className="dropdown" onClick={toggleDropdown}>
                    <img className='bot_opcoes' src={imgs.opcoes} alt="" />
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => setIsEditing(!isEditing)}>
                                {isEditing ? 'Cancelar' : 'Editar'}
                            </button>
                            <button className="dropdown-item" onClick={() => handleDelete(id)}>Remover</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Tecnico;