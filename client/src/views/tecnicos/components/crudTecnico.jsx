class CrudUser {

    async create(user) {
        const token = localStorage.getItem('token');
        console.log(token);
        try {
            const resposta = await fetch('http://localhost:5000/tecnicos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': `Bearer ${token}`
                },
                body: JSON.stringify(user)
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

    async read() {
        const token = localStorage.getItem('token');
        console.log(token);
        try {
            const resposta = await fetch('http://localhost:5000/tecnicos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': `Bearer ${token}`
                }
            });

            if (!resposta) {
                throw new Error("Erro ao buscar tecnicos");
            }
            console.log("diga algo: ",resposta);
            return await resposta.json();
        } catch (error) {
            console.log("erro: ", error);
        }
    };

    async update( idTecnico, user ) {
        try {
            console.log(idTecnico)
            const response = await fetch(`http://localhost:5000/tecnicos/${idTecnico}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error(`Response diferente de 200 ${ await response.text() }`);
            };

            const responseData = await response.json();
            console.log(responseData);
            
        } catch (error) {
            console.error('Erro na api put:', error);
        }
    };

    async delete( idTecnico ) {
        try {
            const response = await fetch(`http://localhost:5000/tecnicos/${idTecnico}`, {
                method: 'DELETE',
                headers:{
                    'Content-Type':'application/json'
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