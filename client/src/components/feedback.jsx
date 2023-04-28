import React, { useState } from 'react';
import '../css/feedback.css';
function UserFeedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the feedback to your server or store it in your state management system
    alert(`Submitting Feedback ${feedback}`);
    setFeedback('');
  };

  return (
    <div className='my'> 
      <form onSubmit={handleSubmit}>
      <label><h3>
        Give Us Feedback:</h3>
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      </label>
      <br />
      <button  className="di"type="submit"onSubmit={handleSubmit}>Submit</button>
    </form></div>
 
  );
}

export default UserFeedback;
