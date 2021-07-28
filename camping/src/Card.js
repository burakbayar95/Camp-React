import React, { Component } from 'react'



export default class Card extends Component {
 
  
    
  
  
  
    render() {
        return (
         
            <div>
          
            <article className="card">
            <header className="card-header">
              
              <h2>{this.props.item.name}</h2>       
            </header>
            <div className="card-author">
              <a className="author-avatar" href="#">
                <img src={this.props.item.image} />
              </a>
              <svg className="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>    
              <div className="author-name">
                <div className="author-name-prefix">{this.props.item.city}</div>
              Fiyat:  {this.props.item.price===0 ? "Ücretsiz" : this.props.item.price}
              </div>
            </div>
            <div className="tags">
              <a href="#">Şehir: {this.props.item.city}</a>
              <a href="#">{this.props.item.genreId===1 ? "Orman Kampı" : "Sahil Kampı"}</a>
              <a href="#">Türkiye</a>
            </div>
          </article>
         
          </div>
        )
    }
}
