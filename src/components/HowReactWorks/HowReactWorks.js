import React from 'react'
import './HowReactWorks.css'

const HowReactWorks = () => {
    return (
        <div className='how_react_container'>
            <h1 className='how_react_title'>How React Works?</h1>
            <p className='how_react_para'>
            ReactJS is known as one of the most popularly used JavaScript libraries for web app development. It is a product of Facebook. React comes with a varied collection of JavaScript code snippets that are reusable and can be used for user interface UI building which are called components.
            React works with Virtual DOM. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
            Any React app comes with a single root DOM node and this means that when it comes to rendering an Element into the DOM, there will be a change observed in the user interface of the page.
            </p>
        </div>
    )
}

export default HowReactWorks;