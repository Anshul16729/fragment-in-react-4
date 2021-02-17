import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo, useRef } from 'react';
import Cols from './Cols';
import User from './User';

function App() {

  {/*  Send Data Child to Parent Component */ }
  //  function parentAlert(data){
  //    console.log(data);
  //    alert(data.name);
  //  }

  {/*  useMemo */ }
  //  const [count,setCount]=useState(0);
  //  const [item,setItem]=useState(10);
  // const multiCountMemo=useMemo( function multiCount(){
  //   console.log("Multi Count");
  //  return count*5;
  // },[count])

  //useRef Hooks Example
  // let inputRef=useRef(null);
  // function handleInput()
  // {
  //   console.log("Function Call");
  //   inputRef.current.value="1000";
  //   inputRef.current.focus();
  //   inputRef.current.style.color="red";
  //  // inputRef.current.style.display="none";
  // }

  //forwardRef example
  // let inputRef=useRef(null);
  // function updateInput(){
  //   inputRef.current.value="1000";
  //   inputRef.current.style.color="red ";
  //   inputRef.current.focus();
  // }

  //Controlled Component
  // let [val, setVal] = useState("000");
  // let [item, setItem] = useState("");

  //Uncontrolled Component
  //   let inputRef=useRef(null);
  //   let inputRef2=useRef(null);
  //  function submitForm(e){
  //   e.preventDefault();  //it stops reloading of page in react
  //   console.log("Input Field 1 value : "+inputRef.current.value);
  //   console.log("Input Field 2 value : "+inputRef2.current.value);
  //   let input3=document.getElementById("input3").value;  //through JS
  //   console.log("Input Field 3 value : "+input3);
  //   }




  return (
    <div className="App">
      {/* Fragments in React ways to use Freagment
    1.<React.Fragment></React.Fragment>
    2. <Fragment></Fragment>
    3. <></> (iske lie fragment ko import nhi krege) */}
      {/* <h1>Fragment in React !</h1>
     <table>
       <tbody>
         <tr>
           <td>Anshul</td>
           <td>Shrivastava</td>
         </tr>
       </tbody>
     </table> */}

      {/*  Send Data Child to Parent Component */}
      {/* <h1> Lifting State Up !</h1>
      <User alert={parentAlert}/> */}

      {/*  useMemo Hook */}
      {/* <h1> useMemo Hook !</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2> {multiCountMemo}</h2>  */}
      {/* MultiCountMemo function ni h to ise function ki trah call nhi krna hai */}
      {/* <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item*10)}>Update Item</button> */}

      {/* useRef Hooks Example */}
      {/* <h1> useRef Hooks Example !</h1>
      <input type="text" ref={inputRef}/ >
      <button onClick={handleInput}>Handle Input</button> */}

      {/* forwardRef example */}
      {/* <h1> forwardRef Example !</h1>
      <User ref={inputRef}/>
      <button onClick={updateInput}>Update InputBox</button> */}

      {/* Controlled Components */}
      {/* <h1> Controlled Components !</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
      <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
      <h3>Value {val}</h3>
      <h3>Item {item}</h3> */}

      {/* Uncontrolled Components */}
      {/* <h1> Uncontrolled Components !</h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" /><br /><br />
        <input ref={inputRef2} type="text" /><br /><br />
        <input id="input3" type="text" /><br /><br /> 
        <button>Submit</button>
      </form> */}

      {/* HOC Components */}
      <h1> HOC !</h1>
      <HOCRed cmp={Counter}/>
      <HOCGreen cmp={Counter}/>
      <HOCBlue cmp={Counter}/>
    </div>
  );
}

{/* HOC Component */}
function HOCRed(props) {
  return <h2 style={{backgroundColor:'red',width:'100px'}}>Red <props.cmp/></h2>
}

function HOCGreen(props) {
  return <h2 style={{backgroundColor:'green',width:'100px'}}> Green<props.cmp/></h2>
}

function HOCBlue(props) {
  return <h2 style={{backgroundColor:'blue',width:'100px'}}>Blue <props.cmp/></h2>
}

function Counter() {
  const [count,setCount]=useState(0)
  return <div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
}

export default App;
