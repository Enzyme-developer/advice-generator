import { useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('Click the dice to generate an advice 👀');
  const [adviceId, setAdviceId] = useState('');

  const generateAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
      .then((data) => {
      const generatedAdviceId = data.slip.id
      const generatedAdvice = data.slip.advice
      // console.log(data.slip.id);
      setAdvice(generatedAdvice)
      setAdviceId(generatedAdviceId)
      })
    
  }

  return (
    <div className="App">
      <div className='container'>
        <p>ADVICE #{adviceId}</p>
        <h2>"{advice}"</h2>
        <div className='container__player'>
          <svg width="295" className='container__player-mobile' height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
          <svg className='container__player-desktop' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
        </div>
        <div className='container__dice' onClick={ generateAdvice }>
          <svg className='container__dice-all' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </div>
      </div>
    </div>
  );
}

export default App;
