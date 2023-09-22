const { VITE_End_Point, VITE_Kora_end_point, VITE_Event_Key } = import.meta.env;

import axios from "axios";


export const bookEvent = (data: any): any => {
    return axios.post(`${VITE_End_Point}/login`, data)
}

export const payKora = (data: any): any => {
    console.log(VITE_Event_Key,VITE_Kora_end_point)
    return axios.post(`${VITE_Kora_end_point}`, data,
        {
            headers: {
                'Authorization': `Bearer ${VITE_Event_Key}`,
            },
        }
    )
}

export const confirmOtp = (data: any): any => {
    console.log(VITE_Event_Key,VITE_Kora_end_point)
    return axios.post(`${VITE_Kora_end_point}/authorize`, data,
        {
            headers: {
                'Authorization': `Bearer ${VITE_Event_Key}`,
            },
        }
    )
}
