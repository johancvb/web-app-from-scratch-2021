export async function fetchAllTeamsFromApi() {
    try {
        const fetchedTeams = await fetch("https://free-nba.p.rapidapi.com/teams", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
                "x-rapidapi-host": "free-nba.p.rapidapi.com"
            }
        });

        return fetchedTeams.json();
    } catch(error) {
        console.log(error);
    }
}

// async function getPlayers() {

// 	for (j = 1; j < 36; j++) {

// 		fetch(`https://free-nba.p.rapidapi.com/players?page=${j}&per_page=100`, {
// 			"method": "GET",
// 			"headers": {
// 				"x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
// 				"x-rapidapi-host": "free-nba.p.rapidapi.com"
// 			}
// 		})
// 			.then(res => res.json())
// 			.then(data => {
// 				console.log(data)

// 				for (i = 0; i < 100; i++) {
// 					var team = data.data[i].team.name


// 					if (data.data[i].team.name === "Rockets") {

// 						console.log(team)
// 						players.insertAdjacentHTML('beforeend', `<div class="player"><h1>${data.data[i].first_name} ${data.data[i].last_name}</h1></div>`)
// 					}
// 				}
// 			}
// 			)

// 	}
// }