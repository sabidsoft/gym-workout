import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div className='break_container'>
            <p className='break_title'>Add A Break</p>
            <div className="break_time">
                <button className='time_text'>10s</button>
                <button className='time_text'>20s</button>
                <button className='time_text'>30s</button>
                <button className='time_text'>40s</button>
                <button className='time_text'>50s</button>
            </div>
        </div>
    );
};

export default Break;