import { useEffect, useState } from "react"
import { fetchEpisode } from "../api"
import './Star.css'


export default function AppStarWars(){

    const [episode,setEpisode] = useState([])
    const [characterEpisode, setCharacterEpisode] = useState({})

    useEffect(()=>{
        fetchEpisode().then((data)=> {
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
        setCharacterEpisode({...characterEpisode, [episode.episode_id] : hero})
    
    }    
    return (
        <>
        {episode.map((episode)=>{
            return <div
             className="episode"
             key={episode.episode_id}
             onClick={() => handleEpisodeClick(episode)}>

                <h2>Title:{episode.title}</h2>
                <div className="character-container">
                    {characterEpisode[episode.episode_id]?.map((character) =>{
                        return (
                            <div key={character.url + episode.episode_id} className="episode">
                                <div className="character-left">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1388px-Star_Wars_Logo.svg.png" alt="" />
                                </div>
                                <div className="character-right">
                                    <h3>{character.name}</h3>
                                    <div>Цвет волос: {character.hair_color} </div>
                                    <div>Цвет глаз : {character.eye_color} </div>
                                    <div>Рост: {character.height} </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        })}
        </>
    )
}