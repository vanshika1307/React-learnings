import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let addValue =() => {
    if(count >= 20){
      alert("You can't add more than 20");
      return;
    }
    else {
      setCount(count++);
    }
  }
  let removeValue = () => {
    if (count < 0) {
      alert("You can't remove more than 0");
      return;
    }
    else {
      setCount(count--);
    }
  }
  return (
    <>
   <button onClick={addValue}>add value {count}</button>
   <br></br>
   <button onClick={removeValue}> remove value {count}</button>
   </>
  )
}

export default App
