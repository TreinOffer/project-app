
export async function RequestToken() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error({ Token: `Token inexistente` });
        };
        //   console.log("oi: ",token);
        const request = await fetch(`http://localhost:5000/treinos`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
          const requestJson = await request.json();
          return requestJson;

    } catch (error) {
        throw new Error({ ErrorToken: error });
    };
};