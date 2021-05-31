import React, {useState, useEffect} from 'react'
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
        <div className="containerBuscaTodos">
            <div className="customwrapperTodos">
                <h1 className="h1pesquisa">Todos Usuários</h1>
            </div>

            <div className="resultadosBuscaTodos">
                {usuarios.map(usuario => (
                    <div className="retanguloUsuario">
                        <img src={usuario.avatar_url}/>
                        <p key={usuario.id}>{usuario.login}</p>
                    </div>
                ))}
                {/*
                <div className="retanguloUsuario">
                    <img src={usuarios.avatar_url}/>
                    <p>{usuarios.login}</p>
                    <button type="button">Ver perfil</button>
                </div>
                
                <div className="retanguloUsuario">
                    <img src={}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                <div className="retanguloUsuario">
                    <img src={}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                <div className="retanguloUsuario">
                    <img src={}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                <div className="retanguloUsuario">
                    <img src={}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                <div className="retanguloUsuario">
                    <img src={}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                <div className="retanguloUsuario">
                    <img src={}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                <div className="retanguloUsuario">
                    <img src={}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                <div className="retanguloUsuario">
                    <img src={}/>
                    <p>{}</p>
                    <button type="button">Ver perfil</button>
                </div>
                */}
            </div>
        </div>

        </>
    )
}

export default Listagem
