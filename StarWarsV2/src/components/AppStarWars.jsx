import { useEffect, useState } from "react"
import { fetchEpisode, fetchHero } from "../api"
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
            const ids = episode.characters.map((character) =>{
                const id = character.split("/").pop();
                return id;
            });

            fetchHero(ids).then((data)=>{
                console.log(data);
                setCharacterEpisode({...characterEpisode, [episode.id] :data })
            })
        };

        const getStatusClasss = (status) =>{
            switch(status){
                case "Alive":
                    return "ch-alive";
                case "Dead":
                    return "ch-dead";
                default:
                    return "ch-unknown"
            }
        }


    
      
    return (
        <>
        {episode.map((episode)=>{
            return <div
             className="episode"
             key={episode.id}
             onClick={() => handleEpisodeClick(episode)}>

                <h2>Title:{episode.name}</h2>
                <div className="character-container">
                    {characterEpisode[episode.id]?.map((character) =>{
                        return (
                            <div key={character.id +":"+ episode.id} className={"character " + getStatusClasss(character.status)}
                            >
                                <div className="character-left">
                                    <img src={character.image} alt="" />
                                </div>
                                <div className="character-right">
                                    <h3>{character.name}</h3>
                                    <div>Пол: {character.gender} </div>
                                    <div>Bio: {character.species} </div>
                                    <div>Location: {character.location.name} </div>
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