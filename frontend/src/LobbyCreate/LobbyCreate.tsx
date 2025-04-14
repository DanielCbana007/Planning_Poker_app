import { useState } from 'react';
import './LobbyCreate.css'

const GameCreation = () => {

    const [name, setName] = useState('');

    const create = ( e: React.FormEvent ) =>{
        e.preventDefault();
        console.log(name);        
    }

    return (
        <>
            <div className="ilogo-section">
                <img className='logo' src="/logo.svg" alt="Logo" />
                <p>Crear partida</p>
            </div>
            <main className='section'>
                <form className="form-section" onSubmit={ create }>
                    <div className='section-name'>
                        <label htmlFor="title">Nombra la partida.</label>
                        <input 
                            onChange={ e => setName(e.target.value) } 
                            className='input' 
                            type="text" 
                            name="" 
                            id="" 
                        />
                    </div>
                    <button className='button' type="submit">Crear partida</button>
                </form>
            </main>
        </>
    );
}

export default GameCreation;
