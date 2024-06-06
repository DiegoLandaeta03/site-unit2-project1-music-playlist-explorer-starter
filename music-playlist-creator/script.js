// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("playlistModal");
var span = document.getElementsByClassName("close")[0];

function openModal(playlist) {
   document.getElementById('playlistImage').src = playlist.playlist_art;
   document.getElementById('playlistName').innerText = playlist.playlist_name;
   document.getElementById('creator').innerText = playlist.playlist_creator;
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


function importPlaylists(){
   // Display the fetched playlists
   const playlistList = document.getElementById("playlists");
   data.playlists.forEach((playlist) => {
      let id = playlist.playlistID;
      let name = playlist.playlist_name;
      let creator = playlist.playlist_creator;
      let art = playlist.playlist_art;
      let likeCount = playlist.likeCount;
      let songs = playlist.songs;
      // console.log(playlist);
      const listItem = document.createElement("div");
      listItem.innerHTML = `
         <div class="list">
               <img class="image" src="${art}" alt="Playlist" width="200">
               <h3>${name}</h3>
               <p>${creator}</p>
         </div>
      `;

      listItem.addEventListener("click", () => {
         openModal(playlist);
      });
      playlistList.appendChild(listItem);
   })
}

importPlaylists();



