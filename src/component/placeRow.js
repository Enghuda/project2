import React from 'react';

export default class PlaceRow extends React.Component{
    render() {
             return <div>
                        <div>
                        <img width="200" src={this.props.ele.picture} />
                        </div>
                <div>
                  {this.props.ele.nameOfplac}
                </div>
                        <div>
                        <p>{this.props.ele.desc}</p>
                        </div>
              </div>
        }
}
