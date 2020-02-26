import React from 'react';
//import { IoIosHeart } from 'react-icons/fa';



//
export default class PlaceRow extends React.Component {

    addfav = (e) => {
        this.props.Addfav()
    }
    /*  clear = (e) => { 
        console.log(' Allclear ')
        this.props.clear()
    
    }
    
    clearitem = (e) => { 
      console.log('Allclear ')
      this.props.clearitem()
    
    } */

    render() {

        const picURL = this.props.img;
        const title = this.props.title;
        const des = this.props.desc;


        return (
            <div className="card"
            >                <img className="img" alt="pict" src={picURL}></img>
                <h4>{title}</h4>
                <p>{des}</p>

                <button onClick={this.addfav}>Like</button>
                <button onClick={this.props.clearitem}> Remove </button>
            </div>
        )

    }
}