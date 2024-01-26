const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLoweCase(); 
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden')
    }
})