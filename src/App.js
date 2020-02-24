import React from 'react';
import DATA from './component/Data';
import PlaceRow from './component/placeRow';
import './App.css';
import Favorite from './component/Favorits'



export default class App extends React.Component {



  constructor(props) {
    super(props);
    this.state={
      place:DATA,
      favorite:[],
    }
    //console.log(this.state.place)
    this.setState(this.state.place)
  }
  //add to fav
  addplaceToFavorite = (plc) => {
    const favorite = [...this.state.favorite,plc];
  console.log(plc);
  
   this.setState({favorite})
  }
//for remov fav
  removeplaceToFavorite= (plc) =>{
    const list=[this.state.favorite]
    const index = list.indexOf(plc)
    plc.splice(index,1)
    this.setState({
      favorite:list
    })
  }
  //remov all
  removeAllFave = (plc)=> {
    const list = [...this.state.favorite]
    const index = list.indexOf(plc)
    list.splice(index, 1)
    this.setState({
      favorite: []
    })
  }


  render() {


    return (
      <div  >
        <h1 className="titile"> The Strangest Places on Earth</h1>
{/*         //{this.state.rows}
 */}
        <PlaceRow className="container" place={this.state.place}/>
        
      </div>
    )
  }
} 
