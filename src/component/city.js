import Citylist from './citylist';
import React from 'react';

export default class City extends React.Component{
    render(){
            const all = this.props.citys.map((ele,i)=>{
                return <Citylist c={ele} key={i}/>;
            });
        return( 
        <div>
          {all}

         </div>
    );
}
}