import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const Listagem = () => {


    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(usuarios => {
                console.log(usuarios)
                setUsuarios(usuarios)
            })
    }, []);

    const [usuarios, setUsuarios] = useState([]);


    return (
        <>
        <div className="bigWrapper" style={{background:"#F8FAFB"}}>
        <div className="containerBuscaTodos" >
            <div className="customwrapperTodos">
                <h1 className="h1pesquisa">Todos Usuários</h1>
            </div>

            <div className="resultadosBuscaTodos">
                {usuarios.map(usuario => (
                    <div className="retanguloUsuario">
                        <Link to={`/pesquisa/${usuario.login}`}>
                            <img className="imgLista" src={usuario.avatar_url}/>
                            <p key={usuario.id}>{usuario.login}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>
    )
}

export default Listagem
