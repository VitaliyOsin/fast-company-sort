import React, { useState, useEffect } from "react";
import api from "./api";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState();
  const handleDelete = (userId) => {
    setUsers(users.filter((v) => v._id !== userId));
  };

  const handleReset = async () => {
    let data = await api.users.fetchAll();

    data = data.map((v) => ({ ...v, booked: false }));
    setUsers(data);
  };
  const bookedHandler = (userId) => {
    const newUsers = users.map((user) => {
      if (user._id === userId) {
        user.booked = !user.booked;
      }
      return user;
    });

    setUsers(newUsers);
  };

  useEffect(() => {
    api.users.fetchAll().then((data) => {
      data.map((v) => ({ ...v, booked: false }));
      setUsers(data);
    });
  }, []);

  return (
    <>
      {users && (
        <Users
          users={users}
          handleDelete={handleDelete}
          handleReset={handleReset}
          bookedHandler={bookedHandler}
        />
      )}
    </>
  );
};

export default App;
