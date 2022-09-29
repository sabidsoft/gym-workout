import React from 'react';
import './ExerciseDetail.css'

const ExerciseDetail = ({ detailName, time }) => {
    return (
        <div className="exercise_detail_container">
            <p className='detail_text'>{detailName}</p>
            <p className='detail_time'>{time} seconds</p>
        </div>
    );
};

export default ExerciseDetail;