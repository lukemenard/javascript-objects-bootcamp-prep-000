var playlist = {Weezer: "Island in the Sun"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}
updatePlaylist(playlist, 'Slowdive', 'Alison')
updatePlaylist(playlist, 'My Bloody Valentine', 'Sometimes')


function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}
