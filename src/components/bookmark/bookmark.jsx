import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./bookmark.css";
import PropTypes from "prop-types";

const Bookmark = ({ user, bookedHandler }) => {
  const bookHandler = () => {
    bookedHandler(user._id);
  };
  return (
    <i
      onClick={bookHandler}
      className={`bi bi-bookmark${user.booked ? "-fill" : ""}`}
    ></i>
  );
};
Bookmark.propTypes = {
  user: PropTypes.object.isRequired,
  bookedHandler: PropTypes.func.isRequired,
};
export default Bookmark;
