import axios from "axios";

const Api = () => {
    return axios.get("https://picsum.photos/v2/list")
}

export default Api