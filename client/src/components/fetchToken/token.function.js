export async function RequestToken() {
    try {
        const token = sessionStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json'
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const request = await fetch(`${process.env.REACT_APP_BACKEND}/treinos`, {
            method: 'GET',
            headers,
            credentials: 'include',
        });

        const requestJson = await request.json();
        return requestJson;

    } catch (error) {
        throw new Error({ ErrorToken: error });
    };
};