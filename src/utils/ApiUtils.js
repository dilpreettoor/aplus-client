import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8083/",
    headers: {
        "Content-Type": "application/json"
    }
});

export const getProductList = () => {
    return axiosInstance.get('/products/')
}

const ApiUtils = {
    getProductList
}


export default ApiUtils;