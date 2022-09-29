import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import ExercisesDetails from '../ExercisesDetails/ExercisesDetails';
import Header from '../Header/Header';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([])
    const [exerciseTime, setExerciseTime] = useState(0)
    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    const handleExerciseTime = (exercise) => {
        setExerciseTime(exerciseTime + exercise.time)
    }

    const handleBreakTime = (e) => {
        let value = e.target.innerText
        value = value.split('')
        value.pop()
        value = value.join('')
        setBreakTime(value)
    }

    return (
        <div className='exercises_container'>
            <div className="exercises_name_container">
                <Header/>
                <div className="exercises">
                    {
                        exercises.map(exercise => {
                            return (
                                <Exercise
                                    exercise={exercise} 
                                    key={exercise._id}
                                    handleExerciseTime={handleExerciseTime}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="execises_details_container">
                <ExercisesDetails exerciseTime={exerciseTime} breakTime={breakTime} handleBreakTime={handleBreakTime} />
            </div>
        </div>
    );
};

export default Exercises;