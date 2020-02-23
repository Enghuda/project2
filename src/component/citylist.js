import React from 'react';
export default class Citylist extends React.Component{
    render(){
        return(
            <div>

               <p>cityName: {this.props.post.c}</p>
               <p>img-pathe: {this.props.post.c}</p>
               <p>desc: {this.props.c}</p>

            </div>
        );
    }
}