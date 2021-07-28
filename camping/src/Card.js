import React, { Component } from 'react'



export default class Card extends Component {
 
  
    
 
  
  
    render() {

      const {name,image,city,price, genreId}=this.props.item
        return (
         
          



            <div className="body">
          
            <article className="card">
            <header className="card-header">
              
              <h2>{name}</h2>       
            </header>
            <div className="card-author">
              <a  className="author-avatar a" href="#">
                <img src={image} />
              </a>
              <svg className="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>    
              <div className="author-name">
                <div className="author-name-prefix">{city}</div>
              Fiyat:  {price===0 ? "Ücretsiz" : price}
              </div>
            </div>
            <div className="tags">
              <a className="a" href="#">Şehir: {city}</a>
              <a className="a" href="#">{genreId===1 ? "Orman Kampı" : "Sahil Kampı"}</a>
              <a className="a" href="#">Türkiye</a>
            </div>
          </article>
         
          </div>
        )
    }
}
