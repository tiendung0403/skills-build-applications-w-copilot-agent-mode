import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://super-space-barnacle-pjjjpr4vrvj739p75-8000.app.github.dev/api/users/')
      .then(response => {
        console.log('Fetched users:', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="border-b">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;