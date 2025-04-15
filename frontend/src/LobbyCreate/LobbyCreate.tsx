import { useState } from 'react';
import './LobbyCreate.css'

const GameCreation = () => {

    const [name, setName] = useState('');
    const [inputError, setInputError] = useState(false);

    const create = ( e: React.FormEvent ) =>{
        e.preventDefault();    
        
        const {isValid, errors} = validator(name);

        if (isValid !== true) {
            errors.forEach( error => {
                console.log(error);
            });

            setInputError(true);
        }
        
        setInputError(false);
        setName('');
        console.log('OK');        
    };

    const validator = ( name: string ) => {

        const invalidValues: string[] = ['_', ',', '.', '*', '#', '/', '-'];
        const validatorName: string[] = name.split('');
        let isValid: boolean = true;
        let lengthNumber: number = 0;
        const errors: string[] = [];
        
        if (invalidValues.some(value => validatorName.includes(value))) {
            isValid = false;
            errors.push('This text should not have special characters (_ , . * # / -).');
        }

        validatorName.forEach(value => {
            if (!isNaN(Number(value))) {
                lengthNumber += 1;
            }
        });

        if (lengthNumber > 3) {
            isValid = false;
            errors.push('This text should not have more than three numbers.');
        }

        if (lengthNumber === validatorName.length) {
            isValid = false;
            errors.push('This text should not have only numbers.');
        }

        return {
            name,
            isValid,
            errors,
        }        
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
                            className={`input ${ inputError ? 'invalid' : ''}`}
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
