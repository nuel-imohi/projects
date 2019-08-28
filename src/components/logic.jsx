import React from 'react'
import Keypads from '../components/keypads'

class Logic extends React.Component{
    constructor(props){
        super(props);
        this.state={calKeys:[
            0,1,2,3,4,5,6,7,8,9
        ], preVal:0, dispVal:0, signVal:''}
        this.onSelect=this.onSelect.bind(this);
    }

    onSelect=(btnVal)=>{
        let displayVal = "" + this.state.dispVal;
        displayVal = btnVal;
        if(this.state.dispVal===0){
            this.setState({dispVal: displayVal})
        }
        else if(this.state.dispVal!==0){
            this.setState({dispVal: this.state.dispVal+''+btnVal})
        }
       
        //this.setState({dispVal: displayVal})
    }

    handleSignKey =(sign) =>{
        if(sign==='^'){
            this.setState({preVal: 0, dispVal:this.state.dispVal*this.state.dispVal});
        }
        else if(sign==='%'){
            this.setState({preVal: 0, dispVal:this.state.dispVal/100});
        }
        else if(sign==='RT'){
            this.setState({preVal: 0, dispVal:Math.sqrt(this.state.dispVal)});
        }
        else  this.setState({preVal: this.state.dispVal, dispVal:0, signVal:sign});
    }

    handleEqualsKey= () =>{

        let result = 0;
        switch (this.state.signVal){
            case '+':
                result = parseFloat(this.state.preVal)+ parseFloat(this.state.dispVal);
                break;
            case '-':
                result = parseFloat(this.state.preVal)- parseFloat(this.state.dispVal);
                break;
            case '*':
                result = parseFloat(this.state.preVal)* parseFloat(this.state.dispVal);
                break;
            case '/':
                result = parseFloat(this.state.preVal)/parseFloat(this.state.dispVal);
                break;
            default:
                break;
        }

        this.setState({dispVal: result})
    }

    render(){
        return(
            <div>
                <input type="text" className="txtBox" value={this.state.dispVal} readOnly="readonly" placeholder="Enter Number" />
                <Keypads onKey={this.onSelect} calKeys={this.state.calKeys}  onSignKey={this.handleSignKey}
                         onEqualsKey={this.handleEqualsKey} />
            </div>
            
        )
    }
}

export default Logic