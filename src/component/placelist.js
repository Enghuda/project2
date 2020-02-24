import React from 'react';
import { IoIosHeart } from 'react-icons/fa';
 
//Book
export default class Placelists extends React.Component{
render() {
    return (
        <div className="card">

            <img className="img" alt="pict" src={this.props.img}></img>
            <h4 className="tit">{this.props.title}</h4>
            <p className="prg">{this.props.desc}</p>

                <div>
            <button type="button" className="buttonfav" onClick={() => this.props.addplaceToFavo()}>Favorite</button> 
                {' '}
{/*                 <i class="IoIosHeart" onClick={() => this.props.addplaceToFavo()}>Favorite </i>
 */}            <button type="button" className="buttonlis" onClick={() => this.props.addplaceToFavo()}>Add </button> 
              </div> 
        </div>
    )
    
}
}