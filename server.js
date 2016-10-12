var express = require('express');
var proxy = require('http-proxy-middleware');
var PokeIO = require('pokemon-go-node-api')


var app = express();
app.use(express.static('public'));

app.use(express.static('public'));



app.use('/map-data', proxy({target: 'https://594c35f8.ngrok.io', changeOrigin: true
}));

app.use('/pokemongo/pokemon', proxy({target: 'http://www.serebii.net', changeOrigin: true
}));




app.get('/map-data-test', (req, res) => {
    var lat = req.query.latitude;
    var long = req.query.longitude;


    var data = [];
    
    for(var i = 0; i < 15; i += 1) {
        data.push({
            'latitude': parseFloat(lat)  + (.05 - Math.random() * .1),
            'longitude': parseFloat(long)  + (.05 - Math.random() * .1),
            'pokemon_id': parseInt(151 * Math.random())
        });
    }
    res.json({pokemons: data});
})

app.get('/pokemons', (req, res) => {
    res.json(PokeIO.pokemonlist);
})


app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});
