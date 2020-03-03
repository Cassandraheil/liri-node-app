require("dotenv").config();

// ---grabbing axios 
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');


var firstArg = process.argv[2];
var secArg = [];
for (var i=3; i<process.argv.length; i++){
    secArg.push(process.argv[i]);
}
secArg = secArg.join(" ")

function spotify(){
//--------------Spotify aPI--------------------------
var spotify = new Spotify(keys.spotify);
spotify.search({ type: 'track', query: secArg })
.then(function(response) {
    for (i=0; i <20; i++){
    console.log("Artist: ", response.tracks.items[i].artists.name); //got this to work finally
    console.log("Song Name: ", response.tracks.items[i].name);
    console.log("Preview the song: ", response.tracks.items[i].preview_url);
    console.log("Album Name: ", response.tracks.items[i].album.name);
    console.log("--------")
    }
})
.catch(function(err) {
    console.log(err);
});//-------Spotify API ending----------------------
};


function omdbAPI(movie){
    //   --------omdbAPI below----------------------------
    axios.get("http://www.omdbapi.com/?t="+ movie +"&y=&plot=short&apikey=4526150c").then(
        function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Release year: " + response.data.Year); // or release?!?!?
            console.log("IMDB's rating is: " + response.data.imdbRating);
            console.log("Rotten Tomato's rating is: " + response.data.Ratings[1].Value);
            console.log("country produces in: " + response.data.Country);
            console.log("language: " + response.data.Language);
            console.log("plot: " + response.data.Plot);
            console.log("actors: " + response.data.Actors);
})  .catch(function(error) {
    if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
    } else if (error.request) {console.log(error.request);
    } else {console.log("Error", error.message);
} console.log(error.config);
});//   ------omdbAPI until here-------------------------
};

function bandsinTown(artist){
    //---------------bands in town API-------------
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) {
            console.log("The artist's name is " + response.venue[0]);
            // console.log("venue location " + response.url);
            // console.log("date of event: (MM/DD/YYY) " + response.upcoming_event_count);
        })  .catch(function(error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {console.log(error.request);
            } else {console.log("Error", error.message);
        } console.log(error.config);
    });// ------Bands In Town End API--------------------
};


//calling the spotify funstion or the default
if (firstArg === "spotify-this-song" && secArg === ""){
    secArg = "The Sign";
    spotify();
}
else if (firstArg === "spotify-this-song"){
    spotify();
}

//calling omdb function or the default
else if (firstArg ==="movie-this" && secArg === ""){
    omdbAPI("Mr. Nobody");
}
else if (firstArg ==="movie-this"){
    omdbAPI(secArg);
}

//calling the Bands in Town function, or the default
else if (firstArg === "concert-this" && secArg === ""){
    bandsinTown("Ariana Grande")
}
else if (firstArg === "concert-this"){
    bandsinTown(secArg);
}

//calling the random txt file
else if (firstArg === "do-what-it-says"){

    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {return console.log(error);}
            
            var dataArr = data.split(",");
            firstArg =dataArr[0];
            secArg =dataArr[1];


            if (firstArg === "spotify-this-song"){
                spotify();
            }
            else if (firstArg ==="movie-this" && secArg === ""){
                omdbAPI("Mr. Nobody");
            }
            else if (firstArg ==="movie-this"){
                omdbAPI(secArg);
                console.log("jk this one is happening")
            }
            else if (firstArg === "concert-this"){
                bandsinTown();
            }            
        });
    }
    
    else{
        console.log("sorry, retype that. Make sure you spelled everything correctly.");
    }



//-----get the last elements 
// var Arr = [];
// var argument=["node", "filename", userinput]
// for (var i = 2; < nodeArg.length; i++){
//     Arr.push(argument[i]);
// }

