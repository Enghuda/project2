import React from 'react';
import PlaceRow from './PlaceRow';

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
    handleDeletallClick = (e) => {
        this.props.clear()

    }
    handleDeletallClickitem = (e) => {
        this.props.clearitem()

    }


    render() {

        const allplace = this.props.myPlaces.map((ele, id) => {
            return <div>
                <PlaceRow

                    key={id}
                    img={ele.picturepath}
                    title={ele.nameOfplac}
                    desc={ele.desc}
                    Addfav={() => this.props.Addfav(ele)} 
                    />
            </div>
        })
        const allfa = this.props.fav.map((ele, id) => {
            return <div>
                <PlaceRow

                    key={id}
                    img={ele.picturepath}
                    title={ele.nameOfplac}
                    desc={ele.desc}
                    Addfav={() => this.props.Addfav(ele)} 
                    clearitem={() =>this.props.clearitem(ele)}/>
            </div>
        })

        let city;
        if (this.state.filter === 'myfav') {
            city = allfa;
        } else {
            city = allplace;
        }
        return (

            <div >
                <div className="buto"> 
                <button className="buto" onClick={() => this.handleFilterClick('All')}>All places</button>
                <button className="buto" onClick={() => this.handleFilterClick('myfav')}>My Favorits</button>
                <button className="buto" onClick={() => this.handleDeletallClick()} >Clear All</button>
{/*                 <button className="buto" onClick={() => this.handleDeletallClickitem()} >Clear</button>
 */}
                    </div>

                {city}
            </div>
        )
    }
}



