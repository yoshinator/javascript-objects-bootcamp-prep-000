var playlist = {journey: "don't stop believing"};

function updatePlaylist(list, artistName, songTitle){
list[artistName] = songTitle;
return list;
}

function removeFromPlaylist(list, artistName){
  console.log(list)// checking parameters are received correctly
  console.log(artistName)// ''                            //
delete list.artistName;
}


//should delete the key value pair but doesn't also tried it with single quotes and no quotes
removeFromPlaylist(playlist, "journey")
// still displaying { journey: 'don\'t stop believing' }
console.log(playlist)
