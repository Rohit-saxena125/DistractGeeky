import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Plan = () => {
  const [plan, setPlan] = useState([]);
  // to do list for the day for logged in user
  useEffect(() => {
    axios
      .get('/api/plan')
      .then((res) => {
        setPlan(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Plan</h1>
      <ul>
        {plan.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Plan;
