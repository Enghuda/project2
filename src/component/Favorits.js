import React from 'react';

export default  class Favorite extends React.Component{

    constructor(props) {
    super(props)

    this.state = {
        isFave: false

    };
}


    handleClick= (e) =>{
        e.stopPropagation()
        console.log("handling Fave click!")
        this.setState({ isFave: !this.state.isFave });

    };




    render(){
        const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
        const message = this.state.isFave ? "remove_from_queue" : "add_to_queue";
        return(
            <div onClick={this.handleClick}
            className={`film-row-fave ${isFave}`}>
            <p className="material-icons">{message}</p>
</div>
        )
    }
}