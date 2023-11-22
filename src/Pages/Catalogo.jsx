import PropTypes from "prop-types";
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from '../Components/Layouts/Navbar'
import Footer from '../Components/Layouts/Footer'
import { mostrarProductos } from "../Redux/Actions/productos.action";
import Spinner from "../Components/Layouts/Spinner";

const Catalogo = ({mostrarProductos, producto: { productos, loadingProductos },}) => {

    useEffect(()=>{
        mostrarProductos()
    },[])

    /* console.log(productos) */

    const [listaCategorias, setListaCategorias] = useState([])
    useEffect(()=>{
        if(productos?.length > 0 ){
            for (let index = 0; index < productos?.length; index++) {
                const element = productos[index];
                let busqueda = listaCategorias.includes(element?.categoria)
                if(busqueda == false){
                    listaCategorias.push(element?.categoria)
                }
            }
        }
        
    },[productos])
    /* console.log(listaCategorias[0]) */
  return (
    <div>
        <Navbar/>

       {/*  <!-- Page Header Start --> */}
        <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container">
                <h1 class="display-3 mb-3 animated slideInDown">Productos</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a class="text-body" href="#">Inicio</a></li>
                        <li class="breadcrumb-item text-dark active" aria-current="page">Productos</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}

        {/* <!-- Product Start --> */}
        {
            loadingProductos ? <div align="center"><Spinner/></div>
            :
            <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                            <h1 class="display-5 mb-3">Todos los productos</h1>
                            <p>Todos los productos de soberania alimentaria formosena.</p>
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
                    {
                        productos?.length > 0 ?
                        <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                                {
                                    listaCategorias?.map((categoria)=>{
                                        return(
                                            <div key={categoria}>
                                                <h4 className="fade show"><i>{categoria == "ProductosCongelados" ? "Congelados": categoria}</i></h4>
                                                <hr className="fade show"></hr>
                                                <div class="row g-4">
                                                {
                                                    productos?.map((item)=>{
                                                        if(categoria == item?.categoria){
                                                            return(
                                                                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={item?.uid}>
                                                                    <div class="product-item">
                                                                        <div class="position-relative bg-light overflow-hidden">
                                                                            <img class="img-fluid w-100" src={item?.img} alt=""/>
                                                                            {/* <div class="bg-success rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nuevo</div> */}
                                                                        </div>
                                                                        <div class="text-center p-4">
                                                                            <a class="d-block h5 mb-2" href="">{item?.nombre}</a>
                                                                            <span class="text-primary me-1">$ {item?.precio}</span>
                                                                            {/* <span class="text-body text-decoration-line-through">$29.00</span> */}
                                                                        </div>
                                                                        <div class="d-flex border-top">
                                                                            <small class="w-50 text-center border-end py-2">
                                                                                <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>Ver Producto</a>
                                                                            </small>
                                                                            <small class="w-50 text-center py-2">
                                                                                <a class="text-body" href=""><i class="fa fa-user text-primary me-2"></i>Proveedor</a>
                                                                            </small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                                 </div>
                                                 <br/><br/>
                                            </div>
                                        )
                                    })
                                } 
                        </div>     
                    </div>
                    :
                    <div align="center"><Spinner/></div>
                    }
            </div>
        </div>
        }
        {/* <!-- Product End --> */}

        {
            productos?.length > 0 ?
            <div className="fadeInUp">
                <Footer/>
            </div>
            
            :null
        }
    </div>
  )
}

const mapStateToProps = (state) => ({
    producto: state.productosReducer
  });

  export default connect(mapStateToProps, {mostrarProductos})(
    Catalogo
  );