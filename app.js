const player_name = document.getElementById('name');
const team = document.getElementById('team');
const position = document.getElementById('position');
const player_height = document.getElementById('player_height');
const player_btn = document.getElementById('player_btn');

let id_nr = 1

async function loopAPI(){
    
    for(i = 0; i < 50; i++) {
        fetch(`https://free-nba.p.rapidapi.com/players/${id_nr}/?page=0&per_page=30`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
                "x-rapidapi-host": "free-nba.p.rapidapi.com"
            }
        })
        .then(res => res.json()
        )
        .then(data => {
            console.log(data)
              //  player_name.innerHTML = `<p>${data.first_name} ${data.last_name}</p>`
                  player_name.insertAdjacentHTML("beforeend", `<p>${data.first_name} ${data.last_name}</p>`)
            } 
        )   
        id_nr++  
    }
}

loopAPI()




// player_btn.addEventListener('click', function(){
    
//     const rand_int = Math.floor(Math.random() * 100)

//     fetch(`https://free-nba.p.rapidapi.com/players/${rand_int}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "f13b636f5fmshaea25718ef36c73p1829b0jsncd19791a2844",
// 		"x-rapidapi-host": "free-nba.p.rapidapi.com"
// 	} 
// })
// .then(res => res.json()
// )
// .then(data => {
//     console.log(data)
//     player_name.innerHTML = `<p>${data.first_name} ${data.last_name}</p>`
//     team.innerHTML = `<p>${data.team.full_name}</p>`
//     position.innerHTML = `<p>${data.position}</p>`
//     player_height.innerHTML = `<p>${data.height_feet}'${data.height_inches}</p>`
//     if(data.height_feet === null || data.height_inches === null) {
//         player_height.innerHTML = "<p>This info is unavailable.</p>"
//     }


// })
// console.log(rand_int)
// });
