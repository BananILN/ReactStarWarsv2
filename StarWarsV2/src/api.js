export const fetchEpisode = () => {
   return fetch('https://swapi-api.hbtn.io/api/films')
    .then((resposne) => resposne.json())
    .then((data)=>{
        return data.results;
    })
}

