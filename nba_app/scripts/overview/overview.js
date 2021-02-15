import { fetchAllTeams } from './overviewController.js';

export async function renderTeamsOverview() {
    const unmappedFetchedTeams = await fetchAllTeams();
    const fetchedTeams = unmappedFetchedTeams.data;
    let teamsOverviewElement = document.getElementsByClassName('container')[0];

    for (let index = 0; index < fetchedTeams.length; index++) {        
        teamsOverviewElement.insertAdjacentHTML('beforeend',`
        <a href="#team/${fetchedTeams[index].id}">
            <img src="./nba_app/img/${fetchedTeams[index].id}.png" alt=""><h1>${fetchedTeams[index].full_name}</h1>
        </a>`);
    }
}