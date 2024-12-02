export async function RequestToken() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        };

        const request = await fetch(`${process.env.REACT_APP_BACKEND}/treinos`, {
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