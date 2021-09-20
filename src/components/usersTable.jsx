import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark/bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UsersTable = ({
  users,
  handleDelete,
  handleOnSort,
  selectedSort,
  bookedHandler,
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    profession: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    booked: {
      path: "booked",
      name: "Избранное",
      component: (user) => (
        <Bookmark user={user} bookedHandler={bookedHandler} />
      ),
    },
    delete: {
      component: (user) => (
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
      ),
    },
  };

  return (
    <Table
      handleOnSort={handleOnSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    >
      <TableHeader {...{ handleOnSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  bookedHandler: PropTypes.func.isRequired,
  handleOnSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
};

export default UsersTable;
