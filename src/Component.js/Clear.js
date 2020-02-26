 import React from 'react';

export default class Remove extends React.Component { 

  
    clear = (e) => { 
    console.log(' Allclear ')
    this.props.clearItem()

}

ClearAlll = (e) => { 
  console.log('Allclear ')
  this.props.ClearAll()

}



  render ()  { 

return (  
  <div>
<button onClick={this.clear}> Remove </button>
<button onClick={this.ClearAlll}> Remove All </button>
</div>
)
  }
}