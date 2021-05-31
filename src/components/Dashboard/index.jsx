import React from 'react'
import logoImg from '../../assets/logo.png'
import './styles.css'
import {Link} from 'react-router-dom'


const Dashboard = () => {
    return (
        <div className="container-dashboard">
            <div className="logotitulo">
                <img src={logoImg} alt="Gitsearch" className="logoDashboard"/>
                <h1>GitSearch</h1> 
            </div>
            <div className="botoes">
                <Link to='/todos'>
                    <button type="button" className="btnTodos" to="">Ver Todos</button>
                </Link>
                <Link to='/pesquisa'>
                    <button type="button" className="btnSearch">Buscar</button>
                </Link>
            </div>

        </div>
    )
}

export default Dashboard
