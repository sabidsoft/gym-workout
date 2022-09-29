import React from 'react';
import './BreakTimeBtn.css'

const BreakTimeBtn = ({ handleBreakTime, time }) => {
    return (
        <>
            <button onClick={e => handleBreakTime(e)} className='time_text'>{time}</button>
        </>
    );
};

export default BreakTimeBtn;