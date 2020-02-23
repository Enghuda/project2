import React from 'react';
import City from './component/city';
import CITYinfo from './component/CITYinfo';



export default class App extends React.Component{

 constructor(props) {
    super(props);
    this.state = {

     citys:[],
    };
  }

    addcity=(e)=>{
      e.preventDefault();
      console.log('hi');
      this.setState({City:this.state.City})
    } 

    onboxchanges=(e)=>{
      console.log(e.target.value);

      this.setState({newcity:e.target.value})
    }
  render(){

    return(
      <div>

        <h1>Hi </h1>
        <div className="container">
          
        <City citys={this.state.citys}/>
        <form >
           <input
                 type="text" placeholder="Enter" value={this.state.newcity}onChange={this.onboxchanges} />
                   
          <button onClick={this.addcity}>add</button>
        </form> 
        </div>
      </div>
    )
  }
} 
