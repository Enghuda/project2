import React from 'react';
import DATA from './Component.js/Data';
import Placelists from './Component.js/Placelists';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: DATA,
      //initial value for favorites
      favorites: [], 
      axdata:""
    }
    //console.log(this.state.places)
  }
  //make function to handleaddfavorite
  handleAddfavorite = (myPlaces) => {
    //copy of arry
    const favorites = [...this.state.favorites];
    favorites.push(myPlaces)

  //  console.log(`add${myPlaces.nameOfplac}`);

    this.setState({ favorites })

  }
  handleClearAll = () => {
    let favorites = [...this.state.favorites]
    favorites = []
  //  console.log(`all remov`)
    this.setState({ favorites })

  }
  handleClearItem = (ele) => {
    const favorites = [...this.state.favorites];
    //favorites.pop(myPlaces);
    const index = favorites.indexOf(ele)
    favorites.splice(index,1)
    //console.log(`REmov $ {myPlaces.nameOfplac} `);

    this.setState({ favorites }) //call cha

  }
  additm=(pl)=>{
    let items = this.state.places;
    items.push(pl);
    this.setState({places:items})

  }
  getday() {
    axios({
      method: 'get',
      // "http://worldtimeapi.org/api/timezone/Asia/Riyadh"
      url: "http://worldclockapi.com/api/json/est/now"
    })
      .then(res => {
        console.log('RESPONSE: ', res.data.dayOfTheWeek);
        this.setState({
          axdata: res.data.dayOfTheWeek
        })
      }
      )
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };

  render() {


    return (
      <div>

        <header className="titile"> The Strangest Places on Earth
        <h6 className = "titile">{this.state.axdata}</h6></header> 
{/*         <button className="buto" onClick={() => this.getday()}>what is today's</button>     
 */}        <Placelists myPlaces={this.state.places}
          fav={this.state.favorites}
          Addfav={this.handleAddfavorite}
          clear={this.handleClearAll}
          clearitem={this.handleClearItem}
           add={this.additm}/>
  


      </div>
    )
  }
} 
