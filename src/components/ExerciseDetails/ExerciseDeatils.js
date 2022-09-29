import React from 'react'
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail'
import './ExerciseDeatils.css'

const ExerciseDeatils = ({ exerciseTime, breakTime }) => {
    return (
        <div className='exercise_details_container'>
            <p className='exercise_details_title'>Exercise Details</p>
            <ExerciseDetail detailName="Exercise time" time={exerciseTime} />
            <ExerciseDetail detailName="Break time" time={breakTime} />
        </div>
    )
}

export default ExerciseDeatils