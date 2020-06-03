import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiM } from 'react-icons/fi';
import './style.css';

function FormRegisterLawyer () {
    return (
        <div className="form-container">
            <form className="form">
                <h3>Crie a sua conta aqui</h3>
                <div className="form-group">
                    <input className="input-text" placeholder="Nome"/>
                    <input className="input-text" placeholder="E-mail"/>
                    <input className="input-text" type="password" placeholder="Senha"/>
                </div>
                <div className="form-group form-group-btn"> 
                <button className="button-submit" type="submit">Cadastrar</button>
                </div>
                <div>
                   <p>Já é um membro? <Link to="/login">Entre aqui</Link></p>
                </div>
            </form>
        </div>
    );
}

export default FormRegisterLawyer;