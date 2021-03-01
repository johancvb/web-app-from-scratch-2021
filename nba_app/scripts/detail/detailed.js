import { fetchAllPlayersFromApi } from './../api/apiHandler.js';


// get players from api

export async function getPlayers(teamId) {

	const players = document.querySelector('.players');
	const app = document.querySelector('.app')
	const loader = document.querySelector(".loader.hidden");

	loader.className = "loader";


	console.log('started fetching all players')
	const unmappedFetchedPlayers = await fetchAllPlayersFromApi(teamId);
	console.log('ended fetching all players');

	app.insertAdjacentHTML('afterbegin',
		`
	<div class="team_detailed">
	    <img src="./nba_app/img/${teamId}.png" alt="">
	</div>
	<input type="text" name="searchBar" id="searchBar" placeholder="Search for names..">

	`)

	const final_players = [];


	unmappedFetchedPlayers.forEach(fetchedPlayers => {
		for (const teamOfFetchedPlayer of fetchedPlayers.data) {
			if (teamOfFetchedPlayer.team.id === Number(teamId)) {
				if (teamOfFetchedPlayer.height_feet === null || teamOfFetchedPlayer.height_inches === null ||
					teamOfFetchedPlayer.position === null || teamOfFetchedPlayer.weight_pounds === null) {

					players.insertAdjacentHTML('beforeend',
						`
						<details class="unavailable">
							<summary>
								<h1>${teamOfFetchedPlayer.first_name} ${teamOfFetchedPlayer.last_name}</h1>
							</summary>
							<h2>This information is unavailable</h2>
						</details>
					`,

					)
				}
				else {
					players.insertAdjacentHTML('beforeend',
						`
						<details>
							<summary>
								<h1>${teamOfFetchedPlayer.first_name} ${teamOfFetchedPlayer.last_name}</h1>
							</summary>
								<h2>Height: ${teamOfFetchedPlayer.height_feet}'${teamOfFetchedPlayer.height_inches}</h2>
								<h2>Position: ${teamOfFetchedPlayer.position}</h2>
								<h2>Weight: ${teamOfFetchedPlayer.weight_pounds} pounds</h2>
						</details>
					`
					)
				}
				final_players.push(teamOfFetchedPlayer)

			}

		}
	});
	loader.className += " hidden";


	const searchBar = document.getElementById('searchBar');


	searchBar.addEventListener('keyup', (e) => {
		const searchString = e.target.value.toLowerCase();
		const filtered_players = final_players.filter((player) => {
			return (
				player.last_name.toLowerCase().includes(searchString)
			)
		})


        players.innerHTML = '';
        const html = filtered_players.map(teamOfFetchedPlayer => {
        return `
		<details>
		<summary>
			<h1>${teamOfFetchedPlayer.first_name} ${teamOfFetchedPlayer.last_name}</h1>
		</summary>
			<h2>Height: ${teamOfFetchedPlayer.height_feet}'${teamOfFetchedPlayer.height_inches}</h2>
			<h2>Position: ${teamOfFetchedPlayer.position}</h2>
			<h2>Weight: ${teamOfFetchedPlayer.weight_pounds} pounds</h2>
		</details>`
        }).join('')
    
        players.insertAdjacentHTML("afterbegin", html)


	
	})

}


