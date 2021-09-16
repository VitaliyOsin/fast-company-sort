import React from "react";
import PropTypes from "prop-types";

const ResetBtn = ({ handleReset }) => (
  <button className="btn btn-danger m-2" onClick={handleReset}>
    Восстановить список
  </button>
);
ResetBtn.propTypes = {
  handleReset:PropTypes.func.isRequired
};
export default ResetBtn;
