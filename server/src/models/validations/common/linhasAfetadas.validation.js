export async function hasNotChanged(consulta){
    if (consulta.affectedRows < 1) {
        return true
    };
};

export const nadaMudou = [
    204, {
        message: `Nada foi alterado ou ID inexistente`,
        status: 204
    }
];