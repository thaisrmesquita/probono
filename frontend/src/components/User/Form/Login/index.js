import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';

import api from '../../../../services/api';

function FormLogin () {
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
          const response = await api.post('login', {user:email,password});
          localStorage.setItem('lawyerEmail', email);
          localStorage.setItem('lawyerName', response.data.name);
          history.push('/dashboard');


        } catch(err) {
            alert('Falha no login');
        }
    }
    return(
        <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
            <div className="login-form-group">
                <input className="input-text" placeholder="Email" 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
                <input className="input-text" type="password" placeholder="Senha"
                value={password}
                onChange={e=>setSenha(e.target.value)}
                />
            </div>
            <div className="login-form-group login-form-group-btn"> 
            <button className="login-button-submit" type="submit">Entrar</button>
            </div>
            <div className="text-register">
               <p>Não possui uma conta? <Link to="/register" className="link">Registre-se aqui</Link></p>
            </div>
        </form>
    </div>
    )
};
export default FormLogin;