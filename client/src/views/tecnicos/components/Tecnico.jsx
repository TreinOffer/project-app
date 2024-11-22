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
    const [editedImage, setEditedImage] = useState(tecFt);

    const handleEdit = async () => {
        await CRUD.update(id, {
            Matricula: editedMatricula,
            Imagem: editedImage,
            Nome: editedNome,
            Especializacao: editedTarefa,
            Colaboradores: numColab,
            Senha: editedSenha,
        });
        setIsEditing(false);
        atualizaPag();
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setDropdownOpen(false);
        setEditedImage(tecFt);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
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
            <div className='sec_func info_pessoal' style={{ width: `${g}%`, display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                    <img className='foto_func' src={editedImage} alt=""/>
                    {isEditing && (
                        <div className="botao_div">
                            <input                                
                                onChange={handleImageChange}
                                accept='.jpg,.png,.jpeg'
                                type="file"
                                name="foto"
                                id="foto"
                                style={{ display: 'none' }}
                            />
                            <label id='forFoto' htmlFor="foto" className="label-foto escolher-imagem">
                                Escolher imagem
                            </label>
                        </div>
                    )}
                </div>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedNome}
                        onChange={(e) => setEditedNome(e.target.value)}
                        required
                        className="custom-input"
                        style={{ marginLeft: '10px', flex: 1 }}
                    />
                ) : (
                    <h3 className='nome_func letraQuebra' style={{ marginLeft: '10px' }}>{tecNome}</h3>
                )}
            </div>

            <div className='sec_func' style={{ width: `${g}%`, display: 'flex', alignItems: 'center' }}>
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
            </div>

            {/* <div className="sec_func" style={{ width: `${p}%`, justifyContent: 'center' }}>
                <span className='letraQuebra box_colab' style={{ cursor: "pointer", backgroundColor: 'hsl(200,15%,70%)' }}>
                    {numColab}
                </span>
            </div> */}

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

            <div className='sec_func' style={{ width: `${g}%`, display: 'flex', alignItems: 'center' }}>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedMatricula}
                        onChange={(e) => setEditedMatricula(e.target.value)}
                        required
                        className="custom-input"
                        style={{ marginRight: '10px' }}
                    />
                ) : (
                    <span className='letraQuebra'>{matricula}</span>
                )}
            </div>

            <div className='sec_func' style={{ width: `${p}%`, justifyContent: 'center' }} ref={dropdownRef}>
                <div className="dropdown" onClick={toggleDropdown}>
                    <img className='bot_opcoes' src={imgs.opcoes} alt="" />
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            {isEditing ? (
                                <>
                                    <button className="dropdown-item" onClick={handleEdit}>
                                        Salvar
                                    </button>
                                    <button className="dropdown-item" onClick={handleCancel}>
                                        Cancelar
                                    </button>
                                </>
                            ) : (
                                <button className="dropdown-item" onClick={() => setIsEditing(true)}>
                                    Editar
                                </button>
                            )}
                            <button className="dropdown-item" onClick={() => handleDelete(id)}>Remover</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Tecnico;