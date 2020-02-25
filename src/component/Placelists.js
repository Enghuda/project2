import React from 'react';
import PlaceRow from './PlaceRow';
//import Favorite from './Favorits';
//Books
export default class Placelists extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            filter: "all"

        };
    }
    handleFilterClick = filter => {
         console.log('Setting')

        this.setState({ filter: filter });
    };
    render() {

       const passfav = this.props.allPlaces.map((ele , id)=>{
           return 
       })


        const allplace = this.props.allPlaces.map((ele, id) => {
             console.log(ele, id)
            return <PlaceRow

                key={id}
                img={ele.picturepath}
                title={ele.nameOfplac}
                desc={ele.desc}

            />
        })

        return (

            <div className="film-list">
                <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>

                    <button type="button" className="buttonlis" onClick={() => this.handleFilterClick('faves')}>ALL <span className="section-count">{this.props.allPlaces.length}</span></button>

                    { <button type="button" className="buttonfav" onClick={() => this.handleFilterClick('faves')}>Favorite<span className="section-count">0</span></button> }

                </div>
                {allplace}

            </div>
        )
    }
}



        /*     const allfav = this.props.favorite.map((ele , id)=>{

               console.log(ele,id)
                    return <PlaceRow
       
                    key={id}
                    img={ele.picturepath}
                    title={ele.nameOfplac}
                    desc={ele.desc}
                    
                    />


       }) */
