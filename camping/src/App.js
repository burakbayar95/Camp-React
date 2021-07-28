import React, { Component } from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Cardlist from './Cardlist';
import Footer from './Footer';
import Login from './Login'
import Search from './Search';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     items:[],
     loading:false
     
    };
  }
  componentDidMount()
  {
    this.setState({loading:true})
    fetch("https://localhost:44392/api/camps/")
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({items:data, loading:false});});

  }


  
  searchCampsbyCity=(term)=>{
    fetch(`https://localhost:44392/api/camps/city/${term.toLowerCase()}`)
    .then((res)=>res.json())
    .then((data)=>{data===null||data==="" ? data="buraya tüm data değerleri gelecek" :(
      this.setState({items:data}));});
  }

  searchCampsbyGenre=(term)=>{
    fetch(`https://localhost:44392/api/camps/city/${term.toLowerCase()}`)
    .then((res)=>res.json())
    .then((data)=>{ 
      this.setState({items:data});});
  }



  
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Search searchCampsbyCity={this.searchCampsbyCity}/>  

            {
              this.state.loading ? 
              (
<div className="pinner-border text-info" role="status">
  <span className="sr-only">Loading...</span>
</div>
              ): <Cardlist loading={this.state.loading} items={this.state.items}/>
              
            }           
            
   
            
            
       
          <Footer/>

          
        </div>

       
    )
}
}
