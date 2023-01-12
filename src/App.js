import { useReducer, useState } from 'react';
import './App.css';

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showtext: state.showtext}
        case "toggleShowText":
            return {count: state.count, showtext: !state.showtext}
        default:
            return state;
    }
}
const App = () => {
    const[state, dispatch] = useReducer(reducer, {count: 0, showtext:true})
    return ( 
        <div>
            <h2>{state.count}</h2>
         <button onClick={() => {
            dispatch({type: "INCREMENT" })
            dispatch({type: "toggleShowText"})
         }}>
            Click me
         </button>
         {state.showtext && <h2>Bitch</h2>}
        </div>
         
     );
}

export default App;