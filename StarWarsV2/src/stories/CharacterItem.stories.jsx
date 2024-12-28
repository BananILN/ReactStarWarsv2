import { CharacterItem } from "../components/presentation/CharacterItem";

export default {
    title: "CharacterItem",
    component: CharacterItem,
};

export const Default ={
    args: {
        character:{
            status: "Alive",
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            species: "Human",
            gender: 'Male',
            location:{
                name: "Earth" ,
            }
        }
    }
}

export const Dead ={
    args: {
        character:{
            status: "Dead",
            name: "Rick Sanchez",
            image: "https://www.factroom.ru/wp-content/uploads/2015/04/Depositphotos_7439268_m.jpg",
            species: "Human",
            gender: 'Male',
            location:{
                name: "Earth" ,
            }
        }
    }
}