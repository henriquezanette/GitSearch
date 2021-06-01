import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'


import { FaSearch } from 'react-icons/fa';

const BuscaUsuario = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [repos, setRepos] = useState('');
    const [location, setLocation] = useState('');
    const [userInput, setUserInput] = useState('');
    const [site, setSite] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/henriquezanette')
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, []);



    const setData = ({ name, login, followers, following, avatar_url, bio, public_repos, location, site}) =>{
        setName(name)
        setUserName(login)
        setFollowers(followers)
        setFollowing(following)
        setAvatar(avatar_url)
        setBio(bio)
        setRepos(public_repos)
        setLocation(location)
        setSite(site)
    };

    const handleSearch = (ev) => {
        setUserInput(ev.target.value)
        console.log(userInput)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data =>{
                setData(data);
            })
    }


    return (
        <>
        <div className="containerBusca">
            <div className="customwrapper">
                <h1 className="h1pesquisa">Buscar Usuários</h1>
                <form onSubmit={handleSubmit}>
                    <button type="submit" class="lupa"><FaSearch/></button>               
                    <input type="text" className="inputbusca" onChange={handleSearch}/>
                </form>
            </div>
            <div className="resultadosBusca">
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>          
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
                <div className="retanguloUsuario">
                    <img src={avatar} alt="imagemUsuario" className="imgBusca"/>
                    <Link to={`/pesquisa/${userName}`}>
                        <p className="nomeUsuario">{name}</p>
                    </Link>
                </div>
            </div>
        </div>

        </>
    )
}

export default BuscaUsuario
