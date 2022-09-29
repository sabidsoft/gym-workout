import React from 'react';
import BreakTimeBtn from '../BreakTimeBtn/BreakTimeBtn';
import './Break.css'

const Break = ({ handleBreakTime }) => {
    return (
        <div className='break_container'>
            <p className='break_title'>Add A Break</p>
            <div className="break_time">
                <BreakTimeBtn handleBreakTime={handleBreakTime} time="10s" />
                <BreakTimeBtn handleBreakTime={handleBreakTime} time="20s" />
                <BreakTimeBtn handleBreakTime={handleBreakTime} time="30s" />
                <BreakTimeBtn handleBreakTime={handleBreakTime} time="40s" />
                <BreakTimeBtn handleBreakTime={handleBreakTime} time="50s" />
            </div>
        </div>
    );
};

export default Break;