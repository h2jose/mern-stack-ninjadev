const express = require('express')
const {
	createWorkout,
	getWorkouts,
	getWorkout,
	deleteWorkout,
	updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Get all workouts
router.get('/', getWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a  workout
router.delete('/:id', deleteWorkout)

// UPDATE a  workout
router.patch('/:id', updateWorkout)

module.exports = router