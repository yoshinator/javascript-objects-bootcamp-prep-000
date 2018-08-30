var playlist = {journey: "don't stop believing"};

function updatePlaylist(list, artistName, songTitle){
list[artistName] = songTitle;
return list;
}

function removeFromPlaylist(list, artistName){
delete list.artistName;
}

console.log(playlist)
//should delete the key value pair but doesn't also tried it with single quotes and no quotes
removeFromPlaylist(playlist, "journey")
// still displaying journey
console.log(playlist)
