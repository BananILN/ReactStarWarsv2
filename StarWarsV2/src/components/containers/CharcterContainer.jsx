import { useEffect } from "react";
import { fetchHero } from "../../api";
import { CharacterList } from "../presentation/CharacterList";

export const CharacterContainer =({ids}) =>{
    const [character, setChatacters] = useState([]);
    const [isLoading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        fetchHero(ids).then((data)=>{
            console.log(data);
            setChatacters(data);
            setLoading(false);   
        })
    },[ids])

    return <CharacterList character={character} isLoading={isLoading}/>
}