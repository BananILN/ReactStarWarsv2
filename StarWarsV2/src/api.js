export const fecthEpisode = () => {
   return fetch('https://swapi.dev/api/films')
    .then((resposne) => resposne.json())
    .then((data)=>{
        return data.results;
    })
}

export const fetchHero = (ids) =>{
    return fetch(`https://swapi.dev/api/people/${ids}/`)
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
}