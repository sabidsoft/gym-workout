import React from 'react'
import './UseEffectHook.css'

const UseEffectHook = () => {
    return (
        <div className='useeffect_container'>
            <h1 className='useeffect_title'>useEffect Hook using without Fetch</h1>
            <ol className='useeffect_text'>
                <li>Directly updating the DOM.</li>
                <li>Setting any subscription or timers.</li>
            </ol>
        </div>
    )
}

export default UseEffectHook