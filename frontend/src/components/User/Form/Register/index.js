import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './register.css';

import api from '../../../../services/api';

function FormRegister () {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [user, setUser] = useState(1);

    const history = useHistory();

    function handleUser(value) {
        setUser(parseInt(value));
        console.log(value);
    }
    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            password,
            cpf
        };
        try {
            if(user === 1) {
                const response = await api.post('lawyer', data);
                alert(`Seu usuario de acesso ${email}`);
            } else {
                const response = await api.post('client', data);
                alert(`Seu usuario de acesso ${cpf}`);
            }
            history.push('/');
        } catch (err) {
            alert(`Erro no cadastro! Tente novamente!`);
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleRegister}>
                <h3>Crie a sua conta aqui</h3>
                <div className="form-group form-group-btn"> 
                    <select className="select" name="user" id="user" onChange={e => handleUser(e.target.value)}>
                        <option value="1">Advogado</option>
                        <option value="2">Cliente</option>
                    </select>
                </div>
                <div className="form-group">
                    <input className="input-text" placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    {user === 2 &&
                        <input className="input-text" placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}/>
                    }
                    <input className="input-text" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                    <input className="input-text" type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="register-form form-group form-group-btn"> 
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