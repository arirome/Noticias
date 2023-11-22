import React from "react";
import {
  Popup,
  Marker,
  FeatureGroup,
} from "react-leaflet";
import iconoPuntosFijos from "../../assets/img/Mapa/ubi3.webp"
import iconoPuntosFijosSombra from "../../assets/img/Mapa/ubi3_sombra.webp"

const MarcasMapa = ({data, carga}) => {
  console.log(data)
  console.log(carga)

 
  return (
    <FeatureGroup>
      {carga ? null :
      <React.Fragment key={"Puntos"}>
        {data?.length > 0 && data?.map((item)=>{
          /* console.log(item) */
            

              let iconoPuntos = L.icon({
                iconUrl: item?.icono,
                shadowUrl: iconoPuntosFijosSombra, // ruta de la imagen del icono
                iconSize: [52, 52], // tamaño del icono
                shadowSize: [52, 52], // tamaño de la sombra
                iconAnchor: [16, 16], // posición del ancla del icono
                shadowAnchor: [16, 16], // posición del ancla de la sombra
              });
              /* console.log(item?.icono) */
              return(
                <Marker
                  icon={iconoPuntos}
                  position={{
                    lat: item?.ubicacion?.lat || 0,
                    lng: item?.ubicacion?.lon || 0,
                  }}
                  key={`Punto ${item?.uid}`}
                >
                  <Popup>
                    <div>
                        <h2 style={{ textAlign: "center" }}>{item?.nombre}</h2>
                        <p style={{ textAlign: "center" }}>{item?.tipo}</p>
                        <p style={{ textAlign: "center" }}>{item?.barrio}</p>
                        <p style={{ textAlign: "center" }}>
                          Unicamente los Jueves y Sabados de 7:30hs a 12:30hs
                        </p>
                        {
                          item?.img != "" ?
                          <img src={item?.img} alt="Imagen del lugar" style={{ maxWidth: "300px" }} />
                          : null
                        }
                    </div>
                  </Popup>
                </Marker>
                    )
            
        })}
      </React.Fragment>
      }
    </FeatureGroup>
  );
};

export default MarcasMapa;
