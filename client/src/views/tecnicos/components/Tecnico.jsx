import React, { useState, useRef, useEffect } from 'react';
import imgs from "../../../imgs/arrayImagens";
import CrudUser from './crudTecnico';
import './Tecnico.css';

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function Tecnico({ tecFt, tecNome, tarefa, numColab, senha, matricula, disabled, handleDelete, atualizaPag, transForm }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState(tecNome);
    const [editedTarefa, setEditedTarefa] = useState(tarefa);
    const [editedSenha, setEditedSenha] = useState(senha);
    const [editedMatricula, setEditedMatricula] = useState(matricula);
    const [editedImage, setEditedImage] = useState(tecFt);
    const [showPopUp, setShowPopUp] = useState(false);
    const [divDisabled, setDivDisabled] = useState(null);

    const handleEdit = async () => {
        const form = await transForm({
            Matricula: editedMatricula,
            Imagem: editedImage,
            Nome: editedNome,
            Especializacao: editedTarefa,
            // Colaboradores: numColab,
            Senha: editedSenha
        });
        await CRUD.update(matricula, form);
        setIsEditing(false);
        setDropdownOpen(false);
        atualizaPag();
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const confirmar = () => {
        setShowPopUp(true);
    };

    const handleNao = () => {
        setShowPopUp(false);
    };

    const handleSim = () => {
        handleDelete(matricula);
        setShowPopUp(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setDropdownOpen(false);
        setEditedImage(tecFt);
    };

    let imagem = null;

    const handleUploadImagem = (e) => {
        const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    imagem = reader.result;
                    document.getElementsByClassName("foto_func")[0].src = reader.result;
                    setEditedImage(file);
                };
                reader.readAsDataURL(file);
            };
      };

    const isDisabled = disabled === 1 ? true : false;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        if (isDisabled) {
            setDivDisabled(
                <div className='desabilitado'>
                    <h1 style={{ fontSize: '2em', color: 'red' }}>DESABILITADO</h1>
                </div>
            );
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {showPopUp && (
                <div className="box-confir">
                    <div className="confir-container">
                        <img className="logo" src={imgs.TreinOfferblack} alt="TreinOffer" />
                        <div className="popup-body">
                            <h2>Deseja continuar?</h2>
                        </div>
                        <div className="popup-buttons">
                            <button onClick={handleSim} className="btn-sim">Sim</button>
                            <button onClick={handleNao} className="btn-nao">Não</button>
                        </div>
                    </div>
                </div>
            )}
            <form encType="multipart/form-data">

                <section className="func" style={{ position: 'relative' }}>
                    {true && divDisabled}
                    <div className='sec_func info_pessoal' style={{ opacity: isDisabled ? `0.3` : `1`, width: `${g}%`, display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <div style={{ position: 'relative' }}>
                            <img className='foto_func' src={imagem ? imagem :
                            `${process.env.REACT_APP_BACKEND}/imgs/${editedImage}`} alt="" />
                            {isEditing && (
                                <div className="botao_div">
                                    <input
                                        onChange={handleUploadImagem}
                                        accept='.jpg,.png,.jpeg'
                                        type="file"
                                        name="Imagem"
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

                    <div className='sec_func' style={{
                        opacity: isDisabled ? `0.3` : `1`,
                        width: `${g}%`, display: 'flex', alignItems: 'center'
                    }}>
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

                    <div className='sec_func' style={{ opacity: isDisabled ? `0.3` : `1`, width: `${m}%` }}>
                        {isEditing ? (
                            <input
                                type="password"
                                value={editedSenha}
                                onChange={(e) => setEditedSenha(e.target.value)}
                                required
                                className="custom-input"
                                disabled
                            />
                        ) : (
                            <span className='letraQuebra'>{senha}</span>
                        )}
                    </div>

                    <div className='sec_func' style={{
                        opacity: isDisabled ? `0.3` : `1`,
                        width: `${g}%`, display: 'flex', alignItems: 'center'
                    }}>
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedMatricula}
                                onChange={(e) => setEditedMatricula(e.target.value)}
                                required
                                className="custom-input"
                                style={{ marginRight: '10px' }}
                                disabled
                            />
                        ) : (
                            <span className='letraQuebra'>{matricula}</span>
                        )}
                    </div>

                    <div className='sec_func' style={{
                        opacity: isDisabled ? `0.3` : `1`,
                        width: `${p}%`, justifyContent: 'center'
                    }} ref={dropdownRef}>
                        <div className="dropdown" onClick={!isDisabled ? toggleDropdown : null}>
                            <img className='bot_opcoes' src={imgs.opcoes} alt="" />
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    {isEditing ? (
                                        <>
                                            <button type='submit' className="dropdown-item" onClick={handleEdit}>
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
                                    <button className="dropdown-item" onClick={confirmar}>Inativar</button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}

export default Tecnico;
