import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '75d54bbefbac4e99af6a2bc6e88da81a'
    }
})