import axios from "axios";

//URL da API
//https://api.themoviedb.org/3/movie/550?api_key=1b23c66281853320747b15d6d16228fa
//Base da URL: https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api