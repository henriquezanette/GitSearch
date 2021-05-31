import React from 'react'
import logoImg from '../../assets/logo.png'
import './styles.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
       
        <div className="container-header">
            <div className="logotitulo">
                <Link to='/'>
                    <img src={logoImg} alt="Gitsearch" className="logoHeader"/>
                </Link>
                
            </div>
            <h1 className="h1header">GitSearch</h1> 
        </div>
    )
}

export default Header
