import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className = 'footer'>
                {/* <div className = 'footer-table'>
                    <p>RECURSOS
                        <li><a href="#"> Acerca de </a></li>
                    </p>
                    <p>COMUNIDAD
                        <li><a href="#"> Github </a></li>
                    </p>
                </div> */}
  <p>Powered by curaREMM ©2018. Code licensed under an MIT-style License. Documentation licensed under CC BY 4.0.</p>
  <p>Version 0.4.10- Alpha release build.</p>
                
            </div>
        )
    }
}

export default Footer;