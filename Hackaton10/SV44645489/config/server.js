const express = require("express")
const mongoose = require("mongoose") // new
const routes = require("../routes") // new
const app = express()


const server = () => {
	try{
		// Connect to MongoDB database
		mongoose
		.connect("mongodb://localhost:27017/hackaton10", {
			useNewUrlParser: true,
			useUnifiedTopology: true
		  })
		.then(() => {			
			app.use("/api", routes) // new
			app.use(express.json())			
			app.listen(3000, () => {
				console.log("Server has started!")
			})
		})
	}catch(err){
		console.log("Conexión a la base de datos con errores.");
	}
} 

module.exports  = server
