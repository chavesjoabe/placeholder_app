import axios from 'axios';

class ApiClient {
    request = axios.create({
        baseURL: 'https://fiap-back-end.herokuapp.com',
    });
    async createSession(user) {
        const response = await this.request.post('/session', user);

        const { data } = response;
        return data;
    }

    async createNewUser(user) {
        const response = await this.request.post('/users', user);

        const { data } = response;
        return data;
    }
}
export default new ApiClient();
