import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'http://192.168.0.151:5000',
    headers: {
        'Content-Type': 'application/json'
    },
})

export default ApiInstance