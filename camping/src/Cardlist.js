import React, { Component } from 'react'
import Card from './Card';
import "./index.css"



export default class Cardlist extends Component {
  
    render() {
        return (
            <div>
                 <section className="card-list">


                 {this.props.items.map((item)=>(
            <Card name={item.name} city={item.city} image={item.image} genreid={item.genreId}/>
          ))}

            
          </section>
            
            </div>
        )
    }
}
