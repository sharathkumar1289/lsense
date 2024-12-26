import React from 'react';

const Students = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Students</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Room</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>101</td>
            <td>+91 9876543210</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>102</td>
            <td>+91 9876543211</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Students;
