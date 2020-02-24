import React from 'react';


export default class Placelists extends React.Component{
render() {
    return (
        <div>

            <img alt="pict" src={this.props.img}></img>
            <h4>{this.props.title}</h4>
            <p>{this.props.desc}</p>

                <div className="allbuttons">
            <button type="button" className="buttonfav" onClick={() => this.props.addplaceToFavo()}>Favorite</button> 
                {' '}
            <button type="button" className="buttonlis" onClick={() => this.props.addplaceToFavo()}>Add </button> 
              </div> 
        </div>
    )
    
}
}