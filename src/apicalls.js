import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box';

export default class Apicalls extends Component {
    constructor(){
        super();
        this.state={monsters:[],
          searchField:''
      };
        
      }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=> this.setState({monsters:users}))
        
      }
      render(){
        const {monsters ,searchField}=this.state;
        const FilteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    

    <div>
      
        <SearchBox placeholder='search here' handleChange={e=>this.setState({searchField:e.target.value})}/>
         <CardList monsters={FilteredMonsters}>
         </CardList>
    </div>
  )}
}
