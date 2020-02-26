import React from 'react';
import DATA from './Component.js/Data';
import Placelists from './Component.js/Placelists';
import './App.css';
import Favorite from './Component.js/Favorits';
import PlaceRow from './Component.js/PlaceRow';
import axios from 'axios';



export default class App extends React.Component {


  //events places
  constructor(props) {
    super(props);
    this.state = {
      places: DATA,
      favorites: [], // [{}]
      axdata:""
    }
    //console.log(this.state.places)
  }




  handleAddfavorite = (myPlaces) => {
    const favorites = [...this.state.favorites];
    favorites.push(myPlaces)

    console.log(`add${myPlaces.nameOfplac}`);

    this.setState({ favorites })

  }

  //ha
  handleClearAll = () => {
    let favorites = [...this.state.favorites]
    favorites = []
    console.log(`all remov`)
    this.setState({ favorites })

  }
  handleClearItem = (ele) => {
    const favorites = [...this.state.favorites];
    //favorites.pop(myPlaces);
    const index = favorites.indexOf(ele)
    favorites.splice(index,1)
    console.log(`REmov $ {myPlaces.nameOfplac} `);

    this.setState({ favorites }) //call cha

  }
  getInput = () => {
    axios({
      method: 'get',
      url: "http://worldtimeapi.org/api/ip/77.240.83.201.txt"
    })
      .then(res => {
        console.log('RESPONSE: ', res);
        // console.log('DATA: ', res.data.datetime);
        // this.setState({
        //   axdata: res.data.datetime
        // })
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };

  render() {


    return (
      <div>
        <h1 className="titile"> The Strangest Places on Earth</h1>
        <button onClick={this.getInput}>plase clik</button>
        <h1>{this.state.axdata}</h1>
        <Placelists myPlaces={this.state.places}
          fav={this.state.favorites}
          Addfav={this.handleAddfavorite}
          clear={this.handleClearAll}
          clearitem={this.handleClearItem}
        />


      </div>
    )
  }
} 
