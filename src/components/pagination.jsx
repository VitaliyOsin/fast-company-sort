import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({itemsCount, pageSize, onPageChange, currentPage}) => {
  const pageCount = Math.ceil(itemsCount/pageSize);
  const pages = _.range(1, pageCount +1);
  if(pageCount === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination m-2">
        {pages.map(page => (
          <li key={page} className={`page-item ${page === currentPage ? "active" : ""}`}><a onClick={(e) => {
            onPageChange(page);
            e.preventDefault();
          }} className="page-link" href={"/"} >{page}</a></li>
        ))}

      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount:PropTypes.number.isRequired,
  pageSize:PropTypes.number.isRequired,
  onPageChange:PropTypes.func.isRequired,
  currentPage:PropTypes.number.isRequired
};

export default Pagination;