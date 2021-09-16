import React from "react";
import Bookmark from "./bookmark/bookmark";
import Quality from "./quality";
import PropTypes from "prop-types";

const User = ({ user, handleDelete, bookedHandler }) => (
  <>
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((q) => (
          <Quality key={q._id} q={q} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <Bookmark user={user} bookedHandler={bookedHandler} />
      </td>
      <td>
        <button
          id={user._id}
          type="button"
          className="btn btn-danger"
          onClick={() => {
            handleDelete(user._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  </>
);
User.propTypes = {
  user: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  bookedHandler: PropTypes.func.isRequired,
};
export default User;
