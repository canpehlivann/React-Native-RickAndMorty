//***API ENDPOINTS AND ALL API OPERATIONS***//

import axios from 'axios';

export const api = axios.create({
    baseURL:'https://rickandmortyapi.com/api'
})

//Gets all episodes with pagination.

export const getAllEpisodes = async (pageParam)=>
{
    const response = await api.get(`/episode?page=${pageParam}`)
    return response.data;
}

export const getEpisode = async (episodeNumber)=>
{
    const response = await api.get(`/episode/${episodeNumber}`);
    return response.data;
}

export const getAllCharacters = async ()=>
{
    const response = await api.get(`/character`);
    return response.data;
}

export const getCharacter = async (episodeCharacter)=>
{
    const response = await api.get(`/character/${episodeCharacter}`);
    return response.data;
}

export const getCharacterFromUrl = async (episodeCharacters)=>
{
    const response = await fetch(episodeCharacters)   
    const data = await response.json();
    return data;
    
}