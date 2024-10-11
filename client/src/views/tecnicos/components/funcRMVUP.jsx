import React, { useState } from 'react';
import Tecnico from './Tecnico';

const Tecnicos = () => {
    const [tecnicos, setTecnicos] = useState([        
        { id: 1, tecFt: 'path/to/image1.jpg', tecNome: 'Técnico 1', tarefa: 'Tarefa A', numColab: 5, senha: '1234', matricula: '001' },
        { id: 2, tecFt: 'path/to/image2.jpg', tecNome: 'Técnico 2', tarefa: 'Tarefa B', numColab: 3, senha: '5678', matricula: '002' },        
    ]);

    const handleRemove = (id) => {
        setTecnicos(tecnicos.filter(tecnico => tecnico.id !== id));
    };

    const handleUpdate = (id, updatedData) => {
        setTecnicos(tecnicos.map(tecnico => 
            tecnico.id === id ? { ...tecnico, ...updatedData } : tecnico
        ));
    };

    return (
        <div>
            {tecnicos.map(tecnico => (
                <Tecnico 
                    key={tecnico.id}
                    idTecnico={tecnico.id}
                    tecFt={tecnico.tecFt}
                    tecNome={tecnico.tecNome}
                    tarefa={tecnico.tarefa}
                    numColab={tecnico.numColab}
                    senha={tecnico.senha}
                    matricula={tecnico.matricula}
                    onRemove={handleRemove}
                    onUpdate={handleUpdate}
                />
            ))}
        </div>
    );
};

export default Tecnicos;
