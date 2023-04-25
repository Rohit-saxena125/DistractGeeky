import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await axios.get('http://localhost:9000/history');
        setHistory(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getHistory();
  }, []);

  return (
    <div>
      <h1>My History</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number of Videos Watched</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.numberOfVideos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;
