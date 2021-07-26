import React, { Component } from 'react'
import Card from './Card';



export default class Cardlist extends Component {
    render() {
        return (
            <div>
                 <section className="card-list">


                     




          {this.props.names.map((name,i)=>(
            <Card key={i} name={name}/>
          ))}



           
          
            
          </section>
            
            </div>
        )
    }
}
