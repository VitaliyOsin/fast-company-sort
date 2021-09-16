import React from "react";
import PropTypes from "prop-types";

const Quality = ({ q }) => (
  <span style={{ marginRight: "3px" }} className={`badge bg-${q.color}`}>
    {q.name}{" "}
  </span>
);

Quality.propTypes = {
  q:PropTypes.object.isRequired
};

export default Quality;
