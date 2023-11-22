import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
           {/*  <div class="col-lg-6 px-5 text-start">
                <small><i class="fa fa-map-marker-alt me-2"></i>Soberania Alimentaria Formoseña</small>
            </div>     */} 
        </div>

        <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <Link to="/" class="navbar-brand ms-4 ms-lg-0">
               <img src={logo} width={60}/>
            </Link>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/"  class="nav-item nav-link active">Inicio</Link>
                    <Link to="/noticias"  class="nav-item nav-link">Noticias</Link>
                    <Link to="/productos" class="nav-item nav-link">Productos</Link>
                    <Link to="/mapa" class="nav-item nav-link">Puntos</Link>
                    {/* <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <a  class="dropdown-item">Blog Grid</a>
                            <a  class="dropdown-item">Our Features</a>
                            <a  class="dropdown-item">Testimonial</a>
                            <a  class="dropdown-item">404 Page</a>
                        </div>
                    </div> */}
                    <a  class="nav-item nav-link">Contacto</a>
                </div>
                <div class="d-none d-lg-flex ms-2">
                    <Link class="btn-sm-square bg-white rounded-circle ms-3" to="https://www.facebook.com/Programasoberaniaalimentaria">
                        <small class="bi bi-facebook text-body"></small>
                    </Link>
                    <Link class="btn-sm-square bg-white rounded-circle ms-3" to="https://www.instagram.com/soberaniaalimentariaformosena">
                        <small class="bi bi-instagram text-body"></small>
                    </Link>
                    <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small class="fa fa-user text-body"></small>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar