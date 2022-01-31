import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import About from './About';

function App() {
  const [ feedback, setFeedback ] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback')) {
      setFeedback((prevState) => (
        prevState.filter((item) => item.id !== id)
      ))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback((prevState) => {
      return [newFeedback, ...prevState]
    })
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats  feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
      {/* <Router> */}
        {/* <NavLink to="/" activeClassName="active">home</NavLink> */}
        {/* <NavLink to="/about" activeClassName="active">about</NavLink> */}
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;