var playlist = new Object({journey: "don't stop believing"});

function updatePlaylist(list, artistName, songTitle){
list[artistName] = songTitle;
return list;
}

function removeFromPlaylist(list, artistName){
  
 // delete returns true if item succesfully deleted. 
  delete list.artistName;
    return list;
  
}