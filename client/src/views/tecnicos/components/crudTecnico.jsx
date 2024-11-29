class CrudUser {
    static get token () {
        return localStorage.getItem('token');
    };

    async create(user) {
        console.log(user);
        try {
            const resposta = await fetch('http://localhost:5000/tecnicos', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${CrudUser.token}`
                },
                body: user
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
        // const url = unique.trim() === '' ?
        try {
            const resposta = await fetch(
                `http://localhost:5000/tecnicos?Unique=${unique}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CrudUser.token}`
                }
            });

            if (!resposta) {
                console.log("Erro ao buscar tecnicos");
            };

            return await resposta.json();

        } catch (error) {
            console.log("erro: ", error);
        }
    };

    async update( idTecnico, user ) {
        console.log(user);
        try {
            console.log(idTecnico)
            const response = await fetch(`http://localhost:5000/tecnicos/${idTecnico}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${CrudUser.token}`
                },
                body: user
            });

            if (!response.ok) {
                throw new Error(`Response diferente de 200 ${ await response.text() }`);
            };
            
        } catch (error) {
            console.error('Erro na api put:', error);
        }
    };

    async delete( idTecnico ) {
        try {
            const response = await fetch(`http://localhost:5000/tecnicos/${idTecnico}/inativar`, {
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