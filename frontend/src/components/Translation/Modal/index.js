import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './modaltranslation.css';
import api from '../../../services/api';

function TranslationModal(props) {
    const history = useHistory();

    const [rule, setRule] = useState('');
    const [description, setDescription] = useState('');
    
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            rule,
            description, 
        };

       try {
            const response = await api.post('translation', data);
            setRule('');
            setDescription('');
            console.log(response.data);
            history.push({
                pathname: '/dashboard',
                state: {numberProcess: response.data.number}
            })
            props.onHide(false);
            
        } catch (err) {
            console.log(err);
            alert(`Erro no cadastro! Tente novamente!`);
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cadastrar Regra de Tradução
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-container-form-progress">
                    <form className="form">
                        <div className="form-group">
                            <input className="input-text" placeholder="Regra"
                                value={rule}
                                onChange={e => setRule(e.target.value)} />
                                <input className="input-text" placeholder="Tradução"
                                value={description}
                                onChange={e => setDescription(e.target.value)} />
                            </div>
                        <div className="form-group form-group-btn">
                            <Button bg-color="#D41215" variant="light" onClick={handleRegister} >
                                Cadastrar
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default TranslationModal;