import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import api from '../../../services/api';

function ProcressModal(props) {
    const history = useHistory();
    const [number, setNumber] = useState(props.number);
    const [client, setClient] = useState('');
    const lawyerEmail = localStorage.getItem('lawyerEmail');
    
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            number,
            client,
            responsible:lawyerEmail   
        };

       try {
            const response = await api.post('process', data);
            setNumber('');
            setClient('');
            console.log(response.data);
            history.push({
                pathname: 'dashboard',
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
                    Cadastro de Novo Processo
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-container-form-progress">
                    <form className="form">
                        <div className="form-group">
                            <input className="input-text" placeholder="Nº do Processo"
                                value={number}
                                onChange={e => setNumber(e.target.value)} />
                                <input className="input-text" placeholder="CPF cliente"
                                value={client}
                                onChange={e => setClient(e.target.value)} />
                            </div>
                        <div className="form-group form-group-btn">
                            <Button bg-color="#D41215" variant="danger" onClick={handleRegister} >
                                Cadastrar
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ProcressModal;