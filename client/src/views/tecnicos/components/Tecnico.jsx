import React, { useState, useRef, useEffect } from 'react';
import imgs from "../../../imgs/arrayImagens";
import CoresRGB from "../../../components/coresRGB";
import '../../../views/tecnicos/components/Tecnico.css'; 

const g = 25;
const m = 15;
const p = 10;

function Tecnico({ tecFt, tecNome, tarefa, numColab, senha, matricula }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    let arrayTarefa = [];
  
    // if (tarefa.indexOf(",") !== -1) {
    //     arrayTarefa = tarefa.split(",");
    // } else {
    //     arrayTarefa = [tarefa];
    // }
  
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
                <h3 className='nome_func letraQuebra'>{tecNome}</h3>
            </div>

            <div className='sec_func' style={{ width: `${g}%` }}>
                <span id='nome_dep'>
                    {tarefa}
                    {/* {arrayTarefa.map((tarf, index) => (
                        <span key={index} className='letraQuebra' style={{ display: "block" }}>
                            {tarf.trim()}
                        </span>
                    ))} */}
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
                            <button className="dropdown-item">Editar</button>
                            <button className="dropdown-item">Remover</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Tecnico;
