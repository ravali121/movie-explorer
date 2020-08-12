import React from 'react';
import styled from 'styled-components';
import './Pagination.css';

const Row = styled.div`
 flex-direction: row;
`;


const Pagination =(props) => {
  let pageLinks = [];

  for(let i = 1; i <= props.pages + 1; i++ ) {
    let active = props.currentPage === i ? 'active' : '';
    pageLinks.push(<li className={active} key={i} onClick={() => props.nextPage(i)}><a className={active} href="#!">{i}</a></li>)
  }
  return (
    <div className="container">
      <Row>
        <ul className="pagination">
          { props.currentPage > 1 ? <li onClick={() => props.nextPage(props.currentPage - 1)}><a href="#!">Prev</a></li> : ''}
          {  pageLinks }
          { props.currentPage < props.pages + 1 ? <li onClick={() => props.nextPage(props.currentPage + 1)}><a href="#!">Next</a></li> : ''}
        </ul>
      </Row>
    </div>
  )
};


export default Pagination;

