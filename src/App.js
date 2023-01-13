import { useEffect, useMemo, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
    const[data, setData] = useState(null)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            setData(res.data)
        }) 
    }, [])

    const findLongestName = (comments) => {
        if(!comments) return null

        let longestName = ""
        for(let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log("this was computed")

        return longestName
    }

    const getLongestName = useMemo(() => findLongestName(data), [data])
    return ( 

        <div className="app">
            <div>{getLongestName}</div>
        </div> 
         
     );
}

export default App;