import instance from '../request';

export default {
    async queryAll() {
        const result = await instance.get('/formwork/list');
        return result.data;
    },
    async queryInfo(params) {
        const result = await instance.get('/formwork/query', { params });
        return result.data;
    }
}
