import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination-lg d-flex justify-content-center align-items-center mt-5'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item '>
            <a onClick={() => paginate(number)} href='!#' className='page-link text-success font-weight-bolder fs-5'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;