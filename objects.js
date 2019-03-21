var playlist = {Weezer: "Island in the Sun"};

function updatePlaylist(playlist, artist, song) {
  playlist.artist = song
  return playlist
}
updatePlaylist(playlist, Slowdive, Alison)
updatePlaylist(playlist, My Bloody Valentine, Sometimes)


function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}
