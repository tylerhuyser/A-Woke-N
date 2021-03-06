import React from 'react'
import { useHistory } from 'react-router-dom';

import './Home.css'


export default function Home(props) {
  
  const { setPendingSurvey } = props;
  const history = useHistory();

  function beginJournal(e) {
    e.preventDefault();
    setPendingSurvey(true)
    history.push('/new-journal')
  }

  return (
    <div className={"home-container fade-in-home"}>
      
      <div className="home-card">

        <p className="home-card-title">NOTIFICATIONS</p>

        <div className="home-card-content" id="notifications">
          <p className="home-card-copy">Let's get started!</p>
          <p className="home-card-copy">Complete Your Onboarding Assement</p>
          <button className="home-journal-button" onClick={beginJournal}>BEGIN</button>
        </div>

      <div className="home-card">

      <p className="home-card-title">UPCOMING SCHEDULE</p>
          
          <div className="home-card-content" id="event">
            <div className="event-info" id="event-date">
              <p className="event-copy" id="event-day">21</p>
              <p className="event-copy" id="event-month">JUN</p>
            </div>
            
            <div className="event-info" id="event-name">
              <p className="event-copy" id="event-title">Lesson 1</p>
              <p className="event-copy" id="event-subtitle">An Introduction to Self-Regulation Strategies for Bias</p>
            </div>
        </div>
      </div>



      </div>



    </div>
  )
}