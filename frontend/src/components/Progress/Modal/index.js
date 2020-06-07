import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import api from '../../../services/api';

function ProgressModal(props) {
    const history = useHistory();
    const [number, setNumber] = useState(props.number);
    const [description, setDescription] = useState('');

    async function handleRegister(e) {
        
        e.preventDefault();
        const data = {
            description,
            number
        };

        try {
            const response = await api.post('progress', data);
            console.log(response.data.progress.length);
            setDescription('')
            history.push({
                pathname: 'process',
                state: {number, lenProgress: response.data.progress.length},
            });
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
                    Cadastro de Novo Andamento
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-container-form-progress">
                    <form className="form">
                        <div className="form-group">
                            <input className="input-text" placeholder="Descrição"
                                value={description}
                                onChange={e => setDescription(e.target.value)} />
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

export default ProgressModal;