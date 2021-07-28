import React, { Component } from 'react'
import Card from './Card';
import "./index.css"



export default class Cardlist extends Component {
  
    render() {
        return (
            
                
<section className="card-list">

                 {this.props.items.map((item)=>(
                     
            <Card key={item.id} item={item}/>
            
          ))}

            
            </section>
           
            
        )
    }
}
