import React, { useState } from 'react';
import axios from 'axios';
import  '../css/bar.css';
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [questions, setQuestions] = useState([]);

  const searchQuestions = async () => {
    const response = await axios.get(`https://api.stackexchange.com/2.3/search?intitle=${query}&site=stackoverflow`);
    setQuestions(response.data.items);
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchQuestions();
  }

  return (
    <div>
      <h1>
        Search for Help??????
      </h1>
      <form onSubmit={handleSubmit}>
        <input style={{marginLeft:"100px"}} type="text" value={query} onChange={handleInputChange} placeholder="Search for programming concept" />
        <button type="submit" onClick={handleSubmit}  >     Search</button>
      </form>
      <ul>
        {questions.map((question) => (
          <li className="mydf" key={question.question_id}>
            <a href={question.link}>{question.title}</a>
          </li>
        ))}
      </ul>
      <br />
      <br />
    </div>
  );
};
export default SearchBar;