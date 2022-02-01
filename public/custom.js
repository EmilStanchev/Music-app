function showSongs() {
    document.getElementById('hideSongs').className='visible'
    document.getElementById('songs').className ='visible'
    if (document.getElementById('hideSongs').className =='visible') {
        document.getElementById('showSong').className= 'invisible'
    }
}
showSongs();
function hideSongs() {
   document.getElementById('showSong').className= 'visible';
   document.getElementById('hideSongs').className= 'invisible';
   document.getElementById('songs').className ='invisible'

}
hideSongs();
/*Adding element */ 
function adding() {
    document.getElementById('new').insertAdjacentHTML('afterbegin',`<p>heloo</p>`)
}
adding();

