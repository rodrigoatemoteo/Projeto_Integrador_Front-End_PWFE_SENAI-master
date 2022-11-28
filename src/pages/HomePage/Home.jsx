import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';

import Cards from '../../components/Cards/Cards';

const HomePage = () => {
  const { logout } = useContext(AuthContext);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = [{ '_id': 1, 'email': 'admin@admin.com', 'password': '123' }, { '_id': 2, 'email': 'user@user.com', 'password': '321' }];
      setUsers(response);
      setLoading(false);
    })();
  }, []);

  const handleLogout = () => {
    logout();
  };

  if(loading){
    return <div className='loading'><h1>Carregando dados...</h1></div>
  }

  return (
    <>
      <Header />

      <Cards />

      <div>

          <ul>
            {users.map((user) => {
              <li key={user._id}>
                {user._id} - {user.email}
              </li>
            })};
          </ul>

      </div>

    </>

  );
};

export default HomePage;