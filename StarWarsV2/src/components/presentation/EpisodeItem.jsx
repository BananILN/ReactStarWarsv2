import { useState,useMemo } from "react"
import {CharactersContainer} from "../containers/CharcterContainer"

export const EpisodeItem =({episode}) =>{
    const [open,setOpen] = useState(false);

    const ids = useMemo(() => episode.characters.map((character) =>{
        const id = character.split("/").pop();
        return id;
    }),[episode?.characters]);
    
    return (
        <div className="episode" onClick={()=>setOpen(true)}>
            <h3>{episode.name}</h3>
            {opem && <CharactersContainer ids={ids}/>}
        </div>
    )
} 