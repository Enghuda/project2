import React from 'react';
import DATA from './component/Data';
import PlaceRow from './component/placeRow';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component {



  constructor(props) {
    super(props);
    this.state={
      place:DATA,
      favorite:[],
    }
    //console.log(this.state.place)
    this.setState(this.state.place)
  }
  //add to fav
  addplaceToFavorite = (plc) => {
    const favorite = [...this.state.favorite,plc];
  console.log(plc);
  
   this.setState({favorite})
  }
//for remov fav
  removeplaceToFavorite= (plc) =>{
    const list=[this.state.favorite]
    const index = list.indexOf(plc)
    plc.splice(index,1)
    this.setState({
      favorite:list
    })
  }
  //remov all
  removeAllFave = (plc)=> {
    const list = [...this.state.favorite]
    const index = list.indexOf(plc)
    list.splice(index, 1)
    this.setState({
      favorite: []
    })
  }


  render() {


    return (
      <div>
        <h1> The most mysterious places on Earth</h1>
{/*         //{this.state.rows}
 */}
        <PlaceRow place={this.state.place}/>

        {/* <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck> */}
      </div>
    )
  }
} 
