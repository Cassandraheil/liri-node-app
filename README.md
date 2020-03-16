# liri-node-app

The Problem-
    Like all apps, this app has a purpose; to solve a problem. A big problem with today's society is the overload of data spread sporatically across the internet. Conveniently, this app brings together information about movies, songs, artists, and the artists' events into one easy to use package.

An Overview-
    This app has many files intertwined together to make it function properly. The file package.json is used to hold metadata vital to the app. This file holds dependencies and passes information when need be. The main file, liri.js, is where all the magic happens. The api's are called, the user input is grabbed, and all the pertinent information is displayed when called upon by the user. The keys.js file and .env file hold elements necessary for the Spotify api to be called. 

Instructions-
    1)open the app in your terminal
    2)pick the information you want using these options
        **'movie-this'--- will use the OMDB api to take in a movie title and return the title, the year released, the IMDB rating, the Rotten Tomatoe rating, the country where the movie was produced, language of the movie, the plot, and the Actors in the movie. 
        **'spotify-this-song'--- will use the Spotify api take in a song name and output the artist, the song name, a link to preview the song, and the album the song is on. 
        **'concert this' --- will use the Bands in Town api to take in an artist or band name and output the name of the venue, venue location, and date of the event.
        **'do what it says' --- will call whatever command is running in the random.txt file
    3)type 'node liri.js ' 
    4)then your pick 'concert-this '
    5)then type your relevant topic 'Ariana Grande'
    exp: 'node liri.js concert-this Ariana Grande'
    6)the app then outputs information based on your input. to get information on a different topic just follow steps 2-5 again

Screenshot-- 
![Getting Started](./images/)
![Getting Started](./images)

Link-
    https://cassandraheil.github.io/liri-node-app/

Technologies-
    This app utilizes a variety of high-level resources used by coders daily. Multiple trademark APi's were called like the Spotify api, the OMDB api, and the Bands In Town api. Axios was a useful tool in the process of making this app. Axios allowed us to call api's through Node and display them in the terminal for conveinent use.

My Part-
    This app and most modern apps could not happen without collaboration and the openness of the coding community. Using the resources out there I was able to combine them, add some logic using javascript, and display this information with Node through the terminal. 