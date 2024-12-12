import React, { useState, useRef, useEffect } from 'react';
import '../../tecnicos/components/Tecnico.css';
import imgs from "../../../imgs/arrayImagens";
import CrudUser from './crudColaborador';

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function Colaborador({ colabFt, colabNome, tecnico, senha, matricula, disabled, handleDelete, atualizaPag, transForm, tecnicos }) {
    console.log(tecnicos);
    const [isEditing, setIsEditing] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [editedResponsavelNome, setEditedResponsavelNome] = useState(null);
    const [editedResponsavel, setEditedResponsavel] = useState(tecnico);
    const [editedResponsavelFoto, setEditedResponsavelFoto] = useState(null);
    const [editedNome, setEditedNome] = useState(colabNome);
    const [editedSenha, setEditedSenha] = useState(senha);
    const [editedMatricula, setEditedMatricula] = useState(matricula);
    const [editedImage, setEditedImage] = useState(colabFt);

    const [showPopUp, setShowPopUp] = useState(false);
    const [divDisabled, setDivDisabled] = useState(null);

    const dropdownRef = useRef(null);
    const isDisabled = disabled === 1 ? true : false;

    const handleEdit = async () => {
        const form = await transForm({
            Matricula: editedMatricula,
            Imagem: editedImage,
            Nome: editedNome,
            idTecnico: editedResponsavel,
            Senha: editedSenha
        });
        await CRUD.update(matricula, form);
        setIsEditing(false);
        setDropdownOpen(false);
        atualizaPag();
    };

    const handleCancel = () => {
        setIsEditing(false);
        setDropdownOpen(false);
        setEditedResponsavelNome(getTecName(tecnico)); // restauracao tecnico selecionado anteriormente
        setEditedImage(colabFt);  
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
        }
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const confirmar = () => setShowPopUp(true);
    const handleNao = () => setShowPopUp(false);
    const handleSim = () => handleDelete(matricula);

    

    function getTecName(id) {
        const tecnico = tecnicos?.find(tecnico => tecnico.Matricula === id);
        return [tecnico?.Nome, tecnico?.Imagem];
    }

    useEffect(() => {
        setEditedResponsavelNome(getTecName(tecnico)[0]);
        setEditedResponsavelFoto(getTecName(tecnico)[1]);
    }, [tecnico]);

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
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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
                    <div className="sec_func info_pessoal" style={{ opacity: isDisabled ? `0.3` : `1`, width: `${g}%`, display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <div style={{ position: 'relative' }}>
                            <img className="foto_func" src={imagem ? imagem : `${process.env.REACT_APP_BACKEND}/imgs/${editedImage}`} alt="" />
                            {isEditing && (
                                <div className="botao_div">
                                    <input onChange={handleUploadImagem} accept=".jpg,.png,.jpeg" type="file" name="Imagem" id="foto" style={{ display: 'none' }} />
                                    <label id="forFoto" htmlFor="foto" className="label-foto escolher-imagem">Escolher imagem</label>
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
                            <h3 className="nome_colab letraQuebra" style={{ marginLeft: '10px' }}>{colabNome}</h3>
                        )}
                    </div>

                    <div className={`sec_func ${isDisabled ? 'sec_func-disabled' : ''}`} style={{ width: `${g}%`, position: 'relative' }}>
                        {isEditing ? (
                            <div style={{ position: 'relative' }}>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(!isEditing)}
                                    style={{
                                        padding: '8px 16px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                        fontSize: '16px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease',
                                        width: '100%',
                                    }}
                                >
                                    {editedResponsavelNome || 'Selecione'}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        style={{
                                            marginLeft: '8px',
                                            transition: 'transform 0.3s ease',
                                            transform: isEditing ? 'rotate(180deg)' : 'rotate(0deg)',
                                        }}
                                    >
                                        <path d="M7 10l5 5 5-5z" />
                                    </svg>
                                </button>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: '0',
                                        width: '100%',
                                        backgroundColor: 'white',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                        maxHeight: '200px',
                                        overflowY: 'auto',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        zIndex: '10',
                                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                                        opacity: isEditing ? 1 : 0,
                                        transform: isEditing ? 'scaleY(1)' : 'scaleY(0)',
                                        transformOrigin: 'top',
                                    }}
                                >
                                    {tecnicos.length > 0 ? (
                                        tecnicos.map((tecnico) => (
                                            <div
                                                key={tecnico.Matricula}
                                                style={{
                                                    padding: '8px 16px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    transition: 'background-color 0.3s ease',
                                                }}
                                                onClick={() => {
                                                    setEditedResponsavel(tecnico.Matricula);
                                                    setEditedResponsavelNome(tecnico.Nome); 
                                                }}
                                            >
                                                <img
                                                    src={`${process.env.REACT_APP_BACKEND}/imgs/${tecnico.Imagem}`}
                                                    alt=""
                                                    style={{
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <span>{tecnico.Nome}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div style={{ padding: '8px 16px', color: '#aaa', cursor: 'not-allowed' }}>
                                            Nenhum responsável disponível
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <span className="letraQuebra" style={{ opacity: isDisabled ? '0.3' : '1',textAlign: '' }}>
                                <img style={{ width: '32px', borderRadius: '25px' }} src={`${process.env.REACT_APP_BACKEND}/imgs/${editedResponsavelFoto}`}/>
                                {editedResponsavelNome}
                            </span>
                        )
                        }
                    </div>

                    <div className="sec_func" style={{ opacity: isDisabled ? '0.3' : '1', width: `${m}%` }}>
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
                            <span className="letraQuebra">{senha}</span>
                        )}
                    </div>

                    <div className="sec_func" style={{ opacity: isDisabled ? '0.3' : '1', width: `${g}%`, display: 'flex', alignItems: 'center' }}>
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
                            <span className="letraQuebra">{matricula}</span>
                        )}
                    </div>

                    <div className="sec_func" style={{ opacity: isDisabled ? '0.3' : '1', width: `${p}%`, justifyContent: 'center' }} ref={dropdownRef}>
                        <div className="dropdown" onClick={!isDisabled ? toggleDropdown : null}>
                            <img className="bot_opcoes" src={imgs.opcoes} alt="" />
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    {isEditing ? (
                                        <>
                                            <button type="button" className="dropdown-item" onClick={handleEdit}>
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

export default Colaborador;