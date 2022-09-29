import React from 'react';
import './ExtraInfo.css'

const ExtraInfo = ({ amount, unit, infoTitle }) => {
    return (
        <div className="extra_info">
            <p className='amount'>{amount}<span className='unit'>{unit}</span></p>
            <p className='info_title'>{infoTitle}</p>
        </div>
    );
};

export default ExtraInfo;