require("dotenv").config();

var keys = require("./keys.js");
var command = process.argv[2];
var userInput = process.argv[3];

switch(command){
    
case "spotify-this-song":
    showSongInfo();
    break;

case "movie-this";
    showMovieInfo();
    break;

case "do-what-it-says":
    doWhatItSays();
    break;
};

function showSongInfo(){
    var spotify = new Spotify(llaves.spotifyKeys);

    spotify.search({ type: 'track', query: userInput}, function (err, data) {
        if (err){
            console.log('The error is ' + err);
        }
        console.log('Artist' + data.tracks.items[0].artists[0].name + "Song's name:" + data.tracks.items[0].name +
        "Preview of Song:" + data.tracks.items[0].artists[0].preview_url + "Album the songs on" + data.tracks.items[0].album.name);
    });
};