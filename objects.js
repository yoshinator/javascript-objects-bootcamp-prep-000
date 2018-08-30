var playlist = new Object({journey: "don't stop believing"});

function updatePlaylist(list, artist, songTitle){
list[artist] = songTitle;
return list;
}