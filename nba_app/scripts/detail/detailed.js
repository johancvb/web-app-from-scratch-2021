import { fetchAllPlayersFromApi } from './../api/apiHandler.js';

// get players from api

export async function getPlayers(teamId) {
	const players = document.querySelector('.players');

	console.log('started fetching all players')
	const unmappedFetchedPlayers = await fetchAllPlayersFromApi(teamId);
	console.log('ended fetching all players');

	unmappedFetchedPlayers.forEach(fetchedPlayers => {
		for (const teamOfFetchedPlayer of fetchedPlayers.data) {
			if (teamOfFetchedPlayer.team.id === Number(teamId)) {
				players.insertAdjacentHTML('beforeend', `
					<div class="player">
					<h1>${teamOfFetchedPlayer.first_name} ${teamOfFetchedPlayer.last_name}</h1>
					</div>`
				)
			}
		}
	});	
}



