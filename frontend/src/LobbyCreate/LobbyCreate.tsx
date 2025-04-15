import { useState } from 'react';
import './LobbyCreate.css'
import useUserValidator from '../hooks/useUserValidator ';

const GameCreation = () => {

    const [name, setName] = useState('');
    const [inputError, setInputError] = useState(false);

    const {validate} = useUserValidator();

    const create = ( e: React.FormEvent ) =>{
        e.preventDefault();    
        
        const {isValid, errors} = validate(name);

        if (!isValid) {
            errors.forEach( error => {
                console.error(error);
            });

            setInputError(true);
            return;
        }
        
        setInputError(false);
        setName('');
        console.log('OK');        
    };

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
                            itemID='inputId'
                            value={name}
                            onChange={ e => setName(e.target.value) } 
                            className={`input ${ inputError ? 'error' : ''}`}
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