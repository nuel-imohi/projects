import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Logic from './components/logic'

class App extends React.Component{
  

  render(){
    return(
      <div className="body"><br/><br/>
        <Logic onPressSign={this.onSelectSign} />
      </div>
    )
  }
}
export default App;
