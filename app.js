const player_name = document.getElementById('name');
const team = document.getElementById('team');
const position = document.getElementById('position');
const player_height = document.getElementById('player_height');
const container = document.querySelector('.container');


// fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
// 		"x-rapidapi-host": "free-nba.p.rapidapi.com"
// 	}
// })

// .then(res => res.json())
// .then(data => {
//     console.log(data)

//     team.innerHTML = `<p>${data[1].full_name}</p>`
// })

async function getTeam(id){
	fetch("https://free-nba.p.rapidapi.com/teams", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
		"x-rapidapi-host": "free-nba.p.rapidapi.com"
	}
})
.then(res => res.json())
.then(data => {
	// console.log(data)
	console.log(data.data[id].full_name)
	container.insertAdjacentHTML('beforeend',`<div><h1>${data.data[id].full_name}</h1></div>`)
})
}

for(i=0; i < 31; i++){
	getTeam(i)
	i++
}