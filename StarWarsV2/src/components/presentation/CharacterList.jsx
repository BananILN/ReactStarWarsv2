import { CharacterItem } from "./CharacterItem";

export const CharacterList = ({characters, isLoading}) =>{
    if(isLoading){
        return <div className="loading"> Загрузка...</div>;
    }

    return (
        <div className="character-container">
            {characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
            ))}
        </div>
    )
};