var playlist = {}
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")


function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}
removeFromPlaylist(playlist, Slowdive)