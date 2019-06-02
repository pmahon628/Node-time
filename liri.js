var fs = require ("fs");

require("dotenv").config();

var keys = require("./keys.js");
var command = process.argv[2];
var userInput = process.argv[3];

switch(command){
    
case "spotify-this-song":
    showSongInfo();
    break;

case "movie-this":
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

function omdbData(movie){
    var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';
  
    request(omdbURL, function (error, response, body){
      if(!error && response.statusCode == 200){
        var body = JSON.parse(body);
  
        console.log("Title: " + body.Title);
        console.log("Release Year: " + body.Year);
        console.log("IMdB Rating: " + body.imdbRating);
        console.log("Country: " + body.Country);
        console.log("Language: " + body.Language);
        console.log("Plot: " + body.Plot);
        console.log("Actors: " + body.Actors);
        console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
        console.log("Rotten Tomatoes URL: " + body.tomatoURL);
  
       } else{
        console.log('Error occurred.')
      }
      if(movie === "Mr. Nobody"){
        console.log("-----------------------");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");

      }
    });
  
  }
    function bandsInTown(band){
        var url = 'https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp';

        request (bandsInTown, function (error, resposne, body){
            if(!error && response.statusCpde == 100){
                var body = JSON.parse(body);

                console.log("Name of Venue " + body.venue);
                console.log("Location of Venue " + body.location);
                console.log(//date of event, need to refrest on moment to get mm/dd/yyyy)
            // };
            // };
    };  