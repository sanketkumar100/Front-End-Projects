import './App.css';
/*function App(){
  const handler=(e)=>{
    e.target.textContent="dont click"
    

    }
    return(
      <>
      <button onClick={(e)=>{
        handler(e)
      }}>click me</button>
      </>
    )
  }*/
   /* import { useState } from "react";
    import './App.css'; // Don't forget this import
    
    function App() {
      const [cnt, setCnt] = useState(0);
    
      const date = new Date();
      date.setDate(date.getDate() + cnt);
    
      return (
        <header>
          <button onClick={() => setCnt(cnt + 1)}>+</button>
          <p className="count">Count = {cnt}</p>
          <button onClick={() => setCnt(cnt - 1)}>-</button>
          <div className="date">
            <p>{date.toDateString()}</p>
          </div>
        </header>
      );
    }*/
      import { useState } from "react";
      
      function App() {
        const [clr, setclr] = useState("white");
      
        return (
          <>
            {[1, 2, 3, 4, 5].map((ele, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setclr(clr === "white" ? "red" : "white")}
                  style={{ backgroundColor: clr }}
                >
                  {ele}
                </button>
              );
            })}
          </>
        );
      }
      
      export default App;
      
    