import axios from 'axios';

export default function updateRestaurent({restaurentSlug, data}){
    return axios.patch(`/api/restaurante/${restaurentSlug}`, {data})
}