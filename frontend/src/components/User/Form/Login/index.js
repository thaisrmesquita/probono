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
          localStorage.setItem('clientCpf', response.data.cpf);
         
          if(response.data.user === 1) {
            history.push('/dashboard');
          } else {
              history.push('dashboard/client')
          }

        } catch(err) {
            alert('Falha no login');
        }
    }
    return(
        <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
            <div className="login-form-group">
                <input className="input-text" placeholder="&#xf205; Usuário" 
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