import React from 'react'

class Keypads extends React.Component{
   
    onSelect=(e)=>{
        this.props.onKey(e.target.value)
    }

    onSign=(e)=>{
        this.props.onSignKey(e.target.value)
    }


    render(){
        return(
            <div className="buttons">
                
                <button value="C" onClick={this.onSign}>CLR</button>
                <button value="RT" onClick={this.onSign}>RT</button>
                <button value="%" onClick={this.onSign}>%</button>
                <button value="+" onClick={this.onSign}>+</button><br/>

                <button value="1" onClick={this.onSelect}>1</button>
                <button value="2" onClick={this.onSelect}>2</button>
                <button value="3" onClick={this.onSelect}>3</button>
                <button value="-" onClick={this.onSign}>-</button><br/>

                <button value="4" onClick={this.onSelect}>4</button>
                <button value="5" onClick={this.onSelect}>5</button>
                <button value="6" onClick={this.onSelect}>6</button>
                <button value="*" onClick={this.onSign}>*</button><br/>
               

                <button value="7" onClick={this.onSelect}>7</button>
                <button value="8" onClick={this.onSelect}>8</button>
                <button value="9" onClick={this.onSelect}>9</button>
                <button value="/" onClick={this.onSign}>/</button><br/>

                <button value="0" onClick={this.onSelect}>0</button>
                <button value="." onClick={() => this.props.onKey(".")}>.</button>
                <button value="^" onClick={this.onSign}>SQR</button>
                <button value="=" onClick={() => this.props.onEqualsKey()}>=</button>
                
            </div>
        )
    }
}

export default Keypads