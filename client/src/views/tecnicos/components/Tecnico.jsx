import React, { useState, useRef, useEffect } from 'react';
import imgs from "../../../imgs/arrayImagens";
import CoresRGB from "../../../components/coresRGB";
import '../../../views/tecnicos/components/Tecnico.css'; 

const g = 25;
const m = 15;
const p = 10;

function Tecnico({ tecFt, tecNome, tarefa, numColab, senha, matricula, idTecnico, onRemove, onUpdate }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState(tecNome);
    const [editedTarefa, setEditedTarefa] = useState(tarefa);
    const [editedSenha, setEditedSenha] = useState(senha);
    const [editedMatricula, setEditedMatricula] = useState(matricula);
    const dropdownRef = useRef(null);

    let arrayTarefa = [];
  
    if (tarefa.indexOf(",") !== -1) {
        arrayTarefa = tarefa.split(",");
    } else {
        arrayTarefa = [tarefa];
    }
  
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleRemove = async () => {
        try {
            const response = await fetch(`/api/tecnicos/${idTecnico}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const responseData = await response.json(); 

            if (response.ok) {
                onRemove(idTecnico);
                alert('Técnico removido com sucesso!');
            } else {
                console.error('Erro na remoção:', responseData); 
                alert(`Erro ao remover o técnico: ${responseData.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            console.error('Erro ao remover técnico:', error); 
            alert('Erro ao remover o técnico.');
        }
    };

    const handleEdit = async (event) => {
        event.preventDefault(); 
        try {
            const response = await fetch(`/api/tecnicos/${idTecnico}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    nome: editedNome, 
                    tarefa: editedTarefa, 
                    senha: editedSenha, 
                    matricula: editedMatricula,
                    numColab 
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                onUpdate(idTecnico, { 
                    nome: editedNome, 
                    tarefa: editedTarefa,
                    senha: editedSenha,
                    matricula: editedMatricula
                });
                alert('Técnico atualizado com sucesso!');
                setIsEditing(false);
            } else {
                console.error('Erro ao editar:', responseData); 
                alert(`Erro ao editar o técnico: ${responseData.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            console.error('Erro ao editar técnico:', error);
            alert('Erro ao editar o técnico.');
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
            <div className='sec_func info_pessoal' style={{ width: `${g}%` }}>
                <img className='foto_func' src={tecFt} alt="" />
                <h3 className='nome_func letraQuebra'>{isEditing ? (
                    <form onSubmit={handleEdit}>
                        <input 
                            type="text" 
                            value={editedNome} 
                            onChange={(e) => setEditedNome(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            value={editedTarefa} 
                            onChange={(e) => setEditedTarefa(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            value={editedSenha} 
                            onChange={(e) => setEditedSenha(e.target.value)} 
                            required 
                            placeholder="Senha" 
                        />
                        <input 
                            type="text" 
                            value={editedMatricula} 
                            onChange={(e) => setEditedMatricula(e.target.value)} 
                            required 
                            placeholder="Matrícula" 
                        />
                        <button type="submit">Salvar</button>
                    </form>
                ) : (
                    tecNome
                )}</h3>
            </div>

            <div className='sec_func' style={{ width: `${g}%` }}>
                <span id='nome_dep'>
                    {arrayTarefa.map((tarf, index) => (
                        <span key={index} className='letraQuebra' style={{ display: "block" }}>
                            {task}
                        </span>
                    ))}
                </span>
            </div>

            <div className="sec_func" style={{ width: `${p}%`, justifyContent: 'center' }}>
                <span className='letraQuebra box_colab' style={{ cursor: "pointer", backgroundColor: CoresRGB() }}>
                    {numColab}
                </span>
            </div>

            <div className='sec_func' style={{ width: `${m}%` }}>
                <span className='letraQuebra'>{senha}</span>
            </div>

            <div className='sec_func' style={{ width: `${m}%` }}>
                <span className='letraQuebra'>{matricula}</span>
            </div>

            <div className='sec_func' style={{ width: `${p}%`, justifyContent: 'center' }} ref={dropdownRef}>
                <div className="dropdown" onClick={toggleDropdown}>
                    <img className='bot_opcoes' src={imgs.opcoes} alt="" />
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => setIsEditing(!isEditing)}>
                                {isEditing ? 'Cancelar' : 'Editar'}
                            </button>
                            <button className="dropdown-item" onClick={handleRemove}>Remover</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Tecnico;