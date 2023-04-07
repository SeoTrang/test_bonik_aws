
import './App.css';


import {React} from 'react';


import RouterWeb from './routes/RouterWeb';
function App() {


  



  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScroll = event => {
  //     setScrollTop(event.currentTarget.scrollTop);
  // };
  // console.log(scrollTop);
  return (
    // <div>
    //   <h2>Scroll Top: {scrollTop}</h2>

    //   <div
    //     style={{
    //       border: '3px solid black',
    //       width: '400px',
    //       height: '100px',
    //       overflow: 'scroll',
    //     }}
    //     onScroll={handleScroll}
    //   >
    //     {[...Array(20)].map((_, index) => (
    //       <p key={index}>Content {index}</p>
    //     ))}
    //   </div>
    // </div>
    
    <div className="App"  >
      

      <RouterWeb/>

    </div>

    
  );
}

export default App;
