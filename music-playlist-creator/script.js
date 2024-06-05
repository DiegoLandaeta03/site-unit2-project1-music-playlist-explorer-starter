// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("playlistModal");
var span = document.getElementsByClassName("close")[0];

function openModal(playlist) {
   document.getElementById('playlistImage').src = playlist.imageUrl;
   document.getElementById('playlistName').innerText = playlist.name;
   document.getElementById('creator').innerText = playlist.creator;
   // document.getElementById('festivalDates').innerText = `Dates: ${festival.dates}`;
   // document.getElementById('festivalLocation').innerText = `Location: ${festival.location}`;
   // document.getElementById('artistLineup').innerHTML = `<strong>Lineup:</strong> ${festival.lineup.join(', ')}`;
   modal.style.display = "block";
}



span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
