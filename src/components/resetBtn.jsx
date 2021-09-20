import React from "react";
import PropTypes from "prop-types";

const ResetBtn = ({ onHandleReset }) => (
  <button className="btn btn-danger m-2" onClick={onHandleReset}>
    Восстановить список
  </button>
);
ResetBtn.propTypes = {
  onHandleReset: PropTypes.func.isRequired,
};
export default ResetBtn;
