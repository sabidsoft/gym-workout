import React from 'react';
import ExtraInfo from '../ExtraInfo/ExtraInfo';
import './PersonExtraInfo.css'

const PersonExtraInfo = () => {
    return (
        <div className="personal_extra_info">
            <ExtraInfo amount="75" unit="kg" infoTitle="Weight" />
            <ExtraInfo amount="6.7" unit="inchs" infoTitle="Height" />
            <ExtraInfo amount="30" unit="yrs" infoTitle="Age" />
        </div>
    );
};

export default PersonExtraInfo;