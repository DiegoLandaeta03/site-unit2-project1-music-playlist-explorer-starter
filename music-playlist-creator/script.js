// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("playlistModal");
var span = document.getElementsByClassName("close")[0];

function openModal(playlist) {
   document.getElementById('playlistImage').src = playlist.playlist_art;
   document.getElementById('playlistName').innerText = playlist.playlist_name;
   document.getElementById('creator').innerText = playlist.playlist_creator;
   modal.style.display = "block";
   // let songs = playlist.songs;
   // console.log(songs);
   const songList = document.getElementById("songSection");

   // removes all songs before
   while(songList.hasChildNodes()){
      songList.removeChild(songList.firstChild);
   }
   
   playlist.songs.forEach((song) => {
      let id = song.songId;
      let title = song.title;
      let artist = song.artist;
      let album = song.album;
      let art = song.cover_art;
      let duration = song.duration;
      const songItem = document.createElement("div");
      songItem.innerHTML = `
         <div id="song">
               <img id="songImage" src="${art}" alt="Song Image">
               <div id="songDetails">
                     <h4 id="songName">${title}</h4>
                     <p id="artist">${artist}</p>
                     <p id="album">${album}</p>
               </div>
               <p id="duration">${duration}</p>
         </div>
      `;

      songList.appendChild(songItem);
   })
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



