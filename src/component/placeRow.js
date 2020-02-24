import React from 'react';
import Placelists from './placelist'

export default class PlaceRow extends React.Component{
    render() {

        const allplace = this.props.place.map((ele , id)=>{

       // console.log(ele,id)
             return <Placelists
             addplaceToFavorite={this.props.addplaceToFavorite}

             key={id}
             img={ele.picture}
             title={ele.nameOfplac}
             desc={ele.desc}
             />
        })
        return (
                <div>
                {allplace}
                
                </div>
        )
    }
}

