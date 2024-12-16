export const fetchEpisode = () => {
   return fetch('https://rickandmortyapi.com/api/episode')
    .then((resposne) => resposne.json())
    .then((data)=>{
        return data.results;
    })
}

export const fetchHero = (ids) =>{
    return  fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`)
    .then((response) => response.json())
    
    };


