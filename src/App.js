import { useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
import Button from './Button';

const App = () => {
    const btnref = useRef(null)
    return ( 
        <div className="app">
            <button onClick={() => {btnref.current.alterToggle()}}>Button from Parent</button>
            <Button ref={btnref} />
        </div> 
         
     );
}

export default App;