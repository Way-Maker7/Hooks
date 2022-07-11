import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const[count, setCount] = useState(0)
    const[theme, setTheme] = useState('blue')
    const [items, setItems] = useState([])

    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    },[resourceType])



    function decrementCount() {
        setCount(count - 1)
        setTheme('red')
    }

    function incrementCount() {
        setCount(count + 1)
        setTheme('green')
    }

    return (
    <div className="App">

     <button onClick={decrementCount}>-</button>
      <span>{count}</span>
        {/*<span>{theme}</span>*/}
      <button onClick={incrementCount}>+</button>
        <br/>
        <br/>
        <br/>
        <div>
            <h5>useEffect</h5>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {
            items.map(item => {
                return <p>{JSON.stringify(item)}</p>
            })
        }
    </div>
  );
}

export default App;
