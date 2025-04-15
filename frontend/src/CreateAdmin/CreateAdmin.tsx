import React, { useState } from 'react'

import './CreateAdmin.css'
import useUserValidator from '../hooks/useUserValidator ';

const CreateAdmin = () => {

    const [name, setName] = useState('');
    const [inputError, setInputError] = useState(false);

    const [selected, setSelected] = useState<string | null>(null);
    const [selectedError, setSelectedError] = useState(false);

    const { validate } = useUserValidator();

    const create = (e: React.FormEvent) => {
        e.preventDefault();

        const { isValid, errors } = validate(name);

        if (!isValid) {
            errors.forEach(error => console.error(error))
            setInputError(true);
            return;
        }

        if (!selected || selected === '') {
            console.error();
            setSelectedError(true);
            return;
        }

        setName('');
        setSelected('');
        setInputError(false);
        setSelectedError(false);
        console.log({
            display: selected,
            isValid,
            name,
            resp: 'OK',
            role: 'owner',
        }); 
    }

    const handleChange = (value: string) => {
        setSelected(value);
    };

    return (
        <>
            <main className='section'>
                <div className="form-section">

                    <form className='form' onSubmit={create}>
                        <div className='section-name'>
                            <label htmlFor="title">Tu nombre.</label>
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className={`input ${inputError ? 'error' : ''}`}
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className='section-payer'>
                            <div>
                                <label>Jugador</label>
                                <input
                                    checked={selected === 'payer'}
                                    onChange={() => handleChange('payer')}
                                    className={`checkbox ${ selectedError && 'error' }`}
                                    type="checkbox"
                                />
                            </div>
                            <div>
                                <label>espectador</label>
                                <input
                                    checked={selected === 'viwer'}
                                    onChange={() => handleChange('viwer')}
                                    className={`checkbox ${ selectedError && 'error' }`}
                                    type="checkbox"
                                />
                            </div>
                        </div>
                        <button className='button' type="submit">Continuar</button>
                    </form>

                </div>
            </main>
        </>
    )
}

export default CreateAdmin;