import PropTypes from "prop-types";
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from '../Components/Layouts/Navbar'
import Footer from '../Components/Layouts/Footer'
import {mostrarNoticias} from '../Redux/Actions/noticias.action'
import { fechaTexto } from "../Components/Helpers/formateadorFecha";
import { Link } from "react-router-dom";
import Spinner from "../Components/Layouts/Spinner";
import './styleInfo.css'

import indumar from '../assets/img/blog-1.jpg'
import nutricion from '../assets/img/Nutricion.jpg'
import bromatologia from '../assets/img/alimentoss.png'
const Noticias = ({mostrarNoticias, noticia: { noticias, loadingNoticias },}) => {

    useEffect(()=>{
        mostrarNoticias()
    },[])

  /*   console.log(noticias)
    console.log(loadingNoticias) */
  return (
    <div>
        <Navbar/>
          {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header page-headerNoticias wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <h1 class="display-3 mb-3 animated slideInDown">Noticias</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a class="text-body" href="#">Inicio</a></li>
                    <li class="breadcrumb-item"><a class="text-body" href="#">Noticias</a></li>
                    
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

   

    {
        loadingNoticias ? <div align="center" style={{margin: "50px"}}><Spinner/></div> :

        <div class="container-xxl py-6">
        <div class="container">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <h1 class="display-5 mb-3">Noticias</h1>
                <p>Las Últimas Noticias De Soberanía Alimentaria Formoseña.</p>
            </div>

<section class="bg0">
		<div class="container">
			<div class="row m-rl--1">
				<div class="col-md-6 p-rl-1 p-b-2">
					<div class="bg-img1 size-a-3 how1 pos-relative" >
						<a href="blog-detail-01.html" class="dis-block how1-child1 trans-03"></a>

						<div class="flex-col-e-s s-full p-rl-25 p-tb-20">
							

							<h3 class="how1-child2 m-t-14 m-b-10">
								<a href="blog-detail-01.html" class="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
									Microsoft quisque at ipsum vel orci eleifend ultrices
								</a>
							</h3>

							<span class="how1-child2">
								<span class="f1-s-4 cl11">
									Jack Sims
								</span>

								<span class="f1-s-3 cl11 m-rl-3">
									-
								</span>

								<span class="f1-s-3 cl11">
									Feb 16
								</span>
							</span>
						</div>
					</div>
				</div>

				<div class="col-md-6 p-rl-1">
					<div class="row m-rl--1">
						<div class="col-12 p-rl-1 p-b-2">
							<div class="bg-img3 size-a-4 how1 pos-relative" >
								<a href="blog-detail-01.html" class="dis-block how1-child1 trans-03"></a>

								<div class="flex-col-e-s s-full p-rl-25 p-tb-24">
									

									<h3 class="how1-child2 m-t-14">
										<a href="blog-detail-01.html" class="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03">
											London ipsum dolor sit amet, consectetur adipiscing elit.
										</a>
									</h3>
								</div>
							</div>
						</div>

						<div class="col-12 p-rl-1 p-b-2">
							<div class="bg-img2 size-a-5 how1 pos-relative" >
								<a href="blog-detail-01.html" class="dis-block how1-child1 trans-03"></a>

								<div class="flex-col-e-s s-full p-rl-25 p-tb-24">
									

									<h3 class="how1-child2 m-t-14">
										<a href="blog-detail-01.html" class="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03">
											London ipsum dolor sit amet, consectetur adipiscing elit.
										</a>
									</h3>
								</div>
							</div>
						</div>

					
					</div>
				</div>
			</div>
		</div>
	</section>

       
<header>

<h1>Categorias</h1>
<div className="categorias row" style={{position:"relative", justifyContent:"center"}}>


          

<div class="col-md-3 pl-0 pr-0">
                <div class="card">
                    <img class="card-img" src={nutricion} alt=""/>
                    <div class="card-img-overlay">
                        <h5>Nutrición</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 pl-0 pr-0">
                <div class="card">
                    <img class="card-img" src={bromatologia} alt=""/>
                    <div class="card-img-overlay">
                        <h5>Bromatologia</h5>
                    </div>
                </div>
            </div>

          
</div>

</header>

<br /><br /><br />

            <div class="row g-4">
                {
                    noticias?.map((item)=>{
                        return(
                            
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <Link to={`/noticia/${item?.uid}`} >
                                    <img class="img-fluid" src={item?.img} alt="Portada"/>
                                    <div class="bg-light p-4">
                                        <a class="d-block h5 lh-base mb-4" href="">{item.titulo}</a>
                                        <div class="text-muted border-top pt-4">
                                            {/* <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small> */}
                                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>{fechaTexto(item?.createdAt)}</small>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                           
                        )
                    })
                }
                {/* <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <a class="btn btn-primary rounded-pill py-3 px-5" href="">Load More</a>
                </div> */}
            </div>
        </div>
    </div>
    }
    

    {
        noticias?.length > 0 
        ?
        <div className="fadeInUp">
            <Footer/>
        </div>
       
        :
        null
    }
    </div>
  )
}

const mapStateToProps = (state) => ({
    noticia: state.noticiasReducer
  });

  export default connect(mapStateToProps, {mostrarNoticias})(
    Noticias
  );