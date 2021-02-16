import "./../libs/routie.js";
import { getPlayers } from "./detail/detailed.js";


routie('overview', () => {
  document.getElementsByClassName('container')[0].style.display = 'none';
  document.getElementById('teams-overview').style.display = 'grid';
});

routie('team/:teamId', (teamId) => {
  document.getElementsByClassName('container')[0].style.display = 'none';
  document.getElementById('team-detail').style.display = 'grid';

  // hierna renderen detail page
  getPlayers(teamId);
});

