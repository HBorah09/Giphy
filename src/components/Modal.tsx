import { FC } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import { Gif } from './Giphys';

interface Props {
    show: boolean,
    handleClose: () => void,
    data: Gif
}

const Modal: FC<Props> = ({ show, handleClose, data }) => {

    return(
        <BootstrapModal show={show} keyboard onHide={handleClose}>
            <BootstrapModal.Header closeButton>
            <BootstrapModal.Title>{data.title}</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <img src={data.images.fixed_height.url} alt={data.title} style={{width: '100%'}}  />
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    )
}

export default Modal;