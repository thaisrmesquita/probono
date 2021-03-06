import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Button, Modal } from 'react-bootstrap';
import './titleprocess.css';
import TranslationModal from '../../../Translation/Modal';


function TitleProcess() {
    const [modalShow, setModalShow] = React.useState(false);
    const handleModal = (show) => {
        setModalShow(show);
    }

    return (
        <div>
            <div className="container-title-process">
                <div className="title-process">
                    <h2 className="title">Cadastrar Regra</h2>
                </div>
                <div className="icon-process">
                    <div className="container-icon">
                        <>
                            <Button variant="danger" onClick={() => setModalShow(true)}>
                                <FiPlus size={32} color="#fff" />
                            </Button>
                            <TranslationModal
                                show={modalShow}
                                onHide={(show) => handleModal(show)}
                            />
                        </>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default TitleProcess;