import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import L from "leaflet";

import {
    MapContainer,
    TileLayer
  } from "react-leaflet";
  import "leaflet/dist/leaflet.css";
  import "leaflet-draw/dist/leaflet.draw.css";
import Navbar from '../Components/Layouts/Navbar'
import Footer from '../Components/Layouts/Footer'
import './Styles/Puntos.css'
import { mostrarPuntos } from "../Redux/Actions/Puntos.action"
import { Link } from "react-router-dom";
import MarcasMapa from "../Components/Layouts/MarcasMapa";
const Puntos = ({mostrarPuntos, punto: { puntos, loadingPuntos },}) => {

    const mapRef = useRef();
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const [center, setCenter] = useState({
        lat: "-26.18064675300086",
        lng: "-58.188628961794805",
      });

      useEffect(()=>{
        mostrarPuntos()
      },[])

      /* console.log(puntos) */

  return (
    <div>
        <Navbar/>
        {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header page-headerMapa wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Puntos</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link className="text-body" to="/">Inicio</Link></li>
                            <li className="breadcrumb-item"><Link className="text-body" to="/">Puntos</Link></li>
                            
                        </ol>
                    </nav>
                </div>
            </div>
         {/* <!-- Page Header End --> */}

                      <div className="" align="center">
                    <MapContainer center={center} zoom={13} style={{ width, height: height - 50 }} ref={mapRef}>
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/enzoeb12/clnyq48s0007y01o39p7chifw/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW56b2ViMTIiLCJhIjoiY2wydjN4bGUxMDhkbTNsbXVjejI2eTRwOSJ9.p2FtTmTgMZ8g03mq4WTZ3w&zoomwheel=false#14.09/-26.17961/-58.18817`}
                                attribution="© <a href='https://www.mapbox.com/map-feedback/' target='_blank'>Mapbox</a> contributors"
                            /> 
                            <MarcasMapa data={puntos} carga={loadingPuntos}/>
                            {/* <iframe width='100%' height='100%' src="https://api.mapbox.com/styles/v1/enzoeb12/clnyq48s0007y01o39p7chifw.html?title=false&access_token=pk.eyJ1IjoiZW56b2ViMTIiLCJhIjoiY2wydjN4bGUxMDhkbTNsbXVjejI2eTRwOSJ9.p2FtTmTgMZ8g03mq4WTZ3w&zoomwheel=false#14.09/-26.17961/-58.18817" title="Outdoors" style={{border:"none"}}></iframe> */}
                    </MapContainer>
                        {/* <iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/enzoeb12/clnyq48s0007y01o39p7chifw.html?title=false&access_token=pk.eyJ1IjoiZW56b2ViMTIiLCJhIjoiY2wydjN4bGUxMDhkbTNsbXVjejI2eTRwOSJ9.p2FtTmTgMZ8g03mq4WTZ3w&zoomwheel=false#14.09/-26.17961/-58.18817" title="Outdoors" style={{border:"none"}}></iframe> */}
                      </div>

        <Footer/>
    </div>
  )
}


const mapStateToProps = (state) => ({
    punto: state.puntosReducer
  });

export default connect(mapStateToProps, {mostrarPuntos})(
    Puntos
  );
