import { FC } from 'react';
import { Pagination as BootStrapPagination }  from 'react-bootstrap'

interface Props {
    currentPage: number,
    handlePagination: (pageNum: number) => void,
}

const Pagination:FC <Props> = ({ currentPage, handlePagination }) => {
    const pageNumbers = [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2]
    return(
        <BootStrapPagination className='pagination'>
            <BootStrapPagination.Prev disabled={currentPage === 1} onClick={() => handlePagination(currentPage-1)} />
            {pageNumbers.map(num => (
                <div key={`page-${num}`}>
                    {num >0 && <BootStrapPagination.Item 
                        active={ num === currentPage }
                        onClick={ () => handlePagination(num) }
                    >
                        {num}
                    </BootStrapPagination.Item>}
                </div>
            ))}
            <BootStrapPagination.Next onClick={() => handlePagination(currentPage+1)}  />
        </BootStrapPagination>
    )
}

export default Pagination;