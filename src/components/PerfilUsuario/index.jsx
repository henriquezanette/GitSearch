import React, {useState, useEffect} from 'react';
import Header from '../Header/indes'
import iconeUsuario from '../../assets/iconeusuario.png'
import imagemSeguindo from '../../assets/seguindo.png'
import imagemPasta from '../../assets/pasta.png'
import imagemSeguidores from '../../assets/seguidores.png'
import imagemLocal from '../../assets/local.png'
import imagemBlog from '../../assets/blog.png'
import moment from 'moment';
import './styles.css'

const PerfilUsuario = ({ match }) => {

    const [usuario, setUsuario] = useState({});
    const [repositorios, setRepositorios] = useState([]);
    const [show, setShow] = useState(true)

    useEffect(() => {
        fetch(`https://api.github.com/users/${match.params.user}`)
            .then(res => res.json())
            .then(usuario => {
                console.log(match)
                console.log(usuario)
                setUsuario(usuario)

            })
        
    }, []);

    useEffect(() => {
        fetch(`https://api.github.com/users/${match.params.user}/repos`)
            .then(res => res.json())
            .then(repositorios => {
                console.log(match)
                console.log(repositorios)
                setRepositorios(repositorios)
            })
        
    }, []);


    return (
        <>
            <Header/>
            <div className="bigWrapper" style={{background:"#F8FAFB"}}>
                <div className="containerPerfil">
                    <img src={usuario.avatar_url} className="fotoPerfil" alt="fotoPerfil" />
                    <div className="headerPerfil">
                        <h1 className="nomePerfil">{usuario.name}</h1>
                        <p className="loginPerfil">{usuario.login}</p>
                        <img src={iconeUsuario} className="iconeUsuario" alt="userIcon"/>
                        <div className="seguindoPerfil">
                            <img src={imagemSeguindo} className="imgFollowers" alt="followers"/>
                            <p>{usuario.following}</p>
                            <p>Seguindo</p>
                        </div>
                        <div className="projetosPerfil">
                            <img src={imagemPasta} className="imgProjetos" alt="projetos"/>
                            <p>{usuario.public_repos}</p>
                            <p>Projetos</p>
                        </div>
                        <div className="seguidoresPerfil">
                            <img src={imagemSeguidores} className="imgFollowing" alt="following"/>
                            <p>{usuario.followers}</p>
                            <p>Seguidores</p>
                        </div>
                    </div>
                    <span className="barraCinza"></span>
                    <div className="sobrePerfil">

                        <div className="menuPerfil">
                            <button type="button" className="sobreMenu" onClick={() => setShow(true)}>Sobre</button>
                            <button className="projetosMenu" onClick={() => setShow(false)}>Projetos</button>
                        </div>

                        { show ?
                        <div className="infoPerfil">
                            <p className="bio">Bio</p>
                            <p className="bioPerfil">{usuario.bio}</p>
                            <img src={imagemLocal} className="imagemLocal" alt="casa"/>
                            <p className="localPerfil">{usuario.location}</p>
                            <img src={imagemBlog} className="imagemBlog" alt="blog"/>
                            <p className="blogPerfil">{usuario.blog}</p>
                        </div>
                        : 
                        <div className="projetosPerfil">
                            {repositorios.slice(0,5).map(repositorio => (
                                <div className="repositorioGit">
                                    <h1 className="repositorioNome" key={repositorio.id}>{repositorio.name}</h1>
                                    <p className="repositorioDesc">{repositorio.description}</p>
                                    <p className="repositorioData">Atualizado em {moment(repositorio.updated_at).format('DD/MM/YYYY')}</p>
                                    <p className="repositorioLinguagem">{repositorio.language}</p>
                                    <div className="linhaCinza"></div>
                                </div>
                            ))}
                        </div>
                        
                        
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilUsuario
