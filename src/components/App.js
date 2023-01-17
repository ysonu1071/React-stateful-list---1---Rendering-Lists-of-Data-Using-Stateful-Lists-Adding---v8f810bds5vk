import React, { useState } from 'react'
// import { FaCheck } from "react-icons/fa";
import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
  const [year, setYear] = useState(null);

  const handleChange = (e) => {
    if (e.target.value == '') {
      setYear(null)
    }else{
    setYear(e.target.value)
    }
   
  }
  return (
    <div id="main">
      <select value={year} onChange={handleChange}>
        <option value={null}></option>
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
      <div id='selected-year'>
        {year == null? 
          'No year selected':
          `Selected year-${year}`
        }
        <ul>
          {year == null ? '': data[year].map(info=> <li>{info}</li>)}
        </ul>
      </div>
    </div>
  )
}


export default App;
