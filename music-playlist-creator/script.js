// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("playlistModal");
var span = document.getElementsByClassName("close")[0];

function populateFeatured(){
   let array = randPlaylist(data.playlists);
   let playlist = array[0];
   let id = playlist.playlistID;
   let name = playlist.playlist_name;
   let creator = playlist.playlist_creator;
   let art = playlist.playlist_art;
   let likeCount = playlist.likeCount;
   let songs = playlist.songs;
   const feature = document.getElementById('feature');

   // removes all playlists before
   while(feature.hasChildNodes()){
      feature.removeChild(feature.firstChild);
   }

   const playlistDetails = document.createElement("div");
   playlistDetails.innerHTML = `
      <div id="featuredDetails">
         <img class="image" src="${art}" alt="Playlist">
         <h3 id="featuredTitle">${name}</h3>
         <p id="featuredCreator">${creator}</p>
      </div> 
   `;

   feature.appendChild(playlistDetails);

   const featuredSongs = document.createElement("div");
   featuredSongs.innerHTML = `
      <div id="featuredSongs">
      </div>
   `;

   feature.appendChild(featuredSongs);

   const songList = document.getElementById('featuredSongs');

   playlist.songs.forEach((song) => {
      let id = song.songId;
      let title = song.title;
      let artist = song.artist;
      let album = song.album;
      let art = song.cover_art;
      let duration = song.duration;
      const songItem = document.createElement("div");
      songItem.innerHTML = `
         <div id="fSong">
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

document.addEventListener("DOMContentLoaded", () => {
   populateFeatured();
});

function randPlaylist(playlists){
   console.log(playlists);
   let array = playlists;
   let currentIndex = array.length;

   while(currentIndex != 0){
      let random = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[random]] = [array[random], array[currentIndex]];
   }

   return array;
}

function openModal(playlist) {
   document.getElementById('playlistImage').src = playlist.playlist_art;
   document.getElementById('playlistName').innerText = playlist.playlist_name;
   document.getElementById('creator').innerText = playlist.playlist_creator;
   modal.style.display = "block";
   // let songs = playlist.songs;
   // console.log(songs);

   const buttonSection = document.getElementById("buttonSection");

   // removes all songs before
   while(buttonSection.hasChildNodes()){
      buttonSection.removeChild(buttonSection.firstChild);
   }
   const shuffleButton = document.createElement("div");
   shuffleButton.innerHTML = `
      <button class="shuffle">
         <p>Shuffle</p>
      </button>
   `;

   shuffleButton.addEventListener("click", function(event){
      const target = event.target;
      if(target.classList.contains('shuffle') || target.closest('.shuffle')){
         shuffle(event, playlist);
      } 
   });

   buttonSection.appendChild(shuffleButton);

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

function shuffle(event, playlist){
   // console.log(playlist.songs);
   let array = playlist.songs;
   let currentIndex = array.length;

   while(currentIndex != 0){
      let random = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[random]] = [array[random], array[currentIndex]];
   }

   openModal(playlist);
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
               <span class="delete">&times;</span>
               <img class="image" src="${art}" alt="Playlist">
               <h3 id="playlistTitle">${name}</h3>
               <p id="creatorName">${creator}</p>
               <div id="likeSection">
                  <button class="likeButton">
                        <p class="like">🩶</p>
                        <p class="likeCount">${likeCount}</p>
                  </button>
               </div>
         </div>
      `;
      
      listItem.addEventListener("click", function(event){
         const target = event.target;
         if(target.classList.contains('likeButton') || target.closest('.likeButton')){
            like(playlist);
         } else if(target.classList.contains('delete') || target.closest('.delete')){
            listItem.remove();
         }
         else {
            openModal(playlist);
         }
      });

      playlistList.appendChild(listItem);
   })
}

function like(playlist){
   playlist.likeCount++;
   const listItem = event.currentTarget;
   const likeCount = listItem.querySelector('.likeCount');
   const updateCount = playlist.likeCount;
   const like = listItem.querySelector('.like');
   likeCount.textContent = updateCount;
   like.textContent = '❤️';
}

importPlaylists();



