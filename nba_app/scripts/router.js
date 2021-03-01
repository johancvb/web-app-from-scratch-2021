import "./../libs/routie.js";
import { getPlayers } from "./detail/detailed.js";


routie('overview', () => {
  document.getElementsByClassName('container')[0].style.display = 'none';
  document.getElementById('teams-overview').style.display = 'grid';
});

routie('team/:teamId', (teamId) => {
  document.getElementsByClassName('container')[0].style.display = 'none';
  document.getElementById('team-detail').style.display = 'grid';
  document.getElementById('open_h1').style.display = 'none';

  // RENDER DETAILED PAGE
  getPlayers(teamId);

});

