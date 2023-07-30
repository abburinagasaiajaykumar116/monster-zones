import React, { Component } from 'react'

class Stateintro extends Component {
    constructor(){
        super();
        this.state={monsters:[
          {
            name:"AJay"
          },{
            name:"Ram"
          },{
            name:"baji"
          }
        ]};
        
      }
      render(){
  return (
    <div>
         {
            this.state.monsters.map(monster =>( <h1>{monster.name}</h1>))
          }
    </div>
  )}
}

export default Stateintro;