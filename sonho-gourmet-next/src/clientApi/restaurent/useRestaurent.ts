import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useRestaurent({restaurentSlug}){
    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`/api/restaurente/${restaurentSlug}`)
        .then(({data}) => {
            setData(data);
        })
        .catch((err) => {

        })
    })
    return data;
}