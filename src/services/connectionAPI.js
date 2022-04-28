const API = 'http://localhost:4000';

const header = {
  'Content-Type': 'application/json'
};

export const ConnectionAPI = {
    async userRegister(data) {
        const response = await fetch(`${API}/user`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        })
        const user = response.json()
        return user
    },
    async userLogin(data) {
        const response = await fetch(`${API}/user/login`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        })
        const user = response.json()
        return user
    }
}