import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burgerbuilder-36df4.firebaseio.com/",
});

export default instance;