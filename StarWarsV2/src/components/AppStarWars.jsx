import { useEffect, useState } from "react"
import { fetchEpisode } from "../api"
import './Star.css'


export default function AppStarWars(){

    const [episode,setEpisode] = useState([])
    const [characterEpisode, setCharacterEpisode] = useState({})

    useEffect(()=>{
        fetchEpisode().then((data)=> {
            // console.log(data);
            
            setEpisode(data);
            
    }, [])
})

    const handleEpisodeClick = (episode) =>{
        const hero = []
        episode.characters.forEach(element => {
            fetch(element)
            .then((response) => response.json())
            .then((data) => hero.push(data));
        });
        setCharacterEpisode({...characterEpisode, [episode.episode_id]: hero})
        
    }

    
    return (
        <>
        {episode.map((episode)=>{
            return <div
             className="episode"
             key={episode.episode_id}
             onClick={() => handleEpisodeClick(episode)}>

                <h2>Title:{episode.title}</h2>
                <div>
                    {characterEpisode[episode.episode_id]?.map((character) =>{
                        return (
                            <div key={character.url}>
                                {character.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        })}
        </>
    )
}