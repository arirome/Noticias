import PropTypes from "prop-types";
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {mostrarNoticias} from '../Redux/Actions/noticias.action'
import Navbar from "../Components/Layouts/Navbar";
import { fechaTexto } from "../Components/Helpers/formateadorFecha";
import { Link, useNavigate } from 'react-router-dom';
import parse from "html-react-parser";
import { URL } from "../Components/Helpers/peticiones";
import { useParams } from 'react-router';
import Spinner from "../Components/Layouts/Spinner";
const Noticia_detalle = ({mostrarNoticias, noticia: { noticias },}) => {
   
    const [loadingNoticia, setLoadingNoticia] = useState(false)
    const [noticia, setNoticia] = useState([])
    const {idNoticia} = useParams();
    const cargarNoticia = async () => {
        setLoadingNoticia(true)
        let res = await fetch(`${URL}/ver-noticia-unica/${idNoticia}`)
         /* console.log(res) */
         const body = await res.json()
         /* console.log(body) */
         setNoticia(body)
         setLoadingNoticia(false)
    }

    useEffect(()=>{
        mostrarNoticias()
        cargarNoticia()
    },[idNoticia])

    const [descripcionNoticia, setDescripcionNoticia] = useState("")
    /* console.log(noticia) */
    useEffect(()=>{
        if(noticia?.titulo){
            let desc = parse(noticia?.descripcion)
            setDescripcionNoticia(desc) 
        }
    },[noticia])
   /*  console.log(noticia) */

   const [noticiasLista, setNoticiasLista] = useState([])
   useEffect(()=>{
        if(noticias?.length > 0 ){
           
            let min = 0
            let max = noticias?.length
            let distanciaMaxima = 5
            const numero1 = Math.floor(Math.random() * (max - min - distanciaMaxima + 1)) + min;
            const maxNumero2 = Math.min(max, numero1 + distanciaMaxima);
            const numero2 = numero1 + Math.floor(Math.random() * (maxNumero2 - numero1)) + 3;
            /* console.log(numero1, numero2) */
            let nuevasNoticias = noticias?.splice(numero1,numero2)
            setNoticiasLista(nuevasNoticias)
        }

   },[noticias])
    return (
    <div>
          <Navbar/>

                {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header page-headerNoticias wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <h1 class="display-3 mb-3 animated slideInDown">Noticias</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><Link to="/inicio" class="text-body" href="#">Inicio</Link></li>
                    <li class="breadcrumb-item"><Link to="/noticias" class="text-body" href="#">Noticias</Link></li>
                    <li class="breadcrumb-item"><Link to="/noticias" class="text-body" href="#">Noticia</Link></li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

         {/*  <!-- News With Sidebar Start --> */}
    {
        loadingNoticia ? <div align="center" style={{margin: "50px"}}><Spinner/></div>
        :
        <div class="container-fluid py-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    {/* <!-- News Detail Start --> */}
                    <div class="position-relative mb-3">
                        <img class="img-fluid w-100" src={noticia?.img} alt="portada" style={{objectFit: "cover"}}/>
                        <div class="overlay position-relative bg-light">
                            <div class="mb-3">
                                
                                <span class="px-1">/</span>
                                <span>{fechaTexto(noticia?.fecha)}</span>
                            </div>
                            <div>
                                <h3 class="mb-3">{noticia?.titulo}</h3>
                                <div>
                                    {descripcionNoticia}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                 {/*    <!-- News Detail End -->

                    <!-- Comment List Start --> */}
                   {/*  <div class="bg-light mb-3" style={{padding: "30px"}}>
                        <h3 class="mb-4">3 Comments</h3>
                        <div class="media mb-4">
                                <img src="img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                            <div class="media-body">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                    Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                    consetetur at sit.</p>
                                <button class="btn btn-sm btn-outline-secondary">Reply</button>
                            </div>
                        </div>
                        <div class="media">
                            <img src="img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                            <div class="media-body">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                    Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                    consetetur at sit.</p>
                                <button class="btn btn-sm btn-outline-secondary">Reply</button>
                                <div class="media mt-4">
                                    <img src="img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                    <div class="media-body">
                                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                            labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                            eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                            ipsum diam tempor consetetur at sit.</p>
                                        <button class="btn btn-sm btn-outline-secondary">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="bg-light mb-3" style={{padding: "30px"}}>
                        <h3 class="mb-4">Leave a comment</h3>
                        <form>
                            <div class="form-group">
                                <label for="name">Name *</label>
                                <input type="text" class="form-control" id="name"/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" class="form-control" id="email"/>
                            </div>
                            <div class="form-group">
                                <label for="website">Website</label>
                                <input type="url" class="form-control" id="website"/>
                            </div>

                            <div class="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                            </div>
                            <div class="form-group mb-0">
                                <input type="submit" value="Leave a comment"
                                    class="btn btn-primary font-weight-semi-bold py-2 px-3"/>
                            </div>
                        </form>
                    </div> */}
                  
                </div>

                <div class="col-lg-4 pt-3 pt-lg-0">
                   {/*  <!-- Social Follow Start --> */}
                    <div class="pb-3">
                        <div class="bg-light py-2 px-4 mb-3">
                            <h3 class="m-0">Nuestras Redes</h3>
                        </div>
                        <div class="d-flex mb-3">
                            <a href="https://www.facebook.com/Programasoberaniaalimentaria" class="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2 mx-1" style={{background: "#39569E"}}>
                                <small class="fab fa-facebook-f mr-2"></small><small> Facebook</small>
                            </a>
                            <a href="https://www.instagram.com/soberaniaalimentariaformosena" class="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2 mx-1" style={{background: "#C8359D"}}>
                                <small class="fab fa-instagram mr-2"></small><small> Instagram</small>
                            </a>
                        </div>
                       
                        <div class="d-flex mb-3">
                            <a href="https://www.youtube.com/@soberaniaalimentariafsa" class="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2 mx-1" style={{background: "#DC472E"}}>
                                <small class="fab fa-youtube mr-2"></small><small> Youtube</small>
                            </a>
                            
                        </div>
                    </div>
                    {/* <!-- Social Follow End -->

                    <!-- Newsletter Start --> */}
                    {/* <div class="pb-3">
                        <div class="bg-light py-2 px-4 mb-3">
                            <h3 class="m-0">Otras Noticias</h3>
                        </div>
                        <div class="bg-light text-center p-4 mb-3">
                            <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                            <div class="input-group" style={{width: "100%"}}>
                                <input type="text" class="form-control form-control-lg" placeholder="Your Email"/>
                                <div class="input-group-append">
                                    <button class="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                            <small>Sit eirmod nonumy kasd eirmod</small>
                        </div>
                    </div> */}
                 {/*    <!-- Newsletter End -->

                    <!-- Ads Start --> */}
                    <div class="mb-3 pb-3" align="center">
                        <a href=""><img class="img-fluid" src="../../src/assets/img/logo.png" alt="Logo" width={"100vh"}/></a>
                    </div>
                   {/*  <!-- Ads End -->

                    <!-- Popular News Start --> */}
                    <div class="pb-3">
                        <div class="bg-light py-2 px-4 mb-3">
                            <h3 class="m-0">Otras Noticias</h3>
                        </div>

                        {
                            noticiasLista?.map((lista)=>{
                                return(
                                    <div class="d-flex mb-3">
                                        <img src={lista?.img} style={{width: "100px", height: "100px", objectFit: "cover"}}/>
                                        <div class="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: "100px"}}>
                                            <div class="mb-1" style={{fontSize: "13px"}}>
                                            {/*  <a href="">Technology</a>
                                                <span class="px-1">/</span> */}
                                                <span>{fechaTexto(lista?.fecha)}</span>
                                            </div>
                                            <Link class="h6 m-0" to={`/noticia/${lista?.uid}`}>{lista?.titulo}</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                   {/*  <!-- Popular News End -->

                    <!-- Tags Start --> */}
                   {/*  <div class="pb-3">
                        <div class="bg-light py-2 px-4 mb-3">
                            <h3 class="m-0">Tags</h3>
                        </div>
                        <div class="d-flex flex-wrap m-n1">
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Politics</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Business</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Sports</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Health</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Education</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Science</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Technology</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Foods</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Entertainment</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Travel</a>
                            <a href="" class="btn btn-sm btn-outline-secondary m-1">Lifestyle</a>
                        </div>
                    </div> */}
                    {/* <!-- Tags End --> */}
                </div>
            </div>
        </div>
    </div>
    }
   
    
   {/*  <!-- News With Sidebar End --> */}
    </div>
  )
}


const mapStateToProps = (state) => ({
    noticia: state.noticiasReducer
  });

  export default connect(mapStateToProps, {mostrarNoticias})(
    Noticia_detalle
  );
