// import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);
  return(
      <div>
        <h1>Counter App</h1>
        <p>Count : {count}</p>
        <button disabled={count === 10} onClick={()=> setCount(count+1)}>Increase</button>
        <button disabled={count === 0} onClick={()=> {if (count > 0) {setCount(count-1)}}}>Decrease</button>
        <button onClick={()=> setCount(0)}>Reset</button>
      </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Mera Pehla React App</h1>
//       <p>Yeh mera counter app hai</p>
//     </div>
//   );
// }

// export default App;