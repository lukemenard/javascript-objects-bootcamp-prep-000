var playlist = {Weezer: "Island in the Sun"};

function updatePlaylist(playlist, artist, song) {
  playlist.artist = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}
