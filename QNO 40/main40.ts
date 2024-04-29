function makeAlbum (artist_name:string,album_title:string,tracks?:number){
    let album:{ artist:String,title:string,tracks?:number} = {
        artist:artist_name,
        title:album_title,
    };
    if (tracks !== undefined){
        album.tracks = tracks
    }
    return album
}
// calling a function name with two premeter
let album1 = makeAlbum("laiba","album title 1");

let album2 = makeAlbum("malaika","album title 2");

// calling a function name with three premeter
let album3 = makeAlbum("sidra","album title 3",6);

console.log(album1);
console.log(album2);
console.log(album3);

// makeAlbum is an object
// album is property
// return: value stored in the objectbut cant print