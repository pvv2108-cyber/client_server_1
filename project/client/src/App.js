import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {users.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;