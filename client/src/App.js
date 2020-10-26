import React, { useState, useEffect } from 'react';
import { Route, useHistory, useLocation, Switch } from 'react-router-dom';

import './App.css';

// Components
import Layout from './layout/Layout/Layout.jsx';
import Login from './screens/Login/Login';
import Register from "./screens/Register/Register";
import MainContainer from './containers/MainContainer';
import SurveyContainer from './screens/SurveyContainer/SurveyContainer';

// Functions
import { loginEmployee, registerEmployee, removeToken, verifyEmployee } from './services/auth';
import { getAllCompanies, getOneEmployee } from './services/admin-info';
import { getAllSurveyFormats } from './services/survey-constructors.js'
import { getSurveyAnswers } from './services/answers'

function App() {
  // User Data
  const [currentUser, setCurrentUser] = useState(null);
  const [userSurveys, setUserSurveys] = useState(null)
  const [onboardingSurvey, setOnboardingSurvey] = useState([])

  // App Data
  const [companyInfo, setCompanyInfo] = useState([]);
  const [surveyFormats, setSurveyFormats] = useState([])

  // Location
  const history = useHistory();
  const location = useLocation();

  console.log(currentUser)
  console.log(surveyFormats)
  console.log(userSurveys)

  const demographicsSurvey = surveyFormats[0]
  const

  // let onboardingSurvey
  // if (userSurveys !== null) {
  //   onboardingSurvey = userSurveys[0]
  //   onboardingSurvey = onboardingSurvey.id
  // }

  console.log(onboardingSurvey)


  // UseEffects

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyEmployee();
      setCurrentUser(userData)
      if (userData === null) {
        history.push('/login')
      }
    }
      handleVerify();
  }, [])

  useEffect(() => {
      const generateCompanyList = async () => {
        const companyInfo = await getAllCompanies();
        setCompanyInfo(companyInfo)
      }
      generateCompanyList();
  }, [])

  useEffect(() => {
    const getAllSurveyFormatData = async () => {
      const surveyFormatData = await getAllSurveyFormats();
      setSurveyFormats(surveyFormatData);
    }
    getAllSurveyFormatData();
  }, [])

  useEffect(() => {
    if (currentUser !== null) {
      const userID = currentUser.id
      console.log(userID)
      const getEmployeeSurveys = async (userID) => {
        const employee = await getOneEmployee(userID);
        const employeeSurveys = employee.surveys
        console.log(employee)
        setUserSurveys(employeeSurveys);
        if (employeeSurveys === null) {
          history.push('/complete-profile')
        }
      }
      getEmployeeSurveys(userID)
    }
  }, [currentUser])

  useEffect(() => {
    if ((userSurveys != null ) && (userSurveys.length !== 0)) {
      console.log(userSurveys)
      const survey = userSurveys[0]
      console.log(survey)
      const surveyID = survey.id
      console.log(surveyID)
      const getOnboardingSurveyAnswers = async (surveyID) => {
        const onboardingSurveyData = await getSurveyAnswers(surveyID)
        setOnboardingSurvey(onboardingSurveyData.data)
      }
      getOnboardingSurveyAnswers(surveyID)
    }
  }, [userSurveys])

  // Login Functions

  const handleLogin = async (loginData) => {
    const employeeData = await loginEmployee(loginData);
    setCurrentUser(employeeData);
    history.push('/home');
  }

  const handleRegister = async (registerData) => {
    const employeeData = await registerEmployee(registerData);
    setCurrentUser(employeeData);
    history.push('/complete-profile')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/login')
  }


  return (

    <div className="app-container">

      { !currentUser ?
      
        <Switch>

          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path="/register">
            <Register handleRegister={handleRegister} companyInfo={companyInfo} />
          </Route>

        </Switch>

        :

        <>
      
        { (onboardingSurvey === null) || (onboardingSurvey.length < 5) ?
        
          <Switch>
            <Route path="/complete-profile">
              <SurveyContainer currentUser={currentUser} surveyFormat={demographicsSurvey} setUserSurveys={setUserSurveys} />
            </Route>
          </Switch>
          
        :

        <Layout
          currentUser={currentUser}
          handleLogout={handleLogout}
          >
            <MainContainer currentUser={currentUser} />
          </Layout>
          }
          
        </>
      }
    </div>
  );
}

export default App;
