class CrudUser {
    static get token () {
        return localStorage.getItem('token');
    };

    async create(colaborador) {
        console.log(colaborador);
        try {
            const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/colaboradores`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${CrudUser.token}`
                },
                body: colaborador
            });

            if (!resposta.ok) {
                throw new Error(`Response diferente de 200: ${await resposta.text()}`);
            };

            const json = resposta.json();
            return json;
            
        } catch (error) {
            console.log("erro na api: ", error);
        };
    };

    async read(unique) {
        try {
            const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/colaboradores?Unique=${unique}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CrudUser.token}`
                }
            });

            if (!resposta) {
                console.log("Erro ao buscar colaboradores");
            };

            return await resposta.json();

        } catch (error) {
            console.log("erro: ", error);
        }
    };

    async update(idColaborador, colaborador) {
        console.log(colaborador);
        try {
            console.log(idColaborador)
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/colaboradores/${idColaborador}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${CrudUser.token}`
                },
                body: colaborador
            });

            if (!response.ok) {
                throw new Error(`Response diferente de 200 ${ await response.text() }`);
            };
            
        } catch (error) {
            console.error('Erro na api put:', error);
        }
    };

    async delete(idColaborador) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/colaboradores/${idColaborador}/inativar`, {
                method: 'PUT',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${CrudUser.token}`
                }
            });

            if (!response.ok) {
                throw new Error(`Response diferente de 200 ${await response.text()}`);
            };

        } catch (error) {
            console.log(`Erro na api delete: ${error}`)
        }
    };
};

export default CrudUser;