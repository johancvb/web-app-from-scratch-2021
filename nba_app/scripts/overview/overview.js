import { fetchAllTeams } from './overviewController.js';

export async function renderTeamsOverview() {
    const unmappedFetchedTeams = await fetchAllTeams();
    const loader = document.querySelector(".loader");
    const app = document.querySelector('.app')
    const fetchedTeams = unmappedFetchedTeams.data;

    app.insertAdjacentHTML('afterbegin',
        `
    <h1 id=#open_h1>Choose a NBA team</h1>
	<div class="container"></div>
	`)

    let teamsOverviewElement = document.getElementsByClassName('container')[0];

    console.log(fetchedTeams)


    for (let index = 0; index < fetchedTeams.length; index++) {
        teamsOverviewElement.insertAdjacentHTML('beforeend',
            `
        <a href="#team/${fetchedTeams[index].id}">
            <img src="./nba_app/img/${fetchedTeams[index].id}.png" alt="">
            <h1>${fetchedTeams[index].full_name}</h1>
            <h3>${fetchedTeams[index].abbreviation}</h3>
        </a>`);
    }
    loader.className += " hidden"

    
    
    
    
    



}