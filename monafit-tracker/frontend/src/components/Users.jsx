import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/')
      .then(response => {
        const parsedUsers = JSON.parse(response.data.users);
        setUsers(parsedUsers);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.pk} className="border-b py-2">
            {user.fields.username} ({user.fields.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
