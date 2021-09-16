import React, { useState, useEffect } from "react";
import SearchStatus from "./searchStatus";
import User from "./user";
import ResetBtn from "./resetBtn";
import Pagination from "./pagination";
import { pagination } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";

const Users = ({
  users: allUsers,
  handleDelete,
  handleReset,
  bookedHandler,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();

  const pageSize = 4;

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data);
    });
  }, []);

  useEffect(() => {
    console.log(professions);
  }, [professions]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const onHandleReset = () => {
    handleReset();
    setCurrentPage(1);
  };

  const handleProfessionSelect = (item) => {
    console.log(item);
    setSelectedProf(item);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession._id === selectedProf._id)
    : allUsers;
  const users = pagination(filteredUsers, currentPage, pageSize);
  const count = filteredUsers.length;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (filteredUsers.length / pageSize === currentPage - 1) {
      console.log("CP");
      setCurrentPage(currentPage - 1);
    }
  }, [filteredUsers, handleDelete]);

  const clearFilter = () => {
    setSelectedProf();
  };
  return (
    <div className="d-flex flex-column">
      <div className="p-3">
        <SearchStatus users={count} />
        {count === 0 ? <ResetBtn handleReset={onHandleReset} /> : ""}
      </div>
      <div className="d-flex flex-row">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3 mt-4">
            <GroupList
              selectedItem={selectedProf}
              items={professions}
              onItemSelect={handleProfessionSelect}
            />
            <button
              className={
                "btn btn-secondary mt-2" + (selectedProf ? "" : " disabled")
              }
              onClick={clearFilter}
            >
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column p-3">
          <table className={`table ${count < 1 ? "d-none" : ""}`}>
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User
                  key={user._id}
                  user={user}
                  handleDelete={handleDelete}
                  bookedHandler={bookedHandler}
                />
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  allUsers: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  bookedHandler: PropTypes.func.isRequired,
};
export default Users;
