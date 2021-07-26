import React, { Component } from 'react'
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar';
import Header from './Header';
import Cardlist from './Cardlist';
import Footer from './Footer';
import Card from './Card';
import Login from './Login';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     items:[],
     names:[]
     
    };
  }
  componentDidMount()
  {
    fetch("https://localhost:44392/api/camps/")
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({items:data});
      
      const datas=this.state.items
      console.log(datas)

      const names=datas.map((element)=>element.name);
      const names=datas.map((element)=>element.name);
      
      
      this.setState({names:names})
      console.log(this.state.names)
      console.log(names)


      


    });


    
  }
  

  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            
            <section className="card-list">
            <Cardlist
            names={this.state.names}
            />
           
            
          </section>
          <Footer/>

          
        </div>

       
    )
}
}
