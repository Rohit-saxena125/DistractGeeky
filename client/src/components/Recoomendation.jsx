import { useState } from 'react';
import '../css/recoomendation.css';
import Bar from '../components/BarSearch';
function Recoomendation() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Read More About React',
      answer: <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">click here</a>
    },
    {
      id: 2,
      question: 'Read More About HTML',
      answer: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">click here</a>
    },
    {
      id: 3,
      question: 'Read More About CSS',
      answer: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">click here</a>
    },
    {
        id: 4,
        question: 'Read More About React JAVASCRIPT',
        answer: <a href="https://developer.mozilla.org/en-US/docs/Web/JAVASCRIPT">click here</a>
      },
      {
        id: 5,
        question: 'Read More About MONGO DB',
        answer: <a href="https://www.mongodb.com/docs/atlas/getting-started/">click here</a>
      },
      {
        id: 6,
        question: 'Read More About NODE JS',
        answer: <a href="https://nodejs.org/en/docs/">click here</a>
      },
      {
        id: 7,
        question: 'Read More About EXPRESS JS',
        answer: <a href="https://expressjs.com/en/starter/installing.html">click here</a>
      },
      {
        id: 8,
        question: 'Read More About REACT Native',
        answer: <a href="https://reactnative.dev/docs/getting-started">click here</a>
      },
      {
        id: 9,
        question: 'Read More About Flutter',
        answer: <a href="https://flutter.dev/docs/get-started/install">click here</a>
      },
      {
        id: 10,
        question: 'Read More About Testing',
        answer: <a href="https://www.guru99.com/software-testing.html">click here</a>
      }
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <div  >
    <Bar />
    </div>
    <div className="faq-section">
      {questions.map((question, index) => (
        <div key={question.id} className="faq-item">
          <div className="faq-question" onClick={() => handleClick(index)}>
            {question.question}
            <span className={index === activeIndex ? 'icon minus' : 'icon plus'}></span>
          </div>
          {index === activeIndex && (
            <div className="faq-answer">{question.answer}</div>
          )}
        </div>
      ))}
    </div>
    
    </>
  );
}
export default Recoomendation;