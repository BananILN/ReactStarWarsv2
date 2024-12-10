export const fetchEpisode = () => {
   return fetch('https://swapi.dev/api/films')
    .then((resposne) => resposne.json())
    .then((data)=>{
        return data.results;
    })
}

