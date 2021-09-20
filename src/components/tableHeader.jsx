import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ selectedSort, handleOnSort, columns }) => {
  const handleSort = (item) => {
    const order = selectedSort.order === "asc" ? "desc" : "asc";
    handleOnSort({ path: item, order });
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : null
            }
            scope="col"
            {...{ role: columns[column].path && "button" }}
          >
            {columns[column].name}
            {selectedSort.path === columns[column].path ? (
              selectedSort.order === "asc" ? (
                <i className="bi bi-caret-up-fill d-inline-block ml-2"></i>
              ) : (
                <i className="bi bi-caret-down-fill d-inline-block ml-2"></i>
              )
            ) : (
              ""
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  handleOnSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;
