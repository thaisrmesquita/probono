import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Button, Modal } from 'react-bootstrap';
import './titleprocess.css';
import ProcessModal from '../../../Process/Modal';

function TitleProcessClient() {
    const [modalShow, setModalShow] = React.useState(false);
    const handleModal = (show) => {
        setModalShow(show);
    }

    return (
        <div>
            <div className="container-title-process-dash">
                <div className="title-process">
                    <h2 className="title">Meus Processos</h2>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default TitleProcessClient;