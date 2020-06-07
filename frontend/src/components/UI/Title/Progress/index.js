import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Modal, Button } from 'react-bootstrap';
import ProgressModal from '../../../Progress/Modal';

import './titleprocess.css';

function TitleProgress({number}) {
    const [modalShow, setModalShow] = useState(false);

    const handleModal = (show) => {
        setModalShow(show);
    }

    return (
        <div>
            <div>
                <div className="container-title-progress">
                    <div className="title-progress">
                        <h2 className="title">Andamentos:</h2>
                    </div>
                    <div className="icon-progress">
                        <div className="container-icon">
                            <>
                                <Button closeButton bg-color="#D41215" variant="danger" onClick={() => setModalShow(true)}>
                                    <FiPlus size={18} color="#fff" />
                                </Button>
                                <ProgressModal
                                    show={modalShow}
                                    onHide={(show) => handleModal(show)}
                                    number={number}
                                />
                            </>
                        </div>
                    </div>
                </div>
                <br />
                <div className="hr"></div>
            </div>
        </div>

    )
}

export default TitleProgress;