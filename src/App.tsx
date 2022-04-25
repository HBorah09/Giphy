import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import Giphys from './components/Giphys';
import Search from './components/Search';
import Pagination from './components/Pagination';
import { GIPHYS_PER_PAGE } from './constants';

import './App.scss';

interface fetchDataProps {
  url: string,
  additionalParams?: {
    q?: string,
    offset?: number,
    limit?: number
  }
}

export const App = () => {

    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const fetchData = async ({ url, additionalParams }: fetchDataProps) => {
      setIsError(false);
      try {
        const { data } = await axios(url, {
          params: {
            api_key: "tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ",
            limit: GIPHYS_PER_PAGE,
            ...additionalParams
          }
        });

        setData(data.data);
      } catch (err) {
        setIsError(true);
      }  
    };
  
    useEffect(() => {
      fetchData({
        url: 'https://api.giphy.com/v1/gifs/trending',
      });
    }, []);

    const handleSearch = async (str: string) => {  
      fetchData({
        url: 'https://api.giphy.com/v1/gifs/search',
        additionalParams: {q: str},
      });
      setSearch(str);
    };

    const handlePagination = (pageNum: number) => {
      const api = search ? 'https://api.giphy.com/v1/gifs/search' : 'https://api.giphy.com/v1/gifs/trending';
      fetchData({
        url: api,
        additionalParams: {
          offset: pageNum === 1 ? 0 : (pageNum - 1)*GIPHYS_PER_PAGE + 1,
          ...(search && {q: search})
        },
      });
      setCurrentPage(pageNum);
    }
  
    return (
      <>
        { isError || !data.length ? 
          <p>Oops, something went wrong! Please try again after some time</p>
        :
       <div className="wrapper">
        <Container className="header">
          <Row>
            <Col xs={12} md={6}><Search handleSearch={handleSearch} /></Col>
            <Col xs={12} md={6}><Pagination currentPage={currentPage} handlePagination={handlePagination} /></Col>
          </Row>
        </Container>
        <Giphys data={data} />
       </div>
      }
      </>
    );
  };
  