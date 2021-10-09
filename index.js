function App(){
    const [expression,setExpression] = React.useState("");
    const [answer,setAnswer] = React.useState("");
    const endN = /[.0-9]$/, coma = ".";
    function clear(){
        setExpression("");
        setAnswer("");
    }
    function backspace(){
        setExpression(prev=>prev.slice(0,-1));
    }
    function number(e){
        if(answer!==""){
            setExpression(e.target.value);
            setAnswer("");
        } else {
            let chain = expression.split(/[x+‑/]/);
            if(chain[chain.length-1].indexOf("0")==0&&chain[chain.length-1].length==1){
                setExpression(prev=>prev.slice(0,-1)+e.target.value);
            }
            else{ 
                setExpression(prev=>prev+e.target.value);
            }
        }
    }
    function symbol(e){
        if(answer!==""){
            setAnswer("");
            setExpression(answer+e.target.value);
        } else if(endN.test(expression)) {
            setExpression(prev=>prev+e.target.value);
        }
        else {
            setExpression(prev=>prev.slice(0,-1)+e.target.value);
        }
    }
    function decimal(e){
        let chain = expression.split(/[*+/-]/);
        if(chain[chain.length-1].indexOf(".")===-1){
            setExpression(prev=>prev+".");
        }
    }
    function equals(){
        setAnswer(eval(expression));
    }
    return (
      <div className="grid">
        <div className="display">
          <span className="exp">{expression}</span>
          <span id="display" className="ans">{answer}</span>
        </div>
        <button id="clear" onClick={clear}>
          C
        </button>
        <button id="backspace" onClick={backspace}>
          CE
        </button>
        <button id="divide" value="/" onClick={symbol}>
          /
        </button>
        <button id="seven" value="7" onClick={number}>
          7
        </button>
        <button id="eight" value="8" onClick={number}>
          8
        </button>
        <button id="nine" value="9" onClick={number}>
          9
        </button>
        <button id="multiply" value="*" onClick={symbol}>
          x
        </button>
        <button id="four" value="4" onClick={number}>
          4
        </button>
        <button id="five" value="5" onClick={number}>
          5
        </button>
        <button id="six" value="6" onClick={number}>
          6
        </button>
        <button id="add" value="+" onClick={symbol}>
          +
        </button>
        <button id="one" value="1" onClick={number}>
          1
        </button>
        <button id="two" value="2" onClick={number}>
          2
        </button>
        <button id="three" value="3" onClick={number}>
          3
        </button>
        <button id="subtract" value="-" onClick={symbol}>
          -
        </button>
        <button id="zero" value="0" onClick={number}>
          0
        </button>
        <button id="decimal" onClick={decimal}>
          .
        </button>
        <button id="equals" onClick={equals}>
          =
        </button>
      </div>
    );
}

ReactDOM.render(<App/>,document.getElementById("root"));