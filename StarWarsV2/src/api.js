export const fetchEpisode = () => {
   return fetch('https://rickandmortyapi.com/api/episode')
    .then((resposne) => resposne.json())
    .then((data)=>{
        return data.results;
    })
}

export const fetchHero = async (ids) =>{
    await sleep(1000)
    return  fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`)
    .then((response) => response.json())
    
    };

    const sleep = (ms) =>{
        return new Promise((response) => setTimeout(response,ms))
    }

