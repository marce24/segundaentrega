import React from 'react'
import Products from './Products'

// Carousel con imagenes del Home y llamada a <Products/>

function Home() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/slider/slider-img4.jpg" className="d-block w-100" alt="primer slide" height="auto"/>
              <div className="carousel-caption d-none d-md-block">
                <h1>Los mejores productos orgánicos!</h1>
                <p>Envíos a la puerta de tu casa.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/slider/slider-img1.jpg" className="d-block w-100" alt="segundo slide" height="auto"/>
              <div className="carousel-caption d-none d-md-block">
                <h1>100% orgánicos y de productores locales</h1>
                <p>Del campo directo a tu puerta.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/slider/slider-img2.jpg" className="d-block w-100" alt="tercer slide" height="auto"/>
              <div className="carousel-caption d-none d-md-block">
                <h1>Precios inigualables</h1>
                <p>Productos sin intermediarios.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/slider/slider-img5.jpg" className="d-block w-100" alt="cuarto slide" height="auto"/>
              <div className="carousel-caption d-none d-md-block">
                <h1>Envíos a todo el país</h1>
                <p>Con nuestro delivery Orgánico.</p>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previo</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
      <Products />
    </div>
  )
}

export default Home