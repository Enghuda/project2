import React from 'react';
import PlaceRow from './PlaceRow';

export default class Placelists extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            filter: "all",
            input: ""


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
    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            input: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.input)
        this.props.add(this.state)
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
                    clearitem={() => this.props.clearitem(ele)} />
            </div>
        })

        let fav;
        if (this.state.filter === 'myfav') {
            fav = allfa;
        } else {
            fav = allplace;
        }
        return (
            <div>
                
                <button className="buto" onClick={() => this.handleFilterClick('All')}>All places</button>
                <button className="buto" onClick={() => this.handleFilterClick('myfav')}>My Favorits</button>
                <button className="buto" onClick={() => this.handleDeletallClick()} >Clear All</button>
                <div >
                       <form onSubmit={this.handleSubmit}>
                        <input className="input" type="text" placeholder="what would you like ? " onChange={this.handleChange} />
                        <input className="input2" type="submit" value="Add" />
                    </form>
                </div>
                {fav}
            </div>
        )
    }
}



