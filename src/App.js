import {useState} from "react"

import "./App.css"


function Calculator() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")







  const handle = e => {

    setInput(e.target.value)

  }

  const resultRender = () => {

    try {
      setResult(eval(input))

    }
    catch {
      setResult("Error")

    }


  }
  const clean = () => {
    setInput("")
    setResult("")
  }



  return (
    <div className="mainbg">
      <div className="App">
        
      <h1 className="mb-3">Simple Calculator</h1>
      <input className="mb-3" value={input} name="input" type="text" onChange={handle} />
      <span>{result}</span>



      <br />



      <div className="mt-3 mainContainer">
        <div className="firstContainer">
          <button onClick={() => setInput(input + "+")}>+</button>
          <button onClick={() => setInput(input + "-")}>-</button>
          <button onClick={() => setInput(input + "*")}>x</button>
          <button onClick={() => setInput(input + "/")}>/</button>

        </div>

        <div className="secondContainer">
          <div>
            <button onClick={() => setInput(input + "1")}>1</button>
            <button onClick={() => setInput(input + "2")}>2</button>
            <button onClick={() => setInput(input + "3")}>3</button>
            <br />
            <button onClick={() => setInput(input + "4")}>4</button>

            <button onClick={() => setInput(input + "5")}>5</button>

            <button onClick={() => setInput(input + "6")}>6</button>
            <br />
            <button onClick={() => setInput(input + "7")}>7</button>
            <button onClick={() => setInput(input + "8")}>8</button>

            <button onClick={() => setInput(input + "9")}>9</button>
            <br />
            <button onClick={() => setInput(input + "0")}>0</button>
            <button onClick={() => setInput(input + ".")}>.</button>
            <button className="clean" onClick={clean}>clear</button>
            <br />


          </div>
          <button className="equal" onClick={resultRender}>=</button>

        </div>







      </div>

      </div>



    </div>
  )

}

export default Calculator;