import { fetchAllPlayersFromApi } from './../api/apiHandler.js';


// RENDER DATA ON DETAILED PAGE

export async function getPlayers(teamId) {

	const players = document.querySelector('.players');
	const app = document.querySelector('.app');
	const loader = document.querySelector(".loader.hidden");

	loader.className = "loader";

	console.log('started fetching all players')
	const allFetchedPlayers = await fetchAllPlayersFromApi(teamId);
	console.log('ended fetching all players');

	app.insertAdjacentHTML('afterbegin',
		`
	<div class="team_detailed">
	    <img src="./nba_app/img/${teamId}.png" alt="">
	</div>
	<input type="text" name="searchBar" id="searchBar" placeholder="Search player...">

	`)

	// RENDER FETCHED PLAYERS
	
	const playersArr = [];

	allFetchedPlayers.forEach(fetchedPlayers => {
		for (const playerFetchedTeam of fetchedPlayers.data) {
			if (playerFetchedTeam.team.id === Number(teamId)) {
				if (playerFetchedTeam.height_feet === null || playerFetchedTeam.height_inches === null ||
					playerFetchedTeam.position === null || playerFetchedTeam.weight_pounds === null) {

					players.insertAdjacentHTML('beforeend',
						`
						<details class="unavailable">
							<summary>
								<h1>${playerFetchedTeam.first_name} ${playerFetchedTeam.last_name}</h1>
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
								<h1>${playerFetchedTeam.first_name} ${playerFetchedTeam.last_name}</h1>
							</summary>
								<h2>Height: ${playerFetchedTeam.height_feet}'${playerFetchedTeam.height_inches}</h2>
								<h2>Position: ${playerFetchedTeam.position}</h2>
								<h2>Weight: ${playerFetchedTeam.weight_pounds} pounds</h2>
						</details>
					`
					)
				}
				playersArr.push(playerFetchedTeam)

			}

		}
	});

	loader.className += " hidden";

// SEARCH BAR + RENDER SEARCHED PLAYERS

	const searchBar = document.getElementById('searchBar');

	searchBar.addEventListener('keyup', (e) => {
		const searchString = e.target.value.toLowerCase();
		const filtered_players = playersArr.filter((player) => {
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

};


