import axios, { AxiosPromise } from 'axios';
import { RoutesOutPut } from '../RoutesOutPut';


export default function createRestaurent({data}): AxiosPromise<RoutesOutPut['Restaurante']>{
    return axios.post('/api/restaurante', {data})
}