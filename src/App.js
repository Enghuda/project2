import React from 'react';
import DATA from './component/Data';
import Placelists from './component/Placelists';
import './App.css';
import Favorite from './component/Favorits'



export default class App extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      places: DATA,
      favorite: [], // [{}]
    }
    console.log(this.state.place)
    // this.setState(this.state.places)
  }

// pass tis function to plac
//pass item {}as parameter
//add {} to fav[]

  //add to fav
 /*  addPlaceToFavorite = (plc) => {
  this.setState(  {     favorite : [ {}, {} ]      }    )

  } */

/*   removeplaceToFavorite= (plc) =>{
    const list=[this.state.favorite]
    const index = list.indexOf(plc)
    plc.splice(index,1)
    this.setState({
      favorite:list
    })
  } */
  //remov all
  removeAllFave = (plc)=> {
    const list = [this.state.favorite]
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
        <button onClick={this.addPlaceToFavorite}>chzange state</button>
        <Placelists className="container" allPlaces={this.state.places}/>
         <Placelists className="container" allPlaces={this.state.favorite} /> 
      </div>
    )
  }
} 
