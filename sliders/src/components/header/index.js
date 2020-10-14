import React,{useState} from 'react'
import logo from '../../logo.svg';
import './style.css';

const Header = () => {
const [tema,setTema] = useState('light')

    const toggleTema = () =>{
        let novoTema = tema === 'dark' ? 'light' : 'dark'
        setTema(novoTema)
    }


    return (
   <header className = {`App-header App-header--${tema}`}> 
    <img
    src= {logo}
    className = "App-logo"
    alt = 'logo'
    onClick={() => toggleTema()}
    />
    <h1>{tema}</h1>
    <a
    className = {`App-link`}
    href = "https://github.com/guimarte/slider"
    target = "_blank"
    rel = 'noopener noreferrer'
    >
    Acessar Repositorio    
    </a>
    </header>


)



}

export default Header