import PropTypes from "prop-types";
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mostrarProductos } from "../Redux/Actions/productos.action";
import img1 from '../assets/img/carousel-1.jpg'
import img2 from '../assets/img/carousel-2.jpg'
import logo from '../assets/img/logo.png'
import about from '../assets/img/about.jpg'
import icon1 from '../assets/img/icon-1.png'
import icon2 from '../assets/img/icon-2.png'
import icon3 from '../assets/img/icon-3.png'
import imgCronograma from "../assets/img/fotos/interior1.jpg"
import './Styles/Inicio.css'
import Navbar from '../Components/Layouts/Navbar'
import Footer from '../Components/Layouts/Footer'
import videoInicio from '../assets/img/video/video3.mp4'
import { mostrarCronograma } from "../Redux/Actions/cronograma.action"
const Inicio = ({mostrarProductos, producto: { productos, loading }, mostrarCronograma, cronogramaData:{ cronograma, loadingCronograma}}) => {
    const [showComponent, setShowComponent] = useState(true);
    const [productosNuevos, setProductosNuevos] = useState([])

    const handleVideoEnd = () => {
        setShowComponent(false);
      };

      useEffect(()=>{
        mostrarProductos()
        mostrarCronograma()
      },[])

      useEffect(()=>{
        if(productos.length > 0){
            setProductosNuevos(productos.slice(0, 4))
        }
      }, [productos])

     /*  console.log(cronograma) */
  return (
    <>

    {showComponent ?
    <>
    <Navbar/>
     <div id="wrapper"> 
     <video id="video_background" src={videoInicio} preload="auto" onEnded={handleVideoEnd} autoPlay width="100%" height="100%"/>
     </div>
    </>
    
    :
    <Navbar/>
}
    {/* <!-- Carousel Start --> */}
    <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src={img2} alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-lg-7">
                                    <h1 class="display-2 mb-5 animated slideInDown">Soberania Alimentaria Formoseña</h1>
                                    <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5">Productos</a>
                                    <a href="" class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Puntos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    {/* <!-- Carousel End --> */}

    {/* <!-- About Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="about-img position-relative overflow-hidden p-5 pe-0">
                        <img class="img-fluid w-100" style={{borderRadius:"15px"}} src={about}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="display-6 mb-4">¿Qué es el programa S.A.F?</h1>
                    <p class="mb-4">
                    El programa Soberanía Alimentaria Formoseña o por sus siglas S.A.F es un programa impulsado por la Subsecretaría de Defensa al 
                    Consumidor y Usuarios dependiente del Ministerio de Economía, Haciendas y Finanzas 
                    que busca fortalecer y promocionar los canales de comercialización de los alimentos producidos por nuestras 
                    familias de productores paipperas; generando espacios de comercialización que permitan la venta directa del 
                    productor al consumidor eliminando la intermediación.
                    </p>
                    <p><i class="fa fa-check text-primary me-3"></i>DEL PRODUCTOR A TU MESA A UN PRECIO JUSTO</p>
                    {/* <p><i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                    <p><i class="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p> */}
                    <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Ver Mas</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}

   {/*  <!-- Feature Start --> */}
    <div class="container-fluid bg-light bg-icon my-5 py-6">
        <div class="container">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <h1 class="display-5 mb-3">Cronograma Semanal</h1>
                {/* <p>Esta semana soberania alimentaria se encontra en los siguientes puntos:</p> */}
                <div><button class="btn btn-primary rounded-pill py-3 px-5">Mapa</button></div>
            </div>
           {/*  <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src={icon1} alt=""/>
                        <h4 class="mb-3">Natural Process</h4>
                        <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src={icon2} alt=""/>
                        <h4 class="mb-3">Organic Products</h4>
                        <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src={icon3} alt=""/>
                        <h4 class="mb-3">Biologically Safe</h4>
                        <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
            </div> */}
            <div class="page-content-cronograma">
                {
                    cronograma?.length > 0 && cronograma[0]?.detalles?.map((calendario)=>{
                        console.log(calendario)
                        return(
                            <div class="card cardCronograma" style={{backgroundImage: `url("https://res.cloudinary.com/dabtnpikz/image/upload/v1684154648/hxtxlkzz2l0yrrdyhurd.jpg")`, backgroundSize:"cover"}}>
                                <div class="contentCronograma">
                                    <h2 class="titleCronograma">MIERCOLES 19/04/2023</h2>
                                    <h6>
                                        <p class="copy-cronograma">📌 El Colorado</p>
                                    </h6>
                                </div>
                            </div>
                        )
                    })
                }
                

                

            </div>
        </div>
    </div>
    {/* <!-- Feature End --> */}

    {/* <!-- Product Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <h1 class="display-5 mb-3">Nuevos Productos</h1>
                        <p>Lista De Los Nuevos Productos De Soberania Alimentaria Formoseña.</p>
                    </div>
                </div>
                {/* <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                        </li>
                        <li class="nav-item me-0">
                            <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-4">

                        {
                            productosNuevos?.length > 0 ?
                            <>
                            {
                                productosNuevos?.map((productoLista) =>{
                                    return(
                                        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="product-item">
                                                <div class="position-relative bg-light overflow-hidden">
                                                    <img class="img-fluid w-100" src={productoLista?.img} alt=""/>
                                                    <div class="bg-success rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nuevo</div>
                                                </div>
                                                <div class="text-center p-4">
                                                    <a class="d-block h5 mb-2" href="">{productoLista?.nombre}</a>
                                                    <span class="text-primary me-1">$ {productoLista?.precio}</span>
                                                    {/* <span class="text-body text-decoration-line-through">$29.00</span> */}
                                                </div>
                                                <div class="d-flex border-top">
                                                    <small class="w-50 text-center border-end py-2">
                                                        <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>Ver Producto</a>
                                                    </small>
                                                    <small class="w-50 text-center py-2">
                                                        <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Ver Proveedor</a>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </>
                            :
                            null
                        }

                        <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a class="btn btn-primary rounded-pill py-3 px-5" href="">Ver Todos Los Productos</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Product End --> */}

    {/* <!-- Firm Visit Start --> */}
    <div class="container-fluid bg-primary bg-icon mt-5 py-6">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                    <h1 class="display-5 text-white mb-3">Netamente Formoseño</h1>
                    <p class="text-white mb-0">Nuestro propio Programa.</p>
                </div>
                <div class="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <a class="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Ver Videos</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Firm Visit End --> */}

   {/*  <!-- Testimonial Start --> */}
    {/* <div class="container-fluid bg-light bg-icon py-6 mb-5">
        <div class="container">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <h1 class="display-5 mb-3">Customer Review</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div class="testimonial-item position-relative bg-white p-5 mt-4">
                    <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 rounded-circle" src="../src/assets/img/testimonial-1.jpg" alt=""/>
                        <div class="ms-3">
                            <h5 class="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item position-relative bg-white p-5 mt-4">
                    <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 rounded-circle" src="../src/assets/img/testimonial-2.jpg" alt=""/>
                        <div class="ms-3">
                            <h5 class="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item position-relative bg-white p-5 mt-4">
                    <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 rounded-circle" src="../src/assets/img/testimonial-3.jpg" alt=""/>
                        <div class="ms-3">
                            <h5 class="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item position-relative bg-white p-5 mt-4">
                    <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 rounded-circle" src="../src/assets/img/testimonial-4.jpg" alt=""/>
                        <div class="ms-3">
                            <h5 class="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Testimonial End --> */}

 {/*    <!-- Blog Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"  style={{maxWidth: '500px'}}>
                <h1 class="display-5 mb-3">Ultimas Noticias</h1>
                <p>Las ultimas noticias publicadas por soberania alimentaria formoseña.</p>
            </div>
            <div class="row g-4">

                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img class="img-fluid" src="../src/assets/img/blog-1.jpg" alt=""/>
                    <div class="bg-light p-4">
                        <a class="d-block h5 lh-base mb-4" href="">"Yerba Mate" Nuevo Producto En Soberania Alimentaria</a>
                        <div class="text-muted border-top pt-4">
                            {/* <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small> */}
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>Miercoles, 27 De Septiembre</small>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <img class="img-fluid" src="../src/assets/img/blog-2.jpg" alt=""/>
                    <div class="bg-light p-4">
                        <a class="d-block h5 lh-base mb-4" href="">La venta se realizara en el barrio la floresta...</a>
                        <div class="text-muted border-top pt-4">
                            {/* <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small> */}
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>Jueves, 28 De Septiembre</small>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <img class="img-fluid" src="../src/assets/img/blog-3.jpg" alt=""/>
                    <div class="bg-light p-4">
                        <a class="d-block h5 lh-base mb-4" href="">Se vendio mas de 400kg de tomate paipperos en el barrio floresta...</a>
                        <div class="text-muted border-top pt-4">
                            {/* <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small> */}
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>Viernes, 29 De Septiembre</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}

{/*     <!-- Footer Start --> */}
        <Footer/>
  {/*   <!-- Footer End --> */}


   {/*  <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-success btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>
    </>
  )
}

const mapStateToProps = (state) => ({
    producto: state.productosReducer,
    cronogramaData: state.cronogramaReducer
  });

  export default connect(mapStateToProps, {mostrarProductos, mostrarCronograma})(
    Inicio
  );