import { useState } from 'react';
import '../css/FaqSection.css';
import Feedback  from "./feedback";
function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Why to use it?',
      answer: 'So that you dont get distracted/disturbed with the commercials and other popups you get while wtching the lecture/tutorial.'
    },
    {
      id: 2,
      question: 'Do I have to take any responsibility?',
      answer: 'Yes, we can only provide a distraction free platform, but sitting for hours to study is your resonsibility.'
    },
    {
      id: 3,
      question: 'Is it FREE?',
      answer: 'As of now, you can use it for free!!!'
    },
    {
        id: 4,
        question: 'Should I recommend it to others?',
        answer: 'Yes, for sure! As a good friend you should help your friends,recommending this to them!'
      },
      {
        id: 5,
        question: 'Can it track my sitting hours?',
        answer: 'For various security issues, we havent integrated personalised experience! but can we done with payement!!!l'
      }
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="body">
      <h1 className="faq-title">Frequently Asked Questions</h1>
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
    <Feedback />
    </div>
    
  );
}
export default FaqSection;