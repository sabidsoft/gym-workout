import React from 'react';
import './ExerciseDeatils.css'

const ExerciseDeatils = () => {
    return (
        <div className='exercise_details'>
            <p className='exercise_details_title'>Exercise Details</p>
            <div className="exercise_time_container">
                <p className='exrcs_text'>Exercise time</p>
                <p className='exrcs_time'>200 seconds</p>
            </div>
            <div className="exercise_time_container">
                <p className='exrcs_text'>Break time</p>
                <p className='exrcs_time'>20 seconds</p>
            </div>
        </div>
    );
};

export default ExerciseDeatils;