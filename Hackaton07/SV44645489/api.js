import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/:resource', async (req, res) => {
    const resource = req.params.resource;    
    let response = [];
    try {
        switch (resource) {
            case 'github':
                response = await axios.get('https://api.github.com/users/iaguirrej')
                res.json(response.data)
                break
            case 'weather':
                const options = {
                    method: 'GET',
                    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                    params: {q: '53.1,-0.13'},
                    headers: {
                      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', //AQUÍ PONER SU KEY
                      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                    }
                }
                response = await axios.request(options)
                res.json(response.data)               
                break
            case 'exchangeRate':
                response = await axios.get('https://api.apis.net.pe/v1/tipo-cambio-sunat')
                res.json(response.data)
                break
            case 'pokemons':
                response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                res.json(response.data)
                break
            case 'pokemon':  
                const pokemon = 'bulbasaur';                       
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                res.json(response.data)
                break;
            case 'rickAndMorty':
                response = await axios.get('https://rickandmortyapi.com/api/character')
                res.json(response.data)
                break
            case 'rickAndMortyDetails':
                response = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10')
                res.json(response.data)
                break
            case 'drinks':
                response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/randomselection.php')
                res.json(response.data)
                break
            case 'products':
                response = await axios.get('https://fakestoreapi.com/products')
                res.json(response.data)
                break
            case 'photography':
                response = await axios.get('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=1500&dpr=2', {
                responseType: 'arraybuffer', // Solicita la respuesta en formato binario
                })
                if (response.status === 200) {
                    const imageBuffer = Buffer.from(response.data, 'binary') // Convierte los datos binarios en un buffer
                    res.set('Content-Type', 'image/jpeg') // Establece el tipo de contenido como imagen JPEG (ajusta según el formato de la imagen)
                    res.end(imageBuffer); // Envía la imagen como respuesta
                } else {
                    res.status(response.status).json({ message: 'Error en la solicitud a la API de imágenes.' })
                }
                break
            case 'phrase':
                response = await axios.get('https://frasedeldia.azurewebsites.net/api/phrase')
                res.json(response.data)
                break
            case 'movieDetails':
                const api = "https://www.omdbapi.com/?"
                const apiKey = "apikey=18eaeb4f"
                response = await axios.get(api+apiKey+'&s=The Matrix'+"&type=movie"+"&page=1")
                res.json(response.data)
            case 'random':
                response = await axios.get('https://randomuser.me/api/')
                res.json(response.data)
                break
            case 'nasa':
                response = await axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
                res.json(response.data)
                break
            default:
                res.status(404).json({ message: 'End point no encontrado.' })
            
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en la solicitud.' });
    }
});

app.listen(port, () => {
    console.log(`Hackaton07 ejecutandose en el puerto ${port}.`);
});

