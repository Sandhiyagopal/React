import React from 'react'
import Msg from './Message/Msg'
import App2 from './Message/App2'
import App1 from './Message/App1'
let App = () => {
    return <div>
        <Msg />
        <Msg />
        <hr />
        <App2 />
        <hr />
        <App1 />
        <h2>Hello, Good Night</h2> 
       
    </div>
}
export default App