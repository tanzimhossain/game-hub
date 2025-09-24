import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "03fd8d6e58304eeb8e3658eebfbd480a"
    }
})
