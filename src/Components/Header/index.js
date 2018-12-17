import React , { Component } from 'react';

import './Header.css'
class Header extends Component{
    render(){
        return(
        <div>
            <div className = "title">
            <h1>CuraREMM</h1>
            </div>
                <button className="mapa" >mapa</button>
                <button className="encuentra">Encuentra</button>
                <button className="agenda">Agenda</button>
                
            <div className="login">
                <button className="register">Registro</button>
                <button className="log">Login</button>
            </div>

        </div>
        )}
}

export default Header;