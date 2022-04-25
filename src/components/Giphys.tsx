import { useState, FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from './Modal';

export interface Gif {
    id: string,
    title: string,
    images: {
        original_still: {
            url: string,
            [propName: string]: any;
        },
        fixed_height: {
            url: string,
            [propName: string]: any;
        },
        [propName: string]: any;
    },
    [propName: string]: any;
}

interface Props {
    data: Gif[]
}

const Giphys: FC<Props> = ({ data }) => {

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({ id: '',
                                                  title: '',
                                                  images: {
                                                    original_still: { url: "" },
                                                    fixed_height: { url: "" }
                                                  }
                                                });

    const handleClose = () => setShowModal(false);
    
    const handleShow = (gif: Gif) => {
        setShowModal(true);
        setModalData(gif);
    }

    return(
        <>
        <Container>
            <Row>
                {data.map(gif => (
                    <Col key={`gif-${gif.id}`} xs={12} sm={4} md={4} lg={2} className="gif-container">
                        <img tabIndex={0} src={gif.images.original_still.url} alt={gif.title} className="gif" onClick={() => handleShow(gif)} />
                    </Col>
                ))}
            </Row>
        </Container>
        {showModal && <Modal show={showModal} handleClose={handleClose} data={modalData} />}
        </>
    )
}

export default Giphys;