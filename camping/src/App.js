import React, { Component } from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Cardlist from './Cardlist';
import Footer from './Footer';
import Login from './Login'



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     items:[],
     genres:[]
    };
  }
  componentDidMount()
  {
    fetch("https://localhost:44392/api/camps/")
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({items:data});});



  
  }
  
  
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>             
            <Cardlist        
            items={this.state.items}
   
            />
            
       
          <Footer/>

          
        </div>

       
    )
}
}
