import { useState, FC } from 'react';
import { Container, Row, Col ,Form, Button } from 'react-bootstrap';

interface Props {
    handleSearch: (str: string) => void
}

const Search: FC<Props> = ({ handleSearch }) => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(search) {
            handleSearch(search);
        } else setError(true);
    }

    const handleChange = (value: string) => {
        setSearch(value);
        setError(false);
    }

    return  (
        <Container>
            <Form>
                <Row>
                    <Col xs={8}>
                        <Form.Group>
                            <Form.Control placeholder='Search a gif' onChange={e => handleChange(e.target.value)} />
                        </Form.Group>
                        {error && <span>Please enter search value</span>}
                    </Col>
                    <Col xs={4}>
                        <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Search;