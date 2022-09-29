import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    return (
        <div className='exercises_container'>
            <div className="exercises_name_container">
                <Header/>
                <p className='exercises_title'>Select today's exercise</p>
                <div className="exercises">
                    {exercises.map(exercise => <Exercise exercise={exercise} key={exercise._id} />)}
                </div>
            </div>
            <div className="execises_details_container">

            </div>
        </div>
    );
};

export default Exercises;