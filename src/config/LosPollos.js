import axios from "axios";
import config from "./config"
const LosPollos=axios.create({
    baseURL:config.base_url
})

export default LosPollos
