import React from 'react';
import PlaceRow from './PlaceRow';

 const Favorite =(props)=>{
  
    const allfav = props.fav.map((ele, id) => {
       // console.log(ele, id)
       return <div>
       
       <PlaceRow

       key={id}
       img={ele.picturepath}
       title={ele.nameOfplac}
       desc={ele.desc}
/*        clearItem={()=>props.clearItem(ele)}
 */
            ClearItem={()=>props.ClearItem(ele)}
            ClearAll={()=>props.ClearAll(ele)}
            edit={()=>props.edit}/>
        </div>
})


//console.log(favorites)
        return(
            <div
         >
             
{allfav}
</div>
        )
    }
    export default Favorite;
