
import axios from "axios";
// import { redirect } from "next/dist/server/api-utils";
import Swal from 'sweetalert2';
import redirect from 'next/navigation'

export const httpService = axios.create({
    baseURL: "http://localhost:8000/neuronplus/api"
});

export const swalMessage = (title: string, message: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question') => {
    Swal.fire({
        title: title,
        html: `<div class="diodfont-semibold text-sm">${message}</div>`,
        icon: icon
    });
}

export const getToken = async (mellicode:string,password:string) => {
    
    const token = await httpService.post(
        "/auth/login",
        {
            "mellicode": mellicode,
            "password": password
        }
    ).then((res) => {
        return res.data;
    }).catch((err)=>{
        return err;
    });

    return token;
}
