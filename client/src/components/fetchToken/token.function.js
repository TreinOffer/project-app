export async function RequestToken() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        };

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