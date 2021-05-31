import React, {useState, useEffect} from 'react'
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



    const setData = ({ name, login, followers, following, avatar, bio, public_repos, location, site}) =>{
        setName(name)
        setUserName(login)
        setFollowers(followers)
        setFollowing(following)
        setAvatar(avatar)
        setBio(bio)
        setRepos(public_repos)
        setLocation(location)
        setSite(site)
    };


    return (
        <>
        <div className="containerBusca">
            <div className="customwrapper">
                <h1 className="h1pesquisa">Buscar Usuários</h1>
                <form>
                <button type="button" class="lupa"><FaSearch/></button>               
                <input type="text" className="inputbusca"/>
                </form>
            </div>
            <div className="resultadosBusca">
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
                <div className="retanguloUsuario">Henrique</div>
            </div>
        </div>

        </>
    )
}

export default BuscaUsuario
