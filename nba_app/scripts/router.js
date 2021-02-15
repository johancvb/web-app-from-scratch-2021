import "./../libs/routie.js";

routie('overview', () => {
  document.getElementsByClassName('container')[0].style.display = 'none';
  document.getElementById('teams-overview').style.display = 'grid';
});

routie('team/:teamId', (teamId) => {
  document.getElementsByClassName('container')[0].style.display = 'none';
  document.getElementById('team-detail').style.display = 'grid';

  
  // hierna renderen detail page
});