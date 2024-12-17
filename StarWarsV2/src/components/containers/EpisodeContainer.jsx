import { useEffect,useState } from "react"
import { fetchEpisode } from "../../api"
import { EpisodeList } from "../presentation/EpisodeList"

export const EpisodeContainer = () =>{
    const [episodes, setEpisodes] = useState([])
    useEffect (()=>{
        fetchEpisode().then((data)=>{
            setEpisodes(data)
        })
    },[])

    return (
        <EpisodeList episodes={episodes} />
    ) 
}