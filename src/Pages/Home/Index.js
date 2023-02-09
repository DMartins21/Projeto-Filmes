import { useEffect, useState } from "react"
import api from '../../Services/api'
//https://api.themoviedb.org/3/movie/550?api_key=1b23c66281853320747b15d6d16228fa

function Home(){
    const[filmes,setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing",
            {
                params:{
                    api_key: "1b23c66281853320747b15d6d16228fa",
                    language: "pt-BR",
                    page:1,
                }
            })
            console.log(response.data)
        }
        loadFilmes()
    },[])
    return(
        <div>
            <h1>Bem Vindo ao Home</h1>
        </div>
    )
}

export default Home