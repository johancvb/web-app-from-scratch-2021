import { fetchAllTeamsFromApi } from './../api/apiHandler.js';

export async function fetchAllTeams() {
    const fetchedTeams = await fetchAllTeamsFromApi();
    
    return fetchedTeams;
}