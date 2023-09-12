import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://aplus-server-e829eb76cb64.herokuapp.com/",
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