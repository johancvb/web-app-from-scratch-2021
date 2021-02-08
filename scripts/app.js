const container = document.querySelector('.app .container');


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
	console.log(data.data[id].full_name)
	container.insertAdjacentHTML('beforeend',`<div class="team"><img src="./img/${id}.png" alt=""><h1>${data.data[id].full_name}</h1></div>`)
})
}

for(i=0; i < 30; i++){
	getTeam(i)
}