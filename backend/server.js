require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()
app.use(cors());

//middleware

app.use( express.json() )

app.use((req,res,next)=>{
	console.log(req.path, req.method)
	next()
})

// routes
// app.get('/', (req,res) => {
// 	res.json({msg: 'Welcome to the app'})
// })
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.DB_CONNECT)
	.then(() => {
		console.log('DB connected')
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log('listening on port', process.env.PORT)
		})
	})
	.catch((e) => console.log(e))

