import React from 'react';
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
                <button className="button-submit" type="submit">Entrar</button>
                </div>
                <div>
                   <p>Não possui uma conta? <a href="/register">Registre-se aqui</a></p>
                </div>
            </form>
        </div>
    );
}

export default FormLogonLawyer;