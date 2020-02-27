import React from 'react';
export default class PlaceRow extends React.Component {

    addfav = (e) => {
        this.props.Addfav()
    }
 
    

    render(){

        const picURL = this.props.img;
        const title = this.props.title;
        const des = this.props.desc;


        return (
            <div className="card">  
             <img className="img" alt="pict" src={picURL}></img>
                <h4>{title}</h4>
                <p>{des}</p>

                <button onClick={this.addfav}>Like</button>
                <button onClick={this.props.clearitem}> Remove </button>


            </div>
        )

    }
}