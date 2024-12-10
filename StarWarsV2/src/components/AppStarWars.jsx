import { useEffect, useState } from "react"
import { fecthEpisode,fetchHero } from "../api"
import './Star.css'


export default function AppStarWars(){

    const [episode,setEpisode] = useState([])

    useEffect(()=>{
        fecthEpisode().then((data)=> {
            console.log(data);
            
            setEpisode(data);
            
    }, [])
})

    const handleEpisodeClick = (episode) =>{
        const ids = episode.characters.map((character)=>{
            const id = character.split("/, ").pop();
            return id;
        })
        fetchHero(ids).then((data)=>{
            console.log(data);
            
        })
    }

    
    return (
        <>
        {episode.map((episode)=>{
            return <div
             className="episode"
             key={episode.episode_id}
             onClick={() => handleEpisodeClick(episode)}>

                <h2>Title:{episode.title}</h2>
            </div>
        })}
        </>
    )
}