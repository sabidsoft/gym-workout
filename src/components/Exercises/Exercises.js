import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import ExercisesDetails from '../ExercisesDetails/ExercisesDetails';
import Header from '../Header/Header';
import { addBreakTimeToLocalStorage, getBreakTimeFromLocalStorage } from '../../utilities/localStorage'
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

    useEffect(() => {
        const breakTimeFromLocalStorage = getBreakTimeFromLocalStorage()
        setBreakTime(breakTimeFromLocalStorage)
    }, [])

    const handleExerciseTime = (exercise) => {
        setExerciseTime(exerciseTime + exercise.time)
    }

    const handleBreakTime = (e) => {
        let time = e.target.innerText
        time = time.split('')
        time.pop()
        time = time.join('')
        setBreakTime(time)

        addBreakTimeToLocalStorage(time)

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