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
            
                <div className="container-title-progress">
                    <div className="title-progress">
                        <h2 className="title">Andamentos:</h2>
                    </div>
                </div>
                <div className="hr"></div>
        </div>

    )
}

export default TitleProgress;