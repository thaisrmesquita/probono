import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './register.css';

import api from '../../../../services/api';

function FormRegister () {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            cpf,
            email,
            password
        };
        try {
            const response = await api.post('lawyer', data);
            alert(`Seu usuario de acesso ${email}`);
            history.push('/');
        } catch (err) {
            alert(`Erro no cadastro! Tente novamente!`);
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleRegister}>
                <h3>Crie a sua conta aqui</h3>
                <div className="form-group">
                    <input className="input-text" placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input className="input-text" placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    />
                    <input className="input-text" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                    <input className="input-text" type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="form-group form-group-btn"> 
                <button className="button-submit" type="submit">Cadastrar</button>
                </div>
                <div>
                   <p>Já é um membro? <Link to="/">Entre aqui</Link></p>
                </div>
            </form>
        </div>
    );
}

export default FormRegister;