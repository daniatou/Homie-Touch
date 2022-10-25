import React from 'react'
import baniere1 from '../../images/carousel1.png'
import baniere2 from '../../images/carousel2.jpg'

export default function Baniere() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={baniere1} className="d-block w-100 " height={500} alt="Baniere"/>  
    </div>
    <div className="carousel-item">
      <img src={baniere2} className="d-block w-100" alt="Baniere"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
