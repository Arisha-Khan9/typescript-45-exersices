function makeAlbum(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("laiba", "album title 1");
var album2 = makeAlbum("malaika", "album title 2");
var album3 = makeAlbum("sidra", "album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
