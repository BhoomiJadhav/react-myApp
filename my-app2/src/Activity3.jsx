import { useState, useEffect } from "react";

const Activity3 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>User List</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
              Username
            </th>
            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {user.username}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {user.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activity3;
