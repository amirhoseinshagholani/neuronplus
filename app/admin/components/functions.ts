
import axios from "axios";
import Swal from 'sweetalert2';

export const httpService = axios.create({
    baseURL: "http://localhost:3000/neuronplus/api"
});

export const swalMessage = (title: string, message: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question') => {
    Swal.fire({
        title: title,
        html: `<div class="diodfont-semibold text-sm">${message}</div>`,
        icon: icon
    });
}

export const getToken = async () => {
    const token = await httpService.post(
        "/auth/login",
        {
            "username": "info@neuronplus.ir",
            "password": "123456"
        }
    ).then((res) => {
        return res.data;
    }).catch((err)=>{
        return err;
    });

    return token;
}

