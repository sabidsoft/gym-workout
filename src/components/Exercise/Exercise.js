import React from 'react'
import './Exercise.css'

const Exercise = ({ exercise, handleExerciseTime }) => {
    const { name, image, time } = exercise
    return (
        <div className='exercise'>
            <p className='name'>{name}</p>
            <img className='image' src={image} alt="exercise_image" />
            <p className='time'>Time required: <span className='seconds'>{time}</span>s</p>
            <button onClick={() => handleExerciseTime(exercise)} className='btn_add'>Add to list</button>
        </div>
    )
}

export default Exercise