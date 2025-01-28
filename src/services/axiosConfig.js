import axios from "axios";

const instance = axios.create({
    baseURL: "http://dudamorais-prod.us-east-1.elasticbeanstalk.com",
    withCredentials: true
});

export default instance;
