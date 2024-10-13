import React from 'react';

const ActionFunc = ({ action, handleUpdate, handleDelete, dropdown }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const dropdownRef = useRef(null);

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

    const handleUpdate = async () => {
        setIsEditing(!isEditing);
        setUser({
            Matricula: matricula,
            Imagem: tecFt,
            Nome: tecNome,
            Especializacao: tarefa,
            Colaboradores: numColab,
            Senha: senha
        });
        <NewFunc isNew={false} setUser={ setUser } user={ user } />
    }

    return (
        {isEditing ? }
        <>
            <div className="dropdown" onClick={toggleDropdown}>
                <img className='bot_opcoes' src={imgs.opcoes} alt="" />
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={() => handleUpdate()}>
                            {isEditing ? 'Cancelar' : 'Editar'}
                        </button>
                        <button className="dropdown-item" onClick={() => handleDelete()} >Remover</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default ActionFunc;
