import React from 'react';
import { NavDropdown, Button } from 'react-bootstrap';
import TranslationModal from '../../../components/Translation/Modal';

import './dropdown.css';

function TranslationMenuDropdown() {
    const [modalShow, setModalShow] = React.useState(false);
    const handleModal = (show) => {
        setModalShow(show);
    }
    return (
        <div>
            <NavDropdown title="Regras de Tradução" id="basic-nav-dropdown">
                <div>
                    <>
                        <Button variant="link" onClick={() => setModalShow(true)}>
                            Cadastrar nova Regra
                        </Button>
                        <TranslationModal
                            show={modalShow}
                            onHide={(show) => handleModal(show)}
                        />
                    </>
                </div>
            </NavDropdown>
        </div>
    )
}
export default TranslationMenuDropdown;