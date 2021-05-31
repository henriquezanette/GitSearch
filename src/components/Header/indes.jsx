import React from 'react'
import logoImg from '../../assets/logo.png'
import './styles.css'

const Header = () => {
    return (
       
        <div className="container-header">
            <div className="logotitulo">
                <img src={logoImg} alt="Gitsearch" className="logoHeader"/>
                
            </div>
            <h1 className="h1header">GitSearch</h1> 
        </div>
    )
}

export default Header
