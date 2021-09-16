import React from "react";
import { hendlePhrase } from "../api/util";
import PropTypes from "prop-types";

const SearchStatus = ({ users }) => (
  <h2 className={"m-2"}>{hendlePhrase(users)}</h2>
);

SearchStatus.propTypes = {
  users: PropTypes.number.isRequired,
};

export default SearchStatus;
