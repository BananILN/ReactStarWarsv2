export const CharacterItem = ({ character })=>{
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

    return(
        <div className={"character " + getStatusClasss(character.status)}
        >
            <div className="character-left">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="character-right">
                <h3>{character.name}</h3>
                <div>Пол: {character.gender} </div>
                <div>Bio: {character.species} </div>
                <div>Location: {character.location.name} </div>
            </div>
        </div>
    )
}