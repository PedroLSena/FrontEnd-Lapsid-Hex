import axios from 'axios';


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    allowAbsoluteUrls: true,
    headers: {
        "Content-Type":"aplicattion/json",
        "Accept": "aplicattion/json"
    }
})

export {api};