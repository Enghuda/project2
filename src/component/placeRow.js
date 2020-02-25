import React from 'react';
//import { IoIosHeart } from 'react-icons/fa';
//import Favorite from './Favorits';



//
export default class PlaceRow extends React.Component {


    handleDetailsClick(place) {
        console.log('Fetching details' + " " + this.props.title)
    }
    render() {

        const picURL = this.props.img;
        const title = this.props.title;
        const des = this.props.desc;

        return (
            <div className="card"
                onClick={() => this.handleDetailsClick(this.props.place)} >
                <img className="img" alt="pict" src={picURL}></img>
                <h4>{title}</h4>
                <p>{des}</p>
                <button type="button" className="buttonfav" onClick={() => this.handleFilterClick('faves')}>Favorite<span className="section-count"></span></button>

            </div>
        )

    }
}