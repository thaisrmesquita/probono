import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiM } from 'react-icons/fi';
import './style.css';

function FormLogonLawyer () {
    return (
        <div className="form-container">
            <form className="form">
                <h3>Faça login em sua conta</h3>
                <div className="form-group">
                    <input className="input-text" placeholder="Email"/>
                    <input className="input-text" type="password" placeholder="Senha"/>
                </div>
                <div className="form-group form-group-btn"> 
                <Link to="/dashboard"><button className="button-submit" type="submit">Entrar</button></Link>
                </div>
                <div>
                   <p>Não possui uma conta? <Link to="/register">Registre-se aqui</Link></p>
                </div>
            </form>
        </div>
    );
}

export default FormLogonLawyer;