import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ handleOnSort, selectedSort, columns, data, children }) => {
  return (
    <table className={`table ${data.length < 1 ? "d-none" : ""}`}>
      {children || (
        <>
          <TableHeader {...{ handleOnSort, selectedSort, columns }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  );
};

Table.propTypes = {
  handleOnSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columns: PropTypes.object,
  data: PropTypes.array,
  children: PropTypes.array,
};

export default Table;
