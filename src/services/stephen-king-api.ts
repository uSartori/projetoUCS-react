import axios, { AxiosInstance } from 'axios';

class StephenAPI {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: "https://stephen-king-api.onrender.com/api/books",
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async getBooks() {
        const response = await this.api.get('/books');
        return response.data;
    }

    async getBookById(id: number) {
        const response = await this.api.get(`/book/${id}`);
        return response.data;
    }

    async getShorts() {
        const response = await this.api.get('/shorts');
        return response.data;
    }

    async getShortById(id: number) {
        const response = await this.api.get(`/short/${id}`);
        return response.data;
    }

    async getVillains() {
        const response = await this.api.get('/villains');
        return response.data;
    }

    async getVillainById(id: number) {
        const response = await this.api.get(`/villain/${id}`);
        return response.data;
    }
}

export default StephenAPI;

