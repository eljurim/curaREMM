import React, { Component } from 'react'
import '../Tarjeta/Tarjeta.css'
import Doctor from '../Doctor'


class Tarjeta extends Component{
    render(){

        let doctors =[{
            "name": "manuel",
            "especialidad":"Odontologo",
            "puntuacion": 4,
            "telefono": 55667409
        },
        {
            "name": "Rosa",
            "especialidad":"Cardiologo",
            "puntuacion": 5,
            "telefono": 66840957
        },{
            "name": "Edgar",
            "especialidad":"Cardiologo",
            "puntuacion": 1,
            "telefono": 66840960
        }]

        let doctorRender = doctors.map(doctor =>{
                
                let {name,especialidad,puntuacion,telefono} = doctor;
                console.log(doctor)
                return(
                        <Doctor name={name}
                        especialidad={especialidad}
                        puntuacion={puntuacion}
                        telefono={telefono}>

                        </Doctor>
                )
            })
        

       
        return(
            <div className="contenido-tarjetas">
            {doctorRender}
               
            </div>
        )
    }
}

export default Tarjeta