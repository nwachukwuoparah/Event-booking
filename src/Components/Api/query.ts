// const { VITE_endpoint } = import.meta.env;
import axios from "axios";


 const generate = async (data: any) => {
    return await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`)
}