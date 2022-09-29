import React, { useEffect, useState } from 'react';
import logo from '../../images/brand-logo.png'
import Exercise from '../Exercise/Exercise';
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
                <div className="header">
                    <img className='brand_logo' src={logo} alt="brand_logo" />
                    <h1 className='brand_name'>GYM WORKOUT</h1>
                </div>
                <p className='exercises_title'>Select today's exercise</p>
                <div className="exercises">
                    {
                        exercises.map(exercise => {
                            return (
                                <Exercise
                                    exercise={exercise}
                                    key={exercise._id}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="execises_details_container">

            </div>
        </div>
    );
};

export default Exercises;