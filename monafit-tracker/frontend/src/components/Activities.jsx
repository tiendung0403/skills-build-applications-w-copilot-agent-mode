import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState({});  // Lưu thông tin người dùng theo ID

  useEffect(() => {
    // Fetch activities trước
    axios.get('https://super-space-barnacle-pjjjpr4vrvj739p75-8000.app.github.dev/api/activities/')
      .then(response => {
        console.log('Fetched activities:', response.data);
        setActivities(response.data);

        // Fetch tất cả thông tin người dùng
        axios.get('https://super-space-barnacle-pjjjpr4vrvj739p75-8000.app.github.dev/api/users/')
          .then(userResponse => {
            const userMap = userResponse.data.reduce((acc, user) => {
              acc[user._id] = { username: user.username, email: user.email };  // Lưu username và email theo user ID
              return acc;
            }, {});
            setUsers(userMap);  // Lưu thông tin người dùng vào state
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);  // Chỉ chạy khi component mount

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🔥 Activities Log 🔥</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="text-left px-6 py-3">#</th>
              <th className="text-left px-6 py-3">Activity Type</th>
              <th className="text-left px-6 py-3">Duration</th>
              <th className="text-left px-6 py-3">User</th>
              <th className="text-left px-6 py-3">Email</th>  {/* Thêm cột email */}
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => {
              const userId = activity.user.split(" ")[2].slice(1, -1);  // Lấy ID từ chuỗi
              const { username, email } = users[userId] || { username: 'Loading...', email: 'Loading...' };  // Nếu chưa có username hoặc email thì hiển thị 'Loading...'
              return (
                <tr key={activity._id} className="border-b hover:bg-gray-100 transition">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{activity.activity_type}</td>
                  <td className="px-6 py-4">{activity.duration}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{username}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{email}</td>  {/* Hiển thị email */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
