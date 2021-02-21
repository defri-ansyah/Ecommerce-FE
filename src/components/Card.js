import React, { Component } from 'react';
import '../assets/Card.css'

class Card extends Component {
  render() {
    return (
      <div class="card">
      <img src="img/13.png" alt=""/>
      <div class="card-body">
        <p class="card-title">Handphone Mahal</p>
        <p class="card-price">Rp. 500.000</p>
        <div class="location">
          <p>Jakarta</p>
        </div>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>
    )
  }
}

export default Card;
